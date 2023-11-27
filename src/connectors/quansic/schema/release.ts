import { z } from "zod";
import { IdsSchema } from "./ids";

export const ReleaseSchema = z.object({
  upc: z.string(),
  title: z.string().optional(),
  year: z.string().optional(),
  discogsMasterId: z.string().optional(),
  parties: z
    .array(z.object({ ids: IdsSchema, type: z.string().optional() }))
    .optional(),
});
