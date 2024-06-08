import { api } from "../api";
import { UserInterface } from "../types/userType";

export const PostUser = async (data: UserInterface) => {
  try {
    const response = await api.post("/user/auth", data);
    return response;
  } catch (error) {
    alert("Erro ao cadastrar, tente novamente.");
  }
};
