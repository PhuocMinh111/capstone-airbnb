import { request } from "../axios/axios";
import { AxiosPromise } from "axios";
interface Iuser {
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: boolean;
  address: string;
}
export const FetchSignIn = (data: Iuser): AxiosPromise => {
  return request({
    url: "/api/auth/register",
    method: "get",
    data: data,
  });
};
