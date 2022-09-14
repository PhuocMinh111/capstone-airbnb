import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Places from "../pages/places";
import SearchInfo from "../pages/searchInfo";
const HomeLayout = lazy(() => import("../layouts/HomeLayout"));
const Home = lazy(() => import("../pages/home"));
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
            path:'/s/:searchId',
            element:<searchInfo/>
        },
        {
            path:'/places',
            element:<Places/>
        }
      ],
    },
  ]);

  return routing;
}
