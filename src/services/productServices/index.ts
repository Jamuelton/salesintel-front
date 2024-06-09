import { AxiosError } from "axios";
import { api } from "../api";
import { AddProductInterface } from "../types/addProductType";

export const GetProductsByUser = async (token: string, email: string) => {
  try {
    const response = await api.get(`/products/user/${email}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};

export const PostProduct = async (data: AddProductInterface, token: string) => {
  try {
    const response = await api.post("/products", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};
