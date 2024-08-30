import axios from "axios";
import { GET } from "@/lib/cookie";
import { KEY } from "@/lib/key-data";

const token = GET(KEY.token);
const apiClint = axios.create({
  baseURL: "http://localhost:2002/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default apiClint;
