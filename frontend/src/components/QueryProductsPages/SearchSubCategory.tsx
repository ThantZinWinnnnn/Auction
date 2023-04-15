import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { productAPI } from "../Utils/endpoins/axios";
import { SearchProductsSkeleton } from "../Utils/LoadingIndicator/ProductListsLoading";
import { ResponseProduct } from "../Utils/apiTypes/apiTypes";
import QueryProducts from "./QueryProducts";

export const SearchSubCategory = () => {
  const { subCategory } = useParams();
  console.log("p", subCategory);

  const jsonSubCategory = JSON.parse(`{"subCategory":"${subCategory}"}`);

  const {
    isLoading,
    data: products,
    isError,
    error,
  } = useQuery(["queryBySubCategory", jsonSubCategory], () =>
    productAPI.getProductBySubCategory(jsonSubCategory),{
        refetchOnWindowFocus:false
    }
  );

  if(isLoading){
    return <SearchProductsSkeleton/>
  }

  const allProducts: Array<ResponseProduct> = products?.data ?? [];
  console.log("allPPs",allProducts)


  return <QueryProducts products={allProducts} />;
};
