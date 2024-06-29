import { AddProductInterface } from "./addProductType";

export interface AddSalesInterface {
  value?: number;
  quantity?: number;
  productId?: number;
}

export interface SalesInterface {
  value: number;
  createdAt: string;
  updatedAt: string;
  salesProducts: AddProductInterface;
}
