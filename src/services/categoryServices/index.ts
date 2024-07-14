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

export const PostCategory = async (name: string, token: string) => {
  try {
    const response = await api.post(
      "/category",
      { name: name },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};

export const DeleteCategories = async (token: string, id: number) => {
  try {
    const response = await api.delete(`/category/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};

export const PutCategories = async (
  token: string,
  id: number,
  name: string
) => {
  try {
    const response = await api.put(
      `/category/${id}`,
      { name: name },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};
