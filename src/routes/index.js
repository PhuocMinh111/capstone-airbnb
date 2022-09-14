import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Places from "../pages/places";

const HomeLayout = lazy(() => import("../layouts/HomeLayout"));
const Home = lazy(() => import("../pages/home"));
const SearchLocation = lazy(()=> import('../pages/searchLocation'))
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
            path:'/s/:locationId',
            element:<SearchLocation/>
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
