import React from "react";
import { ResponseProduct } from "../Utils/apiTypes/apiTypes";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { productAPI } from "../Utils/endpoins/axios";
import QueryProducts from "./QueryProducts";
import { SearchProductsSkeleton } from "../Utils/LoadingIndicator/ProductListsLoading";

type Props = {};

const SearchProductPage = (props: Props) => {
  const { product = "" } = useParams();
  console.log("p", product);
  const {
    isLoading,
    data: products,
    isError,
    error,
  } = useQuery(
    ["searchProducts", product],
    () => productAPI.searchProduct(product),
    {
      refetchOnWindowFocus: false,
    }
  );

  if(isLoading){
    return <SearchProductsSkeleton/>;
  }

  const allProducts: Array<ResponseProduct> = products?.data ?? [];
  console.log("allP",allProducts)

  console.log("sear", allProducts);

  return <QueryProducts products={allProducts} />;
};

export default SearchProductPage;
