import { z } from "zod";

export interface RegisterInterface {
  name?: string;
  email: string;
  password: string;
}

export const RegisterSchema = z.object({
  name: z
    .string({
      required_error: "O nome é obrigatório",
    })
    .min(2, { message: "Necessário mais de 2 caracteres" })
    .max(20, { message: "Apenas 20 caracteres permitidos" }),
  email: z
    .string({
      required_error: "O email é obrigatório",
    })
    .email(),
  password: z
    .string({
      required_error: "A senha é obrigatório",
    })
    .min(8, { message: "Necessário pelo menos 8 caracteres" }),
});
