import { z } from "zod";
import { PartySchema } from "./party";

export const ContributorSchema = PartySchema.extend({
  contributorType: z.string(),
  role: z.string().optional(),
});
