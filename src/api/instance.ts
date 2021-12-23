import axios from "axios";
import { getCookie } from "../utils";

const token = getCookie("token");

export const instance = axios.create({
  baseURL: "http://5.181.108.97/api/v1/",
  withCredentials: true,
  headers: { Authorization: token ? `Bearer ${token}` : "token" },
});
