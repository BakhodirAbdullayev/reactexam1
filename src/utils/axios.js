import axios from "axios";

export const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 10000,
  // headers: { "X-Custom-Header": "foobar" },
});
