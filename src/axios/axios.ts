import axios from "axios";
import { BASE_URL, TOKEN } from "../constants/common";

const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    tokenByClass: TOKEN,
  },
});

export default request;
