import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import DetailNavbar from "../DetailPageComponent/DetailNavbar";
import ProfileSidebar from "./ProfileSidebar";
import { useLocation, useParams } from "react-router-dom";
import {  productAPI } from "../Utils/endpoins/axios";
import { useQueryClient } from "@tanstack/react-query";



const Wrapper = ({ children }: any) => {
  const theme = useTheme();
  const is4kScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const NotMobile = useMediaQuery(theme.breakpoints.up('md'))
  const {userInfo} = useParams();
  const queryClient = useQueryClient();
  const path = userInfo;
  console.log("path",userInfo)

  const location = useLocation();
  console.log("location",location.pathname)
  // const key =  path === "sellProducts" ? "userSellProducts" : path === "winProducts" ? "userWinProducts" : "userLostProducts";
  // const api =  path === "sellProducts" ? productAPI.getProductsByUserId : path === "winProducts" ? productAPI.getUserWinProducts : productAPI.getUserLostProducts;

  // const handleMouseEnterHandler = ()=>{
    
  //   queryClient.prefetchQuery([`${key}`],api)
  // }




  return (
    <>
      <Box  width="100vw" height={"100vh"} overflow="scroll">
        {/*to fix key for detail navbar */}
        <DetailNavbar />
        <Container
          maxWidth={is4kScreen ? "xl" : "lg"}
          disableGutters
        >
          <Box
            sx={{
              mt: 4,
              gap:{
                lg:4,
                md:2.4,
                sm:2
              },
              pl:{
                lg:0,
                md:2,
                sm:0
              }
            }}
            display="flex"

          >
           {NotMobile &&  <ProfileSidebar  />}
            {children}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Wrapper;
