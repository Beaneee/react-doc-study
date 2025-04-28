import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import App from "@/App.tsx";
import TicTacToe from "@/pages/TicTacToe.tsx";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/tic-tac-toe',
        element: <TicTacToe />
      }
    ],
  },
];

const router = createBrowserRouter(routes);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
