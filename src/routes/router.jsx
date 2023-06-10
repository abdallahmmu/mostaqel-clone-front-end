import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoadingSpinner from "../components/UI_Helpers/LoadingSpinner";

//LAZY
const Home = React.lazy(()=>import('../Pages/Home'))
import App from "../App";

export const router = createBrowserRouter([
    {
    path:'/',
    element:<App/>,
    children:[
        {
            index:true,
            element:<React.Suspense fallback={<LoadingSpinner/>}>
                <Home/>
            </React.Suspense>
        }
    ]
    }
]);
