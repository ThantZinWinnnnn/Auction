import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { productAPI } from "../Utils/endpoins/axios";
import { ResponseProduct } from "../Utils/apiTypes/apiTypes";
import QueryProducts from "./QueryProducts";
import { SearchProductsSkeleton } from "../Utils/LoadingIndicator/ProductListsLoading";


type Props = {};

export default function SearchCategoryPage({}: Props) {
  const { category } = useParams();
  console.log("p", category);

  const jsonCategory = JSON.parse(`{"category":"${category}"}`);

  const {
    isLoading,
    data: products,
    isError,
    error,
  } = useQuery(
    ["queryByCategory", jsonCategory],
    () => productAPI.getProductByCategory(jsonCategory),
    {
      refetchOnWindowFocus: false,
    }
  );

  if(isLoading){
    return <SearchProductsSkeleton/>
  }

  const allProducts: Array<ResponseProduct> = products?.data ?? [];
  console.log("allPP",allProducts)

  return <QueryProducts products={allProducts} />;
}
