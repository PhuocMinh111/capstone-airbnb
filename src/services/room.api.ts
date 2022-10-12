import { AxiosResponse } from "axios";
import { request } from "../axios/axios";

export function FetchRoomReview(roomId: string | undefined, content: string) {
  return request({
    url: `/api/reviews?roomId=${roomId}`,
    method: "put",
    data: { content: content },
  });
}
