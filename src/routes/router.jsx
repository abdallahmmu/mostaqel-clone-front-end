import React from "react";
import { Link, createBrowserRouter } from "react-router-dom";
import LoadingSpinner from "../components/UI_Helpers/LoadingSpinner";
import App from "../App";
//Portfolio Page
const PortfolioPage = React.lazy(() => import("../Pages/Portfolio"));
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

const AllProject = React.lazy(() => import("../Pages/ProjectsList"));
const AddProject = React.lazy(() => import("../Pages/addProject"));
//Project Details Page
const ProjectDetails = React.lazy(() =>
  import("../components/ProjectDetails/ProjectDetails.jsx")
);
const FreelancerOffers = React.lazy(() =>
  import("../components/FreelancerOffers/FreelancerOffers.jsx")
);

const ChatsPage = React.lazy(() => import("../components/Chats/ChatsPage.jsx"));
const ChatDetails = React.lazy(() =>
  import("../components/ChatDetails/ChatDetails.jsx")
);

const PaymentPage = React.lazy(() => import("../Pages/Payment"));
const ThankYou = React.lazy(() => import("../Pages/ThankYou"));
//LOADERS
import { httpRegisterFreelancerLoader } from "../ReactRouterHelpers/httpRegisterFreelancerLoader";
import { getUserByIdLoader } from "../components/ProfileComponents/EditProfile/getUserByIdLoader";
import { addProjectLoader } from "../ReactRouterHelpers/addProjectLoader";
import { getUserStatisticsById } from "../components/ProfileComponents/ProfileStatistics/getProfileStatistics";
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
        loader: getUserStatisticsById,
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
        path: "projects",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <AllProject />
          </React.Suspense>
        )
      },
      {
        path: "add-projects",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <AddProject />
          </React.Suspense>
        ),
        loader: addProjectLoader,
      },
      {
        path: "projects/:projectId",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <ProjectDetails />
          </React.Suspense>
        )
      },
      {
        path: "myoffers",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <FreelancerOffers />
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
      {
        path: "/portfolio",
        element: (
          <React.Suspense fallback={<LoadingSpinner />}>
            <PortfolioPage />
          </React.Suspense>
        ),
      },
      {
        path: "/payment/:userId",
        element: (
          <React.Suspense>
            <PaymentPage />
          </React.Suspense>
        ),
        loader: getUserByIdLoader
      },
      {
        path: "/payment/thankYou",
        element: (
          <React.Suspense>
            <ThankYou />
          </React.Suspense>
        ),
      },
    ],
  },
]);
