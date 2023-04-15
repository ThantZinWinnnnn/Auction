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
     <Box width={'100%'} display={'flex'}   flexDirection={'column'} justifyContent={"space-between"} sx={{height:{
      xs:"100vh - 202px",
      sm:"100vh"
     }}}>
     <Box>
        <DetailNavbar />

        <Container maxWidth={is4kScreen ? "lg" : "md"} sx={{height:"100%"}}>
          <Box display={"flex"} sx={{ paddingTop: "2%" ,height:"100%"}}>
            <Products products={products} />
          </Box>
        </Container>
      </Box>
     <Box>
     <Footer />
     </Box>
     </Box>
    </>
  );
}
