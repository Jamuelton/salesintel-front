import { z } from "zod";

export interface UserInterface {
  id?: number;
  company?: string;
  email: string;
  password: string;
}

export const UserSchema = z.object({
  company: z
    .string({
      required_error: "O nome da empresa é obrigatório",
    })
    .min(2, { message: "Necessário mais de 2 caracteres no nome da empresa" })
    .max(20, { message: "Apenas 20 caracteres permitidos no nome da empresa" }),
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
