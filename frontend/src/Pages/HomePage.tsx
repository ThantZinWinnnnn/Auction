import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import Product from "../components/product/Product";
import SidebarLists from "../components/SidebarLists";
import MobileLists from "../components/SideLists/MobileLists";
import { productAPI } from "../components/Utils/axios";
import { ResponseProduct } from "../components/Utils/apiTypes/apiTypes";
import Products from "../components/product/Products";

//React-Query
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
  const theme = useTheme();
  const is4kScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const mediumScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const {
    isLoading,
    data: products,
    isError,
    error,
  } = useQuery({
    queryKey: ["allProducts"],
    queryFn: productAPI.getAllProduct,
    refetchOnWindowFocus: false,
  });

  console.log("products", products?.data?.allPosts);
  const allProducts: Array<ResponseProduct> = products?.data?.allPosts;

  return (
    <>
      <Navbar />

      <Container maxWidth={is4kScreen ? "xl" : mediumScreen ? "lg" : "md"}>
        <Box
          display={"flex"}
          flexDirection={isDesktop ? "row" : "column"}
          sx={{ gap: "2%", paddingTop: "2%" }}
        >
          {isDesktop ? <SidebarLists margin={0} /> : <MobileLists />}
          <Products products={allProducts} />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
