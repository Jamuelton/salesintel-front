import { AxiosError } from "axios";
import { api } from "../api";
import { AddSalesInterface } from "../types/salesType";

export const GetSales = async (token: string) => {
  try {
    const response = await api.get(`/sale`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};

export const PostSales = async (data: AddSalesInterface, token: string) => {
  try {
    const response = await api.post("/sale", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};
