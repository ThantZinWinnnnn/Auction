import React from "react";
import { UserProductsResponse } from "../../Utils/apiTypes/apiTypes";
import { useQuery } from "@tanstack/react-query";
import { productAPI } from "../../Utils/endpoins/axios";
import Products from "../components/prdoducts/components/Products";
import { ProfileUserProductsLoading } from "../../Utils/LoadingIndicator/ProductListsLoading";

const WatchListProductsPage = () => {
  const {
    isFetching,
    isLoading,
    data: userProducts,
  } = useQuery({
    queryKey: ["userWatchList"],
    queryFn: productAPI.getUserWatchListProducts,
    refetchOnWindowFocus: false,
  });

  if (isFetching || isLoading) {
    return <ProfileUserProductsLoading />;
  } else {
    const responseProducts = userProducts?.data;
    // const products = responseProducts as Array<UserProductsResponse>;
    // console.log("watch",products)
    const products: Array<UserProductsResponse> = [];
    responseProducts.forEach((p: any) => products.push(p?.product));
    return <Products products={products} />;
  }
};

export default WatchListProductsPage;
