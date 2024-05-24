import { z } from 'zod';

const wordSchema = z.object({
  content: z.string(),
});

export default wordSchema;
