import { RecordingResolvers } from "../generated/resolverTypes";
import { coerceOrFail } from "./coersion";

const Recording: RecordingResolvers = {
  isrc: async ({ isrc }) => isrc,
  title: async ({ isrc }, _args, { dataSources: { quansic } }) =>
    coerceOrFail(await quansic.getRecordingByISRC({ isrc })).title,
  works: async ({ isrc }, _args, { dataSources: { quansic } }) =>
    coerceOrFail(await quansic.getRecordingByISRC({ isrc })).works || [],
  contributors: async ({ isrc }, { type }, { dataSources: { quansic } }) => {
    const response = coerceOrFail(await quansic.getRecordingByISRC({ isrc }));
    return (response.contributors || []).filter(
      (contributor) => contributor.type === type,
    );
  },
};

export default Recording;
