import { useTransition } from "react";
import { useNavigate } from "react-router-dom";

export default function useTransitionNavigate() {
  const [ispending, startTransition] = useTransition();
  const navigate = useNavigate();
  const navigateTransiton = (path: string) => {
    startTransition(() => {
      navigate(path);
    });
  };
  return navigateTransiton;
}
