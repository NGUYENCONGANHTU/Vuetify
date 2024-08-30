import apiClint from "./api.service";
import { SET } from "@/lib/cookie";
import { KEY } from "@/lib/key-data";
import LocalStorage from "@/lib/localStorage";
export const loginApp = async (body) => {
  try {
    const result = await apiClint.post(`auth/login`, body);
    console.log(result.data.token);

    SET(KEY.token, result.data.token);
    LocalStorage.add(KEY.user, result.data.data);
  } catch (error) {
    throw new Error("login err");
  }
};
