import { z } from "zod";
import { IdsSchema } from "./ids";
import { ScoreSchema } from "./score";

export const PartySchema = z.object({
  name: z.string(),
  ids: IdsSchema,
  popularity: ScoreSchema,
  // these need to be either a YYYY or YYYY-MM-DD parsed to Date
  birthdate: z.string().optional(),
  deathdate: z.string().optional(),
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  // can be an enum... RealName, Pseudonym
  nameType: z.string().optional(),
  // this looks like ISO_3166-2. naive regex to ensure it conforms to two uppercase letters
  nationality: z
    .string()
    .regex(/^[A-Z]{2}$/)
    .optional(),
  nationalitySource: z.string().optional(),
  // Person, Band, optional
  type: z.string().optional(),
  // Male, Female, optional
  gender: z.string().optional(),
  comment: z.string().optional(),
  visual: z.string().optional(),
});
