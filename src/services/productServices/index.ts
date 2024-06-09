import { AxiosError } from "axios";
import { api } from "../api";

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
