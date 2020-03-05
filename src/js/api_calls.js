import axios from "axios";

export const getEmployees = () => {
  return axios.get("http://www.mocky.io/v2/5e57c3773000004c00fd3d30");
};
