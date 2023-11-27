import { z } from "zod";
import { IdsSchema } from "./ids";
import { ScoreSchema } from "./score";
// import { RecordingSchema } from './recording';

export const WorkSchema = z.object({
  iswc: z.string(),
  title: z.string(),
  contributors: z.array(z.object({ ids: IdsSchema })).optional(),
  recordings: z.array(z.object({ isrc: z.string() })).optional(),
  q2Score: ScoreSchema.optional(),
});
