import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Paper,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import DetailNavbar from "../../DetailPageComponent/DetailNavbar";
import Footer from "../../Footer/Footer";

const skeletonRelatedArray = Array(5).fill("");
const categoryProductSkeleton = (
  <Paper
    sx={{
      boxShadow:
        "rgb(0 0 0 / 4%) 0px 5px 22px, rgb(0 0 0 / 3%) 0px 0px 0px 0.5px",
      borderRadius: "16px",
      overflow: "hidden",
    }}
  >
    <Card
      sx={{
        height: {
          sm: "260px",
          md: "290px",
        },
      }}
    >
      <Skeleton
        animation="wave"
        sx={{ width: "100%", height: "70%", paddingTop: "56.25%" }}
        variant="rounded"
      />
      <Divider sx={{ mb: 0.4 }} />
      <CardContent
        sx={{
          px: {
            md: 1,
            lg: 3,
          },
        }}
      >
        <Skeleton
          animation="wave"
          variant="text"
          sx={{
            fontSize: {
              xs: "0.8rem",
              xl: "0.875rem",
              mb: 1,
            },
          }}
        />
        <Skeleton
          animation="wave"
          variant="text"
          sx={{
            fontSize: {
              xs: "0.8rem",
              xl: "0.875rem",
            },
          }}
        />
      </CardContent>
    </Card>
  </Paper>
);

export const ProductCategoryLoading = () => {
  return (
    <>
      <Typography
        fontWeight={"bold"}
        component={"div"}
        sx={{
          fontSize: {
            xs: "1.2rem",
          },
        }}
        my={5}
      >
        Featured Lots
      </Typography>
      <Grid container spacing={4} mb={5}>
        {skeletonRelatedArray.map((item, index) => (
          <Grid item xs={12} sm={4} md={3} xl={2} key={index}>
            {categoryProductSkeleton}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export const ProfileUserProductsLoading = () => {
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const Mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box
        width={Mobile ? "100%" : mediumScreen ? "90%" : "80%"}
        p={Mobile ? 2 : 0}
        mx={"auto"}
      >
        <Typography fontWeight={"bold"} variant="h5" mb={2}>
          Products
        </Typography>

        <Grid container spacing={3}>
          {skeletonRelatedArray.map((item, index) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
              {categoryProductSkeleton}
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

const skeletonProductsArray = Array(10).fill("");

 const ProductsSkeleton = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} width={"100%"} gap={4}>
        {skeletonProductsArray.map((item, index) => (
          <Box
            key={index}
            display={"flex"}
            flexDirection={isDesktop ? "row" : "column"}
            width={"100%"}
            sx={{
              gap: {
                sm: "3%",
                md: "2.4%",
              },
              mb: 3,
            }}
            px={isDesktop ? 0 : 2}
          >
            <Box
              width={"150px"}
              mx={isDesktop ? "" : "auto"}
              mb={isDesktop ? 0 : 2}
            >
              <Box
                mb={isDesktop ? 1.5 : 1}
                sx={{ paddingX: 0 }}
                overflow="hidden"
                width={"100%"}
                height={"150px"}
              >
                <Skeleton
                  animation="wave"
                  sx={{ width: "100%", height: "150px" }}
                  variant="rounded"
                />
              </Box>
              <Skeleton
                animation="wave"
                variant="text"
                sx={{
                  fontSize: isDesktop ? 10 : 16,
                }}
              />
            </Box>
            <Box width={isDesktop ? "52%" : "100%"}>
              <Skeleton
                animation="wave"
                variant="text"
                sx={{
                  fontSize: {
                    xs: 14,
                    sm: 12,
                    md: 16,
                    xl: 18,
                  },
                  mb: isDesktop ? 1 : 2,
                }}
              />
              <Skeleton
                animation="wave"
                variant="text"
                sx={{
                  fontSize: {
                    xs: 13,
                    sm: 10.5,
                    md: 14,
                  },
                  mb: isDesktop ? 1.5 : 0.8,
                }}
              />
              <Skeleton
                animation="wave"
                variant="text"
                sx={{
                  fontSize: isDesktop ? "0.75rem" : "0.875rem",
                }}
              />
              <Skeleton
                animation="wave"
                variant="text"
                sx={{
                  fontSize: isDesktop ? "0.75rem" : "0.875rem",
                }}
              />
            </Box>
            <Box width={isDesktop ? "20%" : "100%"} mt={isDesktop ? 0 : 3}>
              <Skeleton
                variant="rectangular"
                animation="wave"
                sx={{
                  width: "100%",
                  py: {
                    xs: 0.4,
                    md: 0.4,
                    lg: 0.6,
                  },
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export const HomePageProductsSkeleton = ()=> {
    return <ProductsSkeleton/>
};

export const SearchProductsSkeleton = ()=> {
    const theme = useTheme();
    const is4kScreen = useMediaQuery(theme.breakpoints.up("xl"));
    return (
        <>
            <DetailNavbar/>
                <Container maxWidth={is4kScreen ? "lg" : "md"}>
                    <Box display={"flex"} sx={{ paddingTop: "2%" }}>
                        <ProductsSkeleton/>
                    </Box>
                </Container>
            <Footer/>
        </>
    )
}
