import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ErrorPage from "../Components/404/ErrorPage";
import Contact from "../Components/Contact/Contact";
import UpdateProfile from "../Components/UpdateProfile/UpdateProfile";
import UserProfile from "../Components/UserProfile/UserProfile";
import PrivatePortes from "../Components/PrivatePortes/PrivatePortes";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: "/login",
            element:<Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/contact",
            element:<Contact></Contact>
        },
        {
            path:"/updateprofile",
            element: <PrivatePortes><UpdateProfile></UpdateProfile></PrivatePortes>
        },
        {
            path:"/userprofile",
            element: <PrivatePortes><UserProfile></UserProfile></PrivatePortes>
        },
      ]
    },
  ]);

  export default router;