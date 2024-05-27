import { z } from "zod";

export interface AddItemsInterface {
  quantity: number;
}

export const AddItemsSchema = z.object({
  quantity: z
    .number({
      required_error: "A quantidade é obrigatória",
      invalid_type_error: "Necessário ser número",
    })
    .min(1, { message: "Necessário ser no mínimo 1" }),
});
