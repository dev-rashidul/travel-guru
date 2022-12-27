import { createBrowserRouter } from "react-router-dom";
import Error from "../components/pages/Error/Error";
import Home from "../components/pages/Home/Home";
import Main from "../layout/Main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>
  }
]);
export default routes;
