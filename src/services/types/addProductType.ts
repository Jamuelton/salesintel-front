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
    .min(2, { message: "Necessário mais de 2 caracteres" })
    .max(60, { message: "Apenas 60 caracteres permitidos" }),
  quantity: z
    .number({
      required_error: "A quantidade é obrigatória",
      invalid_type_error: "Necessário ser número",
    })
    .min(1, { message: "Necessário ser no mínimo 1" }),
  lote: z.string(),
  purchasePrice: z
    .number({
      invalid_type_error: "Necessário ser número",
      required_error: "O preço de compra é obrigatório",
    })
    .min(1, { message: "Necessário ser maior que 0" }),
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
