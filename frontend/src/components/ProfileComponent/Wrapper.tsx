import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import React, { ReactNode } from "react";
import DetailNavbar from "../DetailPageComponent/DetailNavbar";
import ProfileSidebar from "./ProfileSidebar";

const Wrapper = ({ children }: any) => {
  const theme = useTheme();

  const is4kScreen = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <>
      <Box bgcolor={"#FAFAFA"} width="100vw" height={"100vh"} overflow="scroll">
        {/*to fix key for detail navbar */}
        <DetailNavbar />
        <Container
          maxWidth={is4kScreen ? "lg" : "lg"}
          sx={{ bgcolor: "#FAFAFA" }}
          disableGutters
        >
          <Box
            sx={{
              mt: 4,
            }}
            display="flex"
            gap={8}
          >
            <ProfileSidebar />
            {children}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Wrapper;
