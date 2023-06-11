import React from "react";
import { Link, createBrowserRouter } from "react-router-dom";
import LoadingSpinner from "../components/UI_Helpers/LoadingSpinner";
import App from "../App";

//LAZY
const HomePage = React.lazy(() => import("../Pages/Home"));
const LoginPage = React.lazy(() => import("../Pages/Login"));
const RegisterPage = React.lazy(() => import("../Pages/Register"));
const ProfilePage = React.lazy(()=>import('../Pages/Profile'))

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<div>Can not found this route <Link to="/">Go Home</Link></div>,
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
            <LoginPage />
          </React.Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <RegisterPage />
          </React.Suspense>
        ),
      },
      {
        path:'profile/statistics/:profileId',
        element:<React.Suspense fallback={<LoadingSpinner/>}>
          <ProfilePage/>
        </React.Suspense>
      }
    ],
  },
]);
