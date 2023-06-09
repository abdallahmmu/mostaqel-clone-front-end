import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import App from "../App";

export const router = createBrowserRouter([
    {
    path:'/',
    element:<App/>,
    children:[
        {
            index:true,
            element:<Home/>
        }
    ]
    }
]);
