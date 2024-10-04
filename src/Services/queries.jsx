import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useSingleProduct(id) {
  return useQuery({
    queryKey: ["product-details", id],
    queryFn: () =>
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.data),
  });
}
export default useSingleProduct;
