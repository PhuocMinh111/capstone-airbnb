import { AxiosPromise } from "axios";
import { request } from "../axios/axios";

interface ISignUp {
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: boolean;
  address: string;
}

export function fetchSignUpApi(data: ISignUp): AxiosPromise<any> {
  return request({
    url: "/api/users",
    method: "POST",
    data: {
      type: "CLIENT",
      ...data,
    },
  });
}
