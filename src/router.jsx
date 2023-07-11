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
const ContactUsPage = React.lazy(() => import("../Pages/ContactUs"));
//Portfolio Page
const PortfolioPage = React.lazy(() => import("../Pages/Portfolio"));
// const PortfolioDetailsPage = React.lazy(() => import("../components/PortfolioDetails/PortfolioDetails"));
// const PersonalProfilePage = React.lazy(() => import("../components/PersonalProfile/PersonalProfile"));




//Project Details Page
const ProjectDetails = React.lazy(() =>
  import("../components/ProjectDetails/ProjectDetails.jsx")
);
const ChatsPage = React.lazy(() => import("../components/Chats/ChatsPage.jsx"));
const ChatDetails = React.lazy(() =>
  import("../components/ChatDetails/ChatDetails.jsx")
);
//LOADERS
import { httpRegisterFreelancerLoader } from "../ReactRouterHelpers/httpRegisterFreelancerLoader";
import { getUserByIdLoader } from "../components/ProfileComponents/EditProfile/getUserByIdLoader";
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
        path: "about",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <AboutPage />
          </React.Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <ContactUsPage />
          </React.Suspense>
        ),
      },
      {
        path: "/portfolio",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <PortfolioPage />
          </React.Suspense>
        ),
      },

      // {
      //   path: "/portfolioDetails",
      //   element: (
      //     <React.Suspense fallback={<LoadingSpinner />}>
      //       <PortfolioDetailsPage />
      //     </React.Suspense>
      //   ),
      // },

      // {
      //   path: "/personalProfile",
      //   element: (
      //     <React.Suspense fallback={<LoadingSpinner />}>
      //       <PersonalProfilePage />
      //     </React.Suspense>
      //   ),
      // },

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
        loader: httpRegisterFreelancerLoader,
      },
      {
        path: "profile/statistics/:userId",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <ProfileStatistics />
          </React.Suspense>
        ),
        loader:getUserByIdLoader
      },
      {
        path: "profile/edit/:userId",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <EditPage />
          </React.Suspense>
        ),
        loader: getUserByIdLoader,
      },
      {
        path: "projects/:projectId",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <ProjectDetails />
          </React.Suspense>
        ),
      },
      {
        path: "chats",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <ChatsPage />
          </React.Suspense>
        ),
      },
      {
        path: "chats/:chatId",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <ChatDetails />
          </React.Suspense>
        ),
      },
    ],
  },
]);
