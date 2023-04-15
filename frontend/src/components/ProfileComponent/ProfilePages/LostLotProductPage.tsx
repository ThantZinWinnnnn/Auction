import React from "react";
import { UserProductsResponse } from "../../Utils/apiTypes/apiTypes";
import { useQuery } from "@tanstack/react-query";
import { productAPI } from "../../Utils/endpoins/axios";
import Products from "../components/prdoducts/components/Products";
import { ProfileUserProductsLoading } from "../../Utils/LoadingIndicator/ProductListsLoading";


export default function LostLotProductPage() {

  const {
    isFetching,
    isLoading,
    data: userProducts,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: productAPI.getUserLostProducts,
    refetchOnWindowFocus: false,
  });



  //   const products = userProducts?.data;
  //   console.log("productsUser", products);

  if (isFetching || isLoading) {
    return <ProfileUserProductsLoading/>;
  } else {
    const responseProducts = userProducts?.data;
    const products: Array<UserProductsResponse> = [];
    responseProducts.forEach((p: any) => products.push(p?.product));
    console.log("finalP", products);
   

    return <Products products={products} />

  }
}
