import axios, { AxiosInstance } from "axios";
import { Header } from "./types";

export const contentTypeJson = (): Header => ({ "Content-Type": "application/json" });

export const api: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.REACT_APP_API_URL}/api/v2`,
  headers: { ...contentTypeJson() },
});
