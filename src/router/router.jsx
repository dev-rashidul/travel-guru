import { createBrowserRouter } from "react-router-dom";
import AllUsers from "../components/Dashboard/AllUsers/AllUsers";
import MyBookings from "../components/Dashboard/MyBookings/MyBookings";
import UserWelcome from "../components/Dashboard/Welcome/Welcome";
import Error from "../components/pages/Error/Error";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/SignUp/Login/Login";
import Register from "../components/pages/SignUp/Register/Register";
import DashboardLyout from "../layout/DashboardLayout/DashboardLyout";
import Main from "../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

// Get Role for Dashboard

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ],
  },
  {
    path: "*",
    element: <Error></Error>
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLyout></DashboardLyout></PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <PrivateRoute><UserWelcome></UserWelcome></PrivateRoute>
      },
      {
        path: '/dashboard/all-users',
        element: <PrivateRoute><AllUsers></AllUsers></PrivateRoute>
      },
      {
        path: '/dashboard/my-bookings',
        element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
      }
    ]
  }
]);
export default routes;
