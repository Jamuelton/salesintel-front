import { z } from "zod";

export interface AddProductInterface {
  id?: number;
  name: string;
  purchasePrice: number;
  salePrice: number;
  quantity: number;
  unit: string;
  expiration: string;
  batch: number;
  categoryId: number;
  userId: number;
}

const currentDate = new Date();

export const AddProductSchema = z.object({
  name: z
    .string({
      required_error: "O nome é obrigatório",
    })
    .min(3, { message: "Necessário mais de 3 caracteres" })
    .max(100, { message: "Apenas 100 caracteres permitidos" }),
  quantity: z
    .number({
      required_error: "A quantidade é obrigatória",
      invalid_type_error: "Necessário ser número",
    })
    .min(1, { message: "Necessário ser no mínimo 1" }),
  lote: z
    .number({
      required_error: "O lote é obrigatório",
    })
    .min(0, { message: "Necessário ter no mínimo 1 caractere" })
    .max(9999999999, { message: "Apenas 10 caracteres são permitidos" }),
  purchasePrice: z
    .number({
      invalid_type_error: "Necessário ser número",
      required_error: "O preço de compra é obrigatório",
    })
    .min(0.001, { message: "Necessário ser maior que 0" }),
  salePrice: z
    .number({
      invalid_type_error: "Necessário ser número",
      required_error: "O preço de venda é obrigatório",
    })
    .min(1, { message: "Necessário ser maior que 0" }),
  expirationDate: z.date().min(currentDate, {
    message: "A data de validade não pode ser anterior ao dia atual",
  }),
});
