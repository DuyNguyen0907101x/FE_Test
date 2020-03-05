import axios from "axios";

export function getUser1() {
  return axios.get("http://www.mocky.io/v2/5e5506e131000033b7eb3587");
}

export const getUser2 = () => {
  return axios.get("http://www.mocky.io/v2/5e5509d4310000b4bbeb359f");
};
