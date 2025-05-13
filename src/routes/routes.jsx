import Home from "../components/Home.jsx";
import ErrorPage from "../components/ErrorPage.jsx";
import Products from "../components/Products.jsx";
import ViewProduct from "../components/ViewProduct.jsx";
import Cart from "../components/Cart.jsx";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "products/:id",
    element: <ViewProduct />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
];

export default routes;
