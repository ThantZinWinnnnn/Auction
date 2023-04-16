import { useQuery } from "@tanstack/react-query";
import { productAPI } from "../../Utils/endpoins/axios";
import Products from "../components/prdoducts/components/Products";
import { ProfileUserProductsLoading } from "../../Utils/LoadingIndicator/ProductListsLoading";






const UserSellProductsPage:React.FC= () => {


  const {
    isFetching,
    isLoading,
    data: userProducts,
    isError,
    error,
  } = useQuery({
    queryKey: ["userSellProducts"],
    queryFn: productAPI.getProductsByUserId,
    refetchOnWindowFocus: false,
  });

  if (isFetching || isLoading) {
    return <ProfileUserProductsLoading/>;
  } else {
    const products = userProducts?.data?.products?.sellerProducts;
    // console.log("productsUser", products);

    return <Products products={products} />;
  }
};

export default UserSellProductsPage;
