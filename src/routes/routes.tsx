import {
  createBrowserRouter
} from "react-router-dom";
import App from "../App";
import Login from "../pages/User/Login";
import Register from "../pages/User/Register";
import AddProduct from "../pages/product/addProduct";
import ProductList from "../pages/product/ProductList";
import SalesHistory from "../pages/sales/salesHistory";
export const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App />,
  //   children: routesGenerators(userPath)
  // },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "add-product",
        element: <AddProduct />
      },
      {
        path: "product-list",
        element: <ProductList />
      },
      {
        path: "sales-history",
        element: <SalesHistory />
      }

    ]
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