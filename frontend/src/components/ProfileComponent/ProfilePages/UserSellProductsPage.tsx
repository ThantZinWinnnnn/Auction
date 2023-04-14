import { useQuery } from "@tanstack/react-query";
import { productAPI } from "../../Utils/endpoins/axios";
import Products from "../components/prdoducts/components/Products";
import { Backdrop, CircularProgress, Typography } from "@mui/material";
import ProductLoading from "../../Utils/LoadingIndicator/ProductLoading";
import { ProfileUserProductsLoading } from "../../Utils/LoadingIndicator/ProductListsLoading";


//to add updat price button

const UserSellProductsPage = () => {


  const {
    isFetching,
    isLoading,
    data: userProducts,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: productAPI.getProductsByUserId,
    refetchOnWindowFocus: false,
  });

  if (isLoading || isFetching) {
    return <ProfileUserProductsLoading/>;
  } else {
    const products = userProducts?.data?.products?.sellerProducts;
    console.log("productsUser", products);

    return <Products products={products} />;
  }
};

export default UserSellProductsPage;
