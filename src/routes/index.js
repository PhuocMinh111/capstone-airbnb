import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import LoginLayout from "../layouts/loginLayout";
import Places from "../pages/places";
import SearchInfo from "../pages/searchInfo";
const PlaceDetail = lazy(() => import("../pages/placeDetail"));
const HomeLayout = lazy(() => import("../layouts/HomeLayout"));
const Home = lazy(() => import("../pages/home"));
const RoomDetail = lazy(() => import("../pages/roomDetail"));
export default function Routes() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/s/",
          element: <Places search={true} />,
        },
        {
          path: "/places",
          element: <Places search={false} />,
        },
        {
          path: "/placedetail/:placeId",
          element: <PlaceDetail />,
        },
        {
          path: "/roomDetail/:roomId",
          element: <RoomDetail />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginLayout />,
    },
  ]);

  return routing;
}
