import { Box, Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import Product from "../components/product/Product";
import SidebarLists from "../components/SidebarLists";
import MobileLists from "../components/SideLists/MobileLists";
import { productAPI } from "../components/Utils/endpoins/axios";
import { ResponseProduct } from "../components/Utils/apiTypes/apiTypes";
import Products from "../components/product/Products";

//React-Query
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { HomePageProductsSkeleton } from "../components/Utils/LoadingIndicator/ProductListsLoading";
import { Title } from "../components/Utils/helmet/Title";



const HomePage = () => {
  const theme = useTheme();
  const is4kScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const mediumScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const [category, setCategory] = useState<Array<string>>([]);

  const productCategory = category;
  // console.log("cat",productCategory)
  const jsonCategory = JSON.parse(`{"category":"${productCategory}"}`);
  // console.log("jsonC",jsonCategory)

  // console.log(category.length);
  const checkHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = category.indexOf(event.target.value);
    if (index === -1) {
      setCategory([event.target.value]);
    } else {
      setCategory(
        category.filter((category) => category !== event.target.value)
      );
    }
  };

  const {
    isLoading,
    data: products,
    isError,
    error,
  } = category.length === 0
    ? useQuery({
        queryKey: ["allProducts"],
        queryFn: productAPI.getAllProduct,
        refetchOnWindowFocus: false,
      })
    : useQuery({
        queryKey: ["relatedProductByCategory", jsonCategory],
        queryFn: () => productAPI.getProductByCategory(jsonCategory),
        refetchOnWindowFocus: false,
      });

  // console.log("products", products?.data);
  const allProducts: Array<ResponseProduct> = products?.data ?? [];

  return (
    <>
      <Title title="Home Page | Auction"/>
      <Navbar />

      <Container maxWidth={is4kScreen ? "xl" : mediumScreen ? "lg" : "md"}>
        <Box
          display={"flex"}
          flexDirection={isDesktop ? "row" : "column"}
          sx={{ gap: "2%", paddingTop: "2%" }}
        >
          {isDesktop ? <SidebarLists margin={0} func={checkHandler} checkValue={category}/> : <MobileLists />}
          {isLoading ? <HomePageProductsSkeleton/>: <Products products={allProducts} loading={isLoading} />}
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
