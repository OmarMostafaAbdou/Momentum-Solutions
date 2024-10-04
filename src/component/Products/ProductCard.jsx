import { FaShoppingCart } from "react-icons/fa";
import "./Card.css";
import { useDispatch } from "react-redux";
import { AddProductToCart } from "../../utils/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = (productItem) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleGoDetails(productid) {
    navigate(`/product/${productid}`);
  }

  function handleAddToCart(e, id) {
    e.stopPropagation();
    dispatch(AddProductToCart(id));
  }

  return (
    <div
      onClick={() => handleGoDetails(productItem.id)}
      className="card text-center shadow-sm pointer-event"
      style={{ width: "100%" }}
    >
      <img
        src={productItem.image}
        className="card-img-top img-fluid image"
        alt={productItem.title}
      />
      <div className="card-body">
        <h5 className="card-title mb-3 title-ellipsis">{productItem.title}</h5>
        <div className="d-flex justify-content-between align-items-center">
          <p className="card-text">
            <span className="text-danger fw-bold">{productItem.price}$</span>
          </p>
          <div className="ms-3">
            <button
              onClick={(e) => handleAddToCart(e, productItem)}
              className="btn btn-dark d-flex align-items-center justify-content-center rounded-circle p-2"
            >
              <FaShoppingCart className="text-white fs-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
