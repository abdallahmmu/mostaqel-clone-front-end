import React from "react";
import { Link, createBrowserRouter } from "react-router-dom";
import LoadingSpinner from "../components/UI_Helpers/LoadingSpinner";
import App from "../App";

//LAZY
const HomePage = React.lazy(() => import("../Pages/Home"));
const LoginPage = React.lazy(() => import("../Pages/Login"));
const RegisterPage = React.lazy(() => import("../Pages/Register"));
const ProfileStatistics = React.lazy(() =>
  import("../Pages/ProfileStatistics")
);
const EditPage = React.lazy(() => import("../Pages/EditProfile"));
const AboutPage = React.lazy(() => import("../Pages/About"));
const ContactUsPage = React.lazy(()=>import('../Pages/ContactUs'))
//LOADERS
import { httpRegisterFreelancerLoader } from "../ReactRouterHelpers/httpRegisterFreelancerLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <div>
        Can not found this route <Link to="/">Go Home</Link>
      </div>
    ),
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
        path: "about",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <AboutPage />
          </React.Suspense>
        ),
      },
      {
        path:'contact',
        element:<React.Suspense fallback={<LoadingSpinner/>}>
          <ContactUsPage/>
        </React.Suspense>
      },
      {
        path: "register",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <RegisterPage />
          </React.Suspense>
        ),
        loader:httpRegisterFreelancerLoader
      },
      {
        path: "profile/statistics/:userId",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <ProfileStatistics />
          </React.Suspense>
        ),
      },
      {
        path: "profile/edit/:userId",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <EditPage />
          </React.Suspense>
        ),
      },
    ],
  },
]);

console.log("Loading");
