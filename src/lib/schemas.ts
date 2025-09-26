import { z } from 'zod'

export const configSchema = z.object({
  apiUrl: z.url(),
  timeout: z.number().int().min(1000),
  retries: z.number().int().min(0).max(5),
})

export type Config = z.infer<typeof configSchema>
