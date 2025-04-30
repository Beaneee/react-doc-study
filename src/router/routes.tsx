import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import App from "@/App.tsx";
import TicTacToe from "@/pages/TicTacToe.tsx";
import RenderUI from "@/pages/render-ui/RenderUI.tsx";
import FirstComponent from "@/pages/render-ui/FirstComponent.tsx";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/tic-tac-toe',
        element: <TicTacToe />
      },
      {
        path: '/render-ui',
        element: <RenderUI />,
        children: [
          {
            path: 'first-component',
            element: <FirstComponent />
          }
        ]
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
