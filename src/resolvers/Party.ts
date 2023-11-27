import { PartyIdsResolvers, PartyResolvers } from "../generated/resolverTypes";
import paginate from "./pagination";
import { coerceOrFail } from "./coersion";

export const PartyIds: PartyIdsResolvers = {
  quansicId: ({ quansicId }) => quansicId,
  discogsIds: ({ discogsIds }) => discogsIds || [],
};

export const Party: PartyResolvers = {
  ids: async ({ ids }) => ids,
  comment: async (
    { ids: { quansicId } },
    _args,
    { dataSources: { quansic } },
  ) => coerceOrFail(await quansic.getParty({ quansicId })).comment || null,
  name: async ({ ids: { quansicId } }, _args, { dataSources: { quansic } }) =>
    coerceOrFail(await quansic.getParty({ quansicId })).name,
  firstName: async (
    { ids: { quansicId } },
    _args,
    { dataSources: { quansic } },
  ) => coerceOrFail(await quansic.getParty({ quansicId })).firstname || null,
  lastName: async (
    { ids: { quansicId } },
    _args,
    { dataSources: { quansic } },
  ) => coerceOrFail(await quansic.getParty({ quansicId })).lastname || null,
  nationality: async (
    { ids: { quansicId } },
    _args,
    { dataSources: { quansic } },
  ) => coerceOrFail(await quansic.getParty({ quansicId })).nationality || null,
  nationalitySource: async (
    { ids: { quansicId } },
    _args,
    { dataSources: { quansic } },
  ) =>
    coerceOrFail(await quansic.getParty({ quansicId })).nationalitySource ||
    null,
  visual: async ({ ids: { quansicId } }, _args, { dataSources: { quansic } }) =>
    coerceOrFail(await quansic.getParty({ quansicId })).visual || null,
  popularity: async (
    { ids: { quansicId } },
    _args,
    { dataSources: { quansic } },
  ) => coerceOrFail(await quansic.getParty({ quansicId })).popularity || null,
  birthDate: async (
    { ids: { quansicId } },
    _args,
    { dataSources: { quansic } },
  ) => coerceOrFail(await quansic.getParty({ quansicId })).birthdate || null,
  deathDate: async (
    { ids: { quansicId } },
    _args,
    { dataSources: { quansic } },
  ) => coerceOrFail(await quansic.getParty({ quansicId })).deathdate || null,
  nameType: async (
    { ids: { quansicId } },
    _args,
    { dataSources: { quansic } },
  ) => coerceOrFail(await quansic.getParty({ quansicId })).nameType || null,
  type: async ({ ids: { quansicId } }, _args, { dataSources: { quansic } }) =>
    coerceOrFail(await quansic.getParty({ quansicId })).type || null,
  gender: async ({ ids: { quansicId } }, _args, { dataSources: { quansic } }) =>
    coerceOrFail(await quansic.getParty({ quansicId })).gender || null,
  releases: async (
    { ids: { quansicId } },
    { limit, offset },
    { dataSources: { quansic } },
  ) =>
    paginate({
      array: await quansic.getPartyReleases({ quansicId }),
      limit,
      offset,
    }),
  recordings: async (
    { ids: { quansicId } },
    { limit, offset },
    { dataSources: { quansic } },
  ) =>
    paginate({
      array: await quansic.getPartyRecordings({ quansicId }),
      limit,
      offset,
    }),
};
