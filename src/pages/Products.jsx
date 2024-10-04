import Filter from "../component/Products/Filter";
import Hero from "../component/Products/Hero";
import ProductList from "../component/Products/ProductList";

function Products() {
  return (
    <div className="container my-4 bg-main">
      <Hero />
      <Filter />
      <ProductList />
    </div>
  );
}

export default Products;
