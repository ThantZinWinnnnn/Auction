import { useQuery } from "@tanstack/react-query";
import { productAPI } from "../../Utils/axios";
import Products from "../components/prdoducts/components/Products";
import { Typography } from "@mui/material";

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
    return <Typography>Loading...</Typography>;
  } else {
    const products = userProducts?.data?.products?.sellerProducts;
    console.log("productsUser", products);

    return <Products products={products} />;
  }
};

export default UserSellProductsPage;
