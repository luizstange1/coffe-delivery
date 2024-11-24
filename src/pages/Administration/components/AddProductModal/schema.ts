import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(4),
  details: z.string().min(4),
  tag: z.string().min(4),
  price: z.coerce.number().min(1),
  image_path: z.any(),
});

export type CreateProductSchema = z.infer<typeof createProductSchema>;
