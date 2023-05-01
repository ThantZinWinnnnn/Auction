import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import DetailNavbar from "../DetailPageComponent/DetailNavbar";
import ProfileSidebar from "./ProfileSidebar";



const Wrapper = ({ children }: any) => {
  const theme = useTheme();
  const is4kScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const NotMobile = useMediaQuery(theme.breakpoints.up('md'))



  return (
    <>
      <Box  width="100vw" height={"100vh"} overflow="auto">
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
