import Cookies from "js-cookie";

export const GET = (key) => {
  return Cookies.get(key);
};

export const SET = (key, data) => {
  Cookies.set(key, data);
};

export const REMOVE = (key) => {
  Cookies.remove(key);
};
