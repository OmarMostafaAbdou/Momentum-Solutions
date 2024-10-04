import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useSingleProduct from "../../Services/queries";
import { setProduct } from "../slices/productDetailsSlice";

function useProductDetails(id) {
  const { isSuccess, data, isLoading, isError, error } = useSingleProduct(id);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(setProduct(data));
    }
  }, [isSuccess, data]);

  return { data, isSuccess, isLoading, isError, error };
}

export default useProductDetails;
