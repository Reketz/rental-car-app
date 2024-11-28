import axios from "axios";
import { API_URL } from "./Api";

export const getVehicles = () => {
  return axios.get(API_URL);
};