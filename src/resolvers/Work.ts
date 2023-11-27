import { WorkResolvers } from "../generated/resolverTypes";
import { coerceOrFail } from "./coersion";
import paginate from "./pagination";

const Work: WorkResolvers = {
  iswc: async ({ iswc }) => iswc,
  title: async ({ iswc }, _args, { dataSources: { quansic } }) =>
    coerceOrFail(await quansic.getWorkByISWC({ iswc })).title,
  recordings: async (
    { iswc },
    { limit, offset },
    { dataSources: { quansic } },
  ) =>
    paginate({
      array: coerceOrFail(await quansic.getWorkByISWC({ iswc })).recordings || [],
      limit,
      offset,
    }),
};

export default Work;
