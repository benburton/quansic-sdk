import { z } from "zod";
import DataLoader from "dataloader";
import axios, { AxiosError, AxiosResponse } from "axios";
import {
  PartySchema,
  RecordingSchema,
  ReleaseSchema,
  WorkSchema,
} from "./schema";
import { Party, Recording, Release, Work } from "./types";

interface QuansicConfig {
  apiKey: string;
  logLevel?: string;
}

class Quansic {
  static API_BASE: string = "https://x1-api.quansic.com";

  private apiKey: string;
  private _debug: (message?: any, ...optionalParams: any[]) => void;
  private _info: (message?: any, ...optionalParams: any[]) => void;

  private async _get(route: string): Promise<AxiosResponse | undefined> {
    const path = `${Quansic.API_BASE}/${route}`;
    this._info(`Start GET ${path}`);
    try {
      const response = axios(path, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
      });
      this._debug(
        `RAW: ${path}`,
        JSON.stringify((await response).data, null, 2),
      );
      return response;
    } catch (e) {
      if (e instanceof AxiosError && e.response?.status === 404)
        return undefined;
      throw e;
    } finally {
      this._info(`  End GET ${path}`);
    }
  }

  constructor(config: QuansicConfig) {
    this.apiKey = config.apiKey;
    this._debug = config.logLevel !== "OFF" ? () => {} : console.log;
    this._info = config.logLevel !== "INFO" ? () => {} : console.log;
  }

  private partyDataLoader: DataLoader<string, Party | undefined> =
    new DataLoader(async (quansicIds) =>
      Promise.all(
        quansicIds.map(async (quansicId) => {
          const response = await this._get(`api/v1/party/${quansicId}`);
          if (!response) return undefined;
          return z.object({ party: PartySchema }).parse(response.data).party;
        }),
      ),
    );

  private releaseDataLoader: DataLoader<string, Release | undefined> =
    new DataLoader(async (upcs) =>
      Promise.all(
        upcs.map(async (upc) => {
          const response = await this._get(`api/v1/release/${upc}`);
          if (!response) return undefined;
          return z.object({ release: ReleaseSchema }).parse(response.data)
            .release;
        }),
      ),
    );

  private recordingDataLoader: DataLoader<string, Recording | undefined> =
    new DataLoader(async (isrcs) =>
      Promise.all(
        isrcs.map(async (isrc) => {
          const response = await this._get(`api/v1/recording/${isrc}`);
          if (!response) return undefined;
          return z.object({ recording: RecordingSchema }).parse(response.data)
            .recording;
        }),
      ),
    );

  private workDataLoader: DataLoader<
    { value: string; type: "iswc" | "bowi" },
    Work | undefined,
    { value: string; type: "iswc" | "bowi" }
  > = new DataLoader(
    async (keys) =>
      Promise.all(
        keys.map(async ({ value, type }) => {
          const response = await this._get(`api/v1/work/${type}/${value}`);
          if (!response) return undefined;
          return z.object({ work: WorkSchema }).parse(response.data).work;
        }),
      ),
    {
      cacheKeyFn: ({ value, type }) => `${type}/${value}`,
    },
  );

  /**
   * Call the `/api/v1/party` endpoint, return results which adhere to
   * PartySchema.
   *
   * This endpoint appears to return a single page of 100 results, no indication
   * of total availble results, nested in the `parties` root key (this is
   * consistent with their Swagger docs).
   *
   * @returns {Promise<Party[]>}
   */
  async _searchParties(queryParams: URLSearchParams): Promise<Party[]> {
    const response = await this._get(`api/v1/party?${queryParams.toString()}`);
    if (!response) return [];
    this._debug("response", response.data);
    return z.object({ parties: z.array(PartySchema) }).parse(response.data)
      .parties;
  }

  async getParty({
    quansicId,
  }: {
    quansicId: string;
  }): Promise<Party | undefined> {
    return this.partyDataLoader.load(quansicId);
  }

  async getReleasebyUPC({
    upc,
  }: {
    upc: string;
  }): Promise<Release | undefined> {
    const response = await this.releaseDataLoader.load(upc);
    this._debug("response", response);
    return response;
  }

  async getPartyReleases({
    quansicId,
  }: {
    quansicId: string;
  }): Promise<Release[]> {
    const response = await this._get(`api/v1/party/${quansicId}/releases`);
    if (!response) return [];
    this._debug("response", response.data);
    return z.object({ releases: z.array(ReleaseSchema) }).parse(response.data)
      .releases;
  }

  async getPartyRecordings({
    quansicId,
  }: {
    quansicId: string;
  }): Promise<Recording[]> {
    const response = await this._get(`api/v1/party/${quansicId}/recordings`);
    if (!response) return [];
    this._debug("response", response.data);
    return z
      .object({
        total: z.number(),
        offset: z.number(),
        data: z.array(RecordingSchema),
      })
      .parse(response.data).data;
  }

  async getRecordingByISRC({
    isrc,
  }: {
    isrc: string;
  }): Promise<Recording | undefined> {
    return this.recordingDataLoader.load(isrc);
  }

  async getWorkByISWC({ iswc }: { iswc: string }): Promise<Work | undefined> {
    return this.workDataLoader.load({ value: iswc, type: "iswc" });
  }
}

export default Quansic;
