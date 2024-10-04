import { useDispatch } from "react-redux";
import { RemoveProductFromCart } from "../../utils/slices/cartSlice";

const CartCard = (item) => {
  const dispatch = useDispatch();

  function handleRemoveFromCart(item) {
    console.log(item);

    dispatch(RemoveProductFromCart(item.id));
  }

  return (
    <div
      className="card d-flex flex-md-row justify-content-center justify-content-md-between p-4"
      style={{ width: "100%" }}
    >
      <div className="d-flex flex-sm-row  flex-column">
        <img
          src={item.image}
          width={100}
          className="card-img-left"
          alt="Product"
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">
              <strong>{item.price}</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column gap-4">
        <div className="mb-3 ">
          <p className="fs-4">Quantity : {item.quantity}</p>
        </div>
        <div>
          <button
            onClick={() => handleRemoveFromCart(item)}
            className="btn btn-danger ms-2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
