import { z } from "zod";
import {
  ContributorSchema,
  PartySchema,
  RecordingSchema,
  ReleaseSchema,
  WorkSchema,
} from "./schema";

export type Contributor = z.infer<typeof ContributorSchema>;
export type Party = z.infer<typeof PartySchema>;
export type Recording = z.infer<typeof RecordingSchema>;
export type Release = z.infer<typeof ReleaseSchema>;
export type Work = z.infer<typeof WorkSchema>;
