import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import Products from "../product/Products";
import Footer from "../Footer/Footer";
import DetailNavbar from "../DetailPageComponent/DetailNavbar";
import { ResponseProduct } from "../Utils/apiTypes/apiTypes";

type Props = {
  products: Array<ResponseProduct>;
};

export default function QueryProducts({ products }: Props) {
  const theme = useTheme();
  const is4kScreen = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <>
      <DetailNavbar />

      <Container maxWidth={is4kScreen ? "lg" : "md"}>
        <Box display={"flex"} sx={{ paddingTop: "2%" }}>
          <Products products={products} />
        </Box>
      </Container>
      <Footer />
    </>
  );
}
