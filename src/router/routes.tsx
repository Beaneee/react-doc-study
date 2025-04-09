import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import App from "@/App.tsx";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [],
  },
];

const router = createBrowserRouter(routes);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
