import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import Loading from "../../Common/Loading";
import Error from "../../Common/Error";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { category, sort } = useSelector((state) => state.FilterReducer);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let response;
        if (category) {
          response = await fetch(
            `https://fakestoreapi.com/products/category/${category}`
          );
        } else {
          response = await fetch("https://fakestoreapi.com/products");
        }

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        let sortedProducts = [...data];

        if (sort === "Low to High") {
          sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sort === "High to Low") {
          sortedProducts.sort((a, b) => b.price - a.price);
        }

        setProducts(sortedProducts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, sort]);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Error />
      </div>
    );
  }

  return (
    <div className="row g-4 my-4 justify-content-center justify-content-sm-start">
      {products.map((item) => (
        <div key={item.id} className="col-12 col-sm-6 col-lg-4">
          <ProductCard {...item} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
