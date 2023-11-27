import { ReleaseResolvers } from "../generated/resolverTypes";
import { coerceOrFail } from "./coersion";

const Release: ReleaseResolvers = {
  upc: async ({ upc }) => upc,
  title: async ({ upc }, _args, { dataSources: { quansic } }) =>
    coerceOrFail(await quansic.getReleasebyUPC({ upc })).title || null,
  year: async ({ upc }, _args, { dataSources: { quansic } }) =>
    coerceOrFail(await quansic.getReleasebyUPC({ upc })).year || null,
  parties: async ({ upc }, { type }, { dataSources: { quansic } }) => {
    const parties =
      coerceOrFail(await quansic.getReleasebyUPC({ upc })).parties || [];
    const filtered = type
      ? parties.filter((party) => party.type === type)
      : parties;
    return filtered.map(({ ids, ...rest }) => ({
      ids: {
        ...ids,
        discogsIds: ids.discogsIds || [],
      },
      ...rest,
    }));
  },
};

export default Release;
