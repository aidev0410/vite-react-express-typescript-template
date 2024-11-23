import axios from "axios";
import { ENV } from "./constants";

const axiosClient = axios.create({
  baseURL: ENV.API_URL,
});

export default axiosClient;
