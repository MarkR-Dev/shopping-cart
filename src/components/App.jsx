import { useState } from "react";
import { Outlet } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/reset.css";
import "../styles/App.css";

function App() {
  const { products, error, loading } = useFetchProducts();
  const [cart, setCart] = useState([]);

  // newProduct object {id, quantity}
  function addToCart(newProduct) {
    const isProductInCart = cart.some(
      (product) => product.id === newProduct.id
    );

    if (isProductInCart) {
      const newCart = cart.map((product) => {
        if (product.id === newProduct.id) {
          return {
            id: product.id,
            quantity: product.quantity + newProduct.quantity,
          };
        }
        return product;
      });
      setCart(newCart);
    } else {
      setCart([...cart, newProduct]);
    }
  }

  return (
    <>
      <div className="app">
        <Header />
        <Outlet context={{ products, error, loading, cart, addToCart }} />
        <Footer />
      </div>
    </>
  );
}

export default App;
