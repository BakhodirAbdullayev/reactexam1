import { instance } from "./axios";

export const getData = (url) => {
  return instance.get(url);
};
