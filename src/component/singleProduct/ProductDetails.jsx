import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AddProductToCart } from "../../utils/slices/cartSlice";

function ProductDetails() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.SingleProductReducer);
  console.log(product);

  function handleAddToCart(e, product) {
    e.stopPropagation();
    dispatch(AddProductToCart(product));
  }

  return (
    <div className="row d-flex flex-md-row flex-column-reverse">
      <div className="col-md-6 mb-4">
        <h1 className="display-4">{product.title}</h1>
        <p className="text-success font-weight-bold">{product.category}</p>
        <p className="text-muted">{product.description} </p>
        <div className="py-4 mb-5 border-bottom border-1">
          <span className="font-weight-bold">Price: </span>
          <span className="text-danger">${product.price}</span>
        </div>

        <button
          onClick={(e) => handleAddToCart(e, product)}
          className="btn btn-dark d-flex align-items-center justify-content-center w-75 p-2"
        >
          <span className="mx-4 fs-5">ADD To Cart</span>
          <FaShoppingCart className="text-white fs-5" />
        </button>
      </div>
      <div className="col-md-6 h-20">
        <img
          src={product.image}
          alt={""}
          width={"100%"}
          height={"500px"}
          className=""
        />
      </div>
    </div>
  );
}

export default ProductDetails;
