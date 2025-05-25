import { useState, useEffect } from "react";
import * as storage from "../utils/localStorage";

function useFetchProducts() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchProducts = async () => {
      try {
        const response = await fetch(url, { mode: "cors", signal });

        if (response.status >= 400) {
          throw new Error("Server Error");
        }

        const data = await response.json();
        setProducts(data);
        storage.setLocalStorage(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    const cachedData = storage.getLocalStorage();

    if (cachedData !== null) {
      setProducts(cachedData);
      setLoading(false);
    } else {
      fetchProducts();
    }

    return () => {
      controller.abort();
    };
  }, []);

  return { products, error, loading };
}

export default useFetchProducts;
