import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoadingSpinner from "../components/UI_Helpers/LoadingSpinner";

//LAZY
const HomePage = React.lazy(() => import("../Pages/Home"));
const AuthPage = React.lazy(() => import("../Pages/Auth"));
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <HomePage />
          </React.Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <AuthPage />
          </React.Suspense>
        ),
      },
    ],
  },
]);
