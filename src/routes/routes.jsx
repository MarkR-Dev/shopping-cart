import App from "../components/App.jsx";
import ErrorPage from "../components/ErrorPage.jsx";
import Home from "../components/Home.jsx";
import Products from "../components/Products.jsx";
import ViewProduct from "../components/ViewProduct.jsx";
import Cart from "../components/Cart.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
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
    ],
  },
];

export default routes;
