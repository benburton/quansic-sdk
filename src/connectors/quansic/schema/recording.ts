import { z } from "zod";
import { ContributorSchema } from ".";

export const RecordingSchema = z.object({
  isrc: z.string(),
  title: z.string(),
  musicBrainzId: z.string().uuid().optional(),
  durationMs: z.number().optional(),
  releases: z.array(z.object({ upc: z.string() })).optional(),
  contributors: z.array(ContributorSchema).optional(),
  works: z.array(z.object({ iswc: z.string() })).optional(),
});
