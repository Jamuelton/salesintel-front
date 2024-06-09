import { AxiosError } from "axios";
import { api } from "../api";

export const GetCategories = async (token: string) => {
  try {
    const response = await api.get("/category", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};
