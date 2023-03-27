import { Navigate, createBrowserRouter } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { Home } from "./Pages/Home/Home";
import { FormSignIn } from "./Pages/Login/components/FormSignIn";
import { FormSignUp } from "./Pages/Login/components/FormSignUp";

export const router = createBrowserRouter([
    {
        path: '*',
        element: <Login/>,
    },
    {
        path: '/app',
        element: <Home/>
    }
])