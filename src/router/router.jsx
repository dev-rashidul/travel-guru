import { createBrowserRouter } from "react-router-dom";
import AllUsers from "../components/Dashboard/AllUsers/AllUsers";
import MyBookings from "../components/Dashboard/MyBookings/MyBookings";
import UserWelcome from "../components/Dashboard/Welcome/Welcome";
import DiscountDetails from "../components/pages/DiscountsDetails/DiscountDetails";
import Error from "../components/pages/Error/Error";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/SignUp/Login/Login";
import Register from "../components/pages/SignUp/Register/Register";
import Tours from "../components/pages/Tours/Tours";
import ToursDetails from "../components/pages/ToursDetails/ToursDetails";
import DashboardLyout from "../layout/DashboardLayout/DashboardLyout";
import Main from "../layout/Main";
import AdminRoute from "../PrivateRoute/AdminRoute/AdminRoute";
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
        path: "/tours",
        element: <Tours></Tours>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/tour/:id",
        loader: ({ params }) =>
          fetch(`https://travel-server-steel.vercel.app/vacation/${params.id}`),
        element: (
          <PrivateRoute>
            <ToursDetails></ToursDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/discount/:id",
        loader: ({ params }) =>
          fetch(`https://travel-server-steel.vercel.app/discount/${params.id}`),
        element: <DiscountDetails></DiscountDetails>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLyout></DashboardLyout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <UserWelcome></UserWelcome>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllUsers></AllUsers>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default routes;
