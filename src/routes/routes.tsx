import {
  createBrowserRouter
} from "react-router-dom";
import App from "../App";
import Login from "../pages/User/Login";
import Register from "../pages/User/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />
  }
]);