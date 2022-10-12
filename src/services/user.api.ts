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
export const FetchSignUp = (data: Iuser): AxiosPromise => {
  console.log(data);

  return request({
    url: "/api/auth/register",
    method: "POST",
    data: data,
  });
};

export const fetchLogin = (data: { email: string; password: string }) => {
  console.log(data);

  return request({
    url: "/api/auth/login",
    method: "post",
    data: data,
  });
};
