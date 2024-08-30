import { KEY } from "@/lib/key-data";
import { GET } from "@/lib/cookie";
export const authMiddleware = (to, from, next) => {
  const isAuthenticated = GET(KEY.token);
  console.log(isAuthenticated);

  if (isAuthenticated) {
    next();
  } else {
    next("/login");
  }
};
