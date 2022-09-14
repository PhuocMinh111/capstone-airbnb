import {request}from "../axios/axios"
import {AxiosPromise} from 'axios'
export const FetchPlaceApi = ():AxiosPromise => {
    return request({
        url:"/api/locations",
        method:"get"
    })
}