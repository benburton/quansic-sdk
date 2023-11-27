import { z } from "zod";

export const ScoreSchema = z.number().gte(0).lte(100);
