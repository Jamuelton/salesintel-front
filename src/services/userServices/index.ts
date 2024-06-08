import { AxiosError } from "axios";
import { api } from "../api";
import { UserInterface } from "../types/userType";

export const PostUser = async (data: UserInterface) => {
  try {
    const response = await api.post("/user/auth", data);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};

export const LoginUser = async (data: UserInterface) => {
  try {
    const response = await api.post("/user/auth/login", data);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};
