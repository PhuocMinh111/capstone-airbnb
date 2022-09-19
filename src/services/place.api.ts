import { request } from "../axios/axios";
import { AxiosPromise } from "axios";
export const FetchPlaceApi = (): AxiosPromise => {
  return request({
    url: "/api/locations",
    method: "get",
  });
};

export const FetchRoomApi = (): AxiosPromise => {
  return request({
    url: "/api/rooms",
    method: "get",
  });
};
export const FetchSingleRoomApi = (id: string): AxiosPromise => {
  return request({
    url: `/api/rooms/${id}`,
    method: "get",
  });
};
