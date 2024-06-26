import { z } from 'zod';

export const TodoSchema = z.object({
  id: z.string().optional(),
  description: z.string(),
  date: z.coerce.date(),
  isComplete: z.boolean().default(false),
});

export type TodoType = z.infer<typeof TodoSchema>;
