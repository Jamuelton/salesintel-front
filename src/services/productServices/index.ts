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

export const GetProductById = async (token: string, id: string) => {
  try {
    const response = await api.get(`/products/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};

export const UpdateProduct = async (
  data: AddProductInterface,
  token: string,
  id: string
) => {
  try {
    const response = await api.put(`/products/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};

export const DeleteProduct = async (token: string, id: string) => {
  try {
    const response = await api.delete(`/products/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};
