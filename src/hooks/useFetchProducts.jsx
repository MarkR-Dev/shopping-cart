import { useState, useEffect } from "react";

function useFetchProducts() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url, {});

        if (response.status >= 400) {
          throw new Error("Server Error");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, error, loading };
}

export default useFetchProducts;
