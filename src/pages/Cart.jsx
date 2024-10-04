import { useSelector } from "react-redux";
import CartCard from "../component/Cart/CartCard";
import { Link } from "react-router-dom";

function Cart() {
  const { products } = useSelector((state) => state.CartReducer);

  return (
    <div className="container d-flex flex-column gap-4 py-5 ">
      <p className="fs-1 fw-bold  text-uppercase mb-4">Cart</p>
      {products.map((cart, index) => (
        <div key={index} className="col-12 mb-3">
          <CartCard {...cart} />
        </div>
      ))}

      {products.length === 0 && (
        <div className="d-flex flex-column align-items-center justify-content-center gap-3 my-5 mx-auto">
          <img
            className="w-50 mb-4"
            src="/Images/nocartIcon.png"
            alt="Empty Cart Icon"
          />
          <p className="fs-5 text-muted">
            Your cart is empty. Keep shopping to find a product!
          </p>
          <Link to="/" className="btn btn-dark p-3 rounded-2 shadow-lg  mt-4">
            Go Shopping
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
