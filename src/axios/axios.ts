import axios, { AxiosPromise } from "axios";
import { BASE_URL, google_token, TOKEN } from "../constants/common";

export const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    tokenByClass: TOKEN,
  },
});

export const fetchMap = (address: string | undefined) => {
  return axios({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${google_token}`,
    method: "GET",
  });
};
