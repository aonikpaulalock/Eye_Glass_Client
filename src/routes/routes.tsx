import {
  createBrowserRouter
} from "react-router-dom";
import App from "../App";
import Login from "../pages/User/Login";
import Register from "../pages/User/Register";
import { routesGenerators } from "../utils/routesGenerators";
import { userPath } from "./user.routes";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routesGenerators(userPath)
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
]);