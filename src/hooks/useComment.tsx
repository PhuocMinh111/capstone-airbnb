import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FetchRoomReview } from "../services/room.api";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const UseComment = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const navigate = useNavigate();

  const fetchComment = async (roomId: string | undefined, content: string) => {
    const result = await FetchRoomReview(roomId, content);
    const data = await result;
    navigate("/");
  };
  return (roomId: string | undefined, content: string) => {
    if (user.length < 1) return navigate("/login");
    fetchComment(roomId, content);
  };
};

export default UseComment;
