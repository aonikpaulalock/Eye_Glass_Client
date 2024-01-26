import ProductList from "../pages/product/ProductList";
import AddProduct from "../pages/product/addProduct";
import SalesHistory from "../pages/sales/salesHistory";

export const userPath = [
  {
    name: "Add Product",
    path: "add-product",
    element: <AddProduct />
  },
  {
    name: "Product list",
    path: "product-list",
    element: <ProductList />
  },
  {
    name: "Sales history",
    path: "sales-history",
    element: <SalesHistory />
  }

]