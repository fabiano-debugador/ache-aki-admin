import { Api } from "../../services/api";
import { IUser } from "./types";

const setUserLocalStorage = (user: IUser | null): void => {
  localStorage.setItem("user", JSON.stringify(user));
};

const getUserLocalStorage = (): IUser | null => {
  const json = localStorage.getItem("user");

  if (!json) {
    return null;
  }

  const user = JSON.parse(json);
  return user ?? null;
};

const loginRequest = async (
  email: string,
  password: string
): Promise<IUser> => {
  try {
    const request = await Api.post("/auth", { email, password });

    return request.data;
  } catch (error: any) {
    return error;
  }
};

export { setUserLocalStorage, getUserLocalStorage, loginRequest };
