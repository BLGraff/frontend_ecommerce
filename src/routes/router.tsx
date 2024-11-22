import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoadingScreen from "../components/loading";
import NotFound from "../components/not-found";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    lazy: () => import("../layouts/main/index"),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        lazy: () => import("../features/home/pages/Landing"),
      },
      {
        path: "/pelicula",
        lazy: () => import("../features/movie/pages/AddPelicula"),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} fallbackElement={<LoadingScreen />} />;
}
