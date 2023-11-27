import { z } from "zod";

export const IdsSchema = z.object({
  quansicId: z.string(),
  amazonIds: z.array(z.string()).optional(),
  appleIds: z.array(z.string()).optional(),
  deezerIds: z.array(z.string()).optional(),
  discogsIds: z.array(z.string()).optional(),
  ipis: z.array(z.string()).optional(),
  isnis: z.array(z.string()).optional(),
  musicBrainzIds: z.array(z.string().uuid()).optional(),
  spotifyIds: z.array(z.string()).optional(),
  wikidataIds: z.array(z.string()).optional(),
  ipns: z.array(z.string()).optional(),
  mergedIsnis: z.array(z.string()).optional(),
});
