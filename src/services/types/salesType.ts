import { AddProductInterface } from "./addProductType";

export interface AddSalesInterface {
  value?: number;
  quantity?: number;
  productId?: number;
}

export interface SalesInterface {
  id: number;
  value: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  salesProducts: AddProductInterface;
  product: AddProductInterface;
}
