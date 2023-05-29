import axios from "axios";

export const api = axios.create({
  baseUrl: "http://localhost:3000",
  timeout: 10000
});
