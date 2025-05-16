import { useState, useEffect } from "react";
import * as storage from "../utils/localStorage";

// todo:
// add in abort controller?

function useFetchProducts() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url, { mode: "cors" });

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
      console.log("using local data");
      setProducts(cachedData);
    } else {
      console.log("fetching new dataa");
      fetchProducts();
    }
  }, []);

  return { products, error, loading };
}

export default useFetchProducts;
