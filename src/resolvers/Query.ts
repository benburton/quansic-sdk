import { QueryResolvers } from "../generated/resolverTypes";
import paginate from "./pagination";
import { coerce } from "./coersion";

const Query: QueryResolvers = {
  recordingByISRC: async (_parent, { isrc }, { dataSources: { quansic } }) =>
    coerce(await quansic.getRecordingByISRC({ isrc })),
  releaseByUPC: async (_parent, { upc }, { dataSources: { quansic } }) =>
    coerce(await quansic.getReleasebyUPC({ upc })),
  searchParties: async (
    _parent,
    { name, limit, offset },
    { dataSources: { quansic } },
  ) => {
    const response = (
      await quansic._searchParties(new URLSearchParams({ name }))
    ).map(({ ids, ...rest }) => ({
      ids: {
        ...ids,
        discogsIds: ids.discogsIds || [],
      },
      ...rest,
    }));
    return paginate({ array: response, limit, offset });
  },
};

export default Query;
