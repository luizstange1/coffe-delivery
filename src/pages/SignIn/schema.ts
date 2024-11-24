import { z } from "zod";

export const loginDataSchema = z.object({
  email: z
    .string()
    .min(1, "Por favor, preencha seu email")
    .trim()
    .email("O formato do email é inválido")
    .toLowerCase(),
  password: z.string().min(1, "Por favor, preencha sua senha"),
});

export type LoginDataSchema = z.infer<typeof loginDataSchema>;
