import { useParams } from "react-router-dom";
import Error from "../Common/Error";
import Loading from "../Common/Loading";
import ProductDetails from "../component/singleProduct/ProductDetails";
import useProductDetails from "../utils/Hooks/useProductdetails";

function SingleProduct() {
  const { id } = useParams();

  const { isLoading, isError } = useProductDetails(id);
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (isError) {
    return <Error />;
  }
  return (
    <div className="container my-5 bg-main">
      <ProductDetails />
    </div>
  );
}

export default SingleProduct;
