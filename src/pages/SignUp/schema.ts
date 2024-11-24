import { z } from "zod";

export const createUserSchema = z
  .object({
    name: z
      .string()
      .min(4, "Seu nome deve ter pelo menos 4 caracteres")
      .trim()
      .transform((name) => {
        return name
          .trim()
          .split(" ")
          .map((word) => {
            return word[0].toLocaleUpperCase().concat(word.substring(1));
          })
          .join(" ");
      }),
    surname: z
      .string()
      .min(4, "Seu sobrenome deve ter pelo menos 4 caracteres")
      .trim()
      .transform((surname) => {
        return surname
          .trim()
          .split(" ")
          .map((word) => {
            return word[0].toLocaleUpperCase().concat(word.substring(1));
          })
          .join(" ");
      }),
    email: z
      .string()
      .email("Por favor, preencha seu email")
      .min(1, "Por favor, preencha seu email")
      .toLowerCase()
      .trim(),
    password: z
      .string()
      .min(6, "Sua senha deve conter pelo menos 6 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não são iguais",
    path: ["confirmPassword"],
  });

export type CreateUserSchema = z.infer<typeof createUserSchema>;
