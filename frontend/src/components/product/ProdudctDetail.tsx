import Container from "@mui/material/Container";
import {
  Box,
  Divider,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { useQuery } from "@tanstack/react-query";

import Navbar from "../Navbar";
import { Link, useParams } from "react-router-dom";
import FeaturedLots from "./FeaturedLots3";
import Footer from "../Footer/Footer";
import FeaturedLots2 from "./FeaturedLots";
import { ResponseProduct } from "../Utils/apiTypes/apiTypes";
import { productAPI } from "../Utils/endpoins/axios";
import moment from "moment";
import { LoadingImageSkeleton } from "../Utils/LoadingIndicator/LoadingSkeleton";
import { ProductCategoryLoading } from "../Utils/LoadingIndicator/ProductListsLoading";
import { Title } from "../Utils/helmet/Title";
import { ThemeContext } from "../Utils/ThemeContext/ThemeContext";
import { useContext } from "react";

const ProdudctDetail: React.FC = () => {
  const { productId } = useParams();
  const theme = useTheme();
  const is4kScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const Mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { themeMode } = useContext(ThemeContext);
  const light = themeMode === "light";

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["detailProduct", productId],
    queryFn: () => productAPI.getProduct(productId),
    refetchOnWindowFocus: false,
  });

  const product: ResponseProduct = data?.data;

  // console.log("product", product);
  const relatedCategory = product?.category?.name;
  const category = JSON.parse(`{"category":"${relatedCategory}"}`);
  // console.log("caat" , category)

  const { status, data: relatedPrdoucts } = useQuery({
    queryKey: ["relatedProductByCategory", category],
    queryFn: () => productAPI.getProductByCategory(category),
    enabled: !!category,
    refetchOnWindowFocus: false,
  });

  const sameCategoryPrdoucts: Array<ResponseProduct> = relatedPrdoucts?.data;
  // console.log("related", relatedPrdoucts?.data);

  return (
    <>
      <Title title="Product Detail Page" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Navbar />
          <Container maxWidth={is4kScreen ? "xl" : "lg"} sx={{ mt: 2 }}>
            <Box
              sx={{ display: "flex", gap: "2%", mt: 2 }}
              flexDirection={Mobile ? "column" : "row"}
            >
              <Box
                sx={{
                  width: {
                    xs: "150px",
                    sm: "120px",
                    md: "150px",
                  },
                  mb: {
                    xs: 2.2,
                    sm: 0,
                  },
                  mx: {
                    xs: "auto",
                    sm: "0",
                  },
                  color: light ? "black" : "white",
                }}
              >
                <Box
                  sx={{
                    mb: 1,
                    paddingX: {
                      xs: 0,
                    },
                    height: {
                      xs: "150px",
                      sm: "120px",
                      md: "150px",
                    },
                    borderRadius: "10px",
                  }}
                  overflow="hidden"
                >
                  {isLoading ? (
                    <LoadingImageSkeleton />
                  ) : (
                    <img
                      width={"100%"}
                      height={"100%"}
                      style={{objectFit: "cover"}}
                      src={`${product?.image}`}
                      alt="categories image"
                    />
                  )}
                </Box>
                <Typography
                  component={"div"}
                  textAlign="center"
                  fontWeight={"bold"}
                  mb={Mobile ? 2 : 0}
                  sx={{
                    fontSize: {
                      xs: "0.8rem",
                      xl: "0.75rem",
                    },
                  }}
                >
                  {product?.owner}
                </Typography>
              </Box>

              <Box
                sx={{
                  width: {
                    sm: "56%",
                    md: "58%",
                  },
                }}
              >
                <Typography
                  fontWeight="bold"
                  component={"div"}
                  sx={{
                    marginBottom: 4,
                    "&:hover": {
                      color: "primary.light",
                    },
                    fontSize: {
                      xs: 13,
                      sm: 11,
                      md: 12,
                      lg: 14,
                      xl: 16,
                    },
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    color: light ? "black" : "white",
                  }}
                >
                  {product?.title}
                </Typography>

                <Typography
                  component={"h5"}
                  fontWeight={"bold"}
                  sx={{
                    mb: 0.5,
                    fontSize: {
                      xs: 13,
                      sm: 10.5,
                      md: 12,
                    },
                    color: light ? "black" : "white",
                  }}
                >
                  Auction dates
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "1rem",
                      xl: "0.75rem",
                    },
                    color: light ? "black" : "white",
                  }}
                  component={"h6"}
                  marginBottom={"0.1rem"}
                >
                  Starts Date:{" "}
                  {moment(product?.createdAt).format("MMM DD, YYYY")}
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "1rem",
                      xl: "0.75rem",
                    },
                    color: light ? "black" : "white",
                  }}
                  component={"h6"}
                >
                  Ends Date: {moment(product?.updatedAt).format("MMM DD, YYYY")}
                </Typography>
                <Box display={"flex"} sx={{ gap: "30%", mt: 3, mb: 1 }}>
                  <Typography
                    component={"h5"}
                    fontWeight={"bold"}
                    sx={{
                      color: light ? "black" : "white",
                      fontSize: {
                        xs: 13,
                        sm: 10.5,
                        md: 12,
                      },
                    }}
                  >
                    Auction currency
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "1.1rem",
                        xl: "0.75rem",
                      },
                      color: light ? "black" : "white",
                    }}
                    component={"h6"}
                  >
                    {new Intl.NumberFormat("en-Us", {
                      style: "currency",
                      currency: "MMK",
                    })
                      .format(product?.price)
                      .replace(/(\d+)\.(\d+)/, "$1,$2 MMK")}
                  </Typography>
                </Box>
                <Divider />
                <Box display={"flex"} sx={{ gap: "30%", mt: 3, mb: 1 }}>
                  <Typography
                    
                    component={"h5"}
                    fontWeight={"bold"}
                    sx={{ color: light ? "black" : "white" ,
                    fontSize: {
                      xs: 13,
                      sm: 10.5,
                      md: 12,
                    },}}
                  >
                    Buyer's premium
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "1.1rem",
                        xl: "0.75rem",
                      },
                      color: light ? "black" : "white",
                    }}
                    component={"h6"}
                  >
                    25 %
                  </Typography>
                </Box>
                <Divider />
                <Box display={"flex"} sx={{ gap: "24%", mt: 3, mb: 1 }}>
                  <Typography
                    
                    component={"h5"}
                    fontWeight={"bold"}
                    sx={{ color: light ? "black" : "white",
                    fontSize: {
                      xs: 13,
                      sm: 10.5,
                      md: 12,
                    },
                  }}
                  >
                    Accepted for payment
                  </Typography>
                  <Box
                    width={"75px"}
                    height="30px"
                    overflow={"hidden"}
                    display="flex"
                    gap={2}
                  >
                    <img
                      width={"50%"}
                      style={{
                        borderRadius:2
                      }}
                      src="/images/kbz.jpeg"
                      alt="kbz pay logo"
                    />
                    <img
                      width={"50%"}
                      style={{
                        borderRadius:2,
                        overflow:"hidden"
                      }}
                      src="/images/Wave.jpeg"
                      alt="wavemoney logo"
                    />
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  width: {
                    sm: 120,
                    md: 130,
                    lg: 135,
                    xl: 150,
                  },
                  my: Mobile ? 4 : 0,
                }}
              >
                <Link to={`/products/auction/bid/${productId}`}>
                  <Button
                    fullWidth
                    variant="contained"
                    disableElevation
                    sx={{
                      textTransform: "none",
                      py: 1,
                      fontSize: {
                        xs: "0.8rem",
                        sm: "0.7rem",
                        lg: "0.8rem",
                      },
                      bgcolor: light ? "warning.main" : "warning.dark",
                      color: "white",
                      "&:hover": {
                        bgcolor: light ? "warning.dark" : "warning.main",
                      },
                    }}
                  >
                    Register to Bid
                  </Button>
                </Link>
              </Box>
            </Box>
            <Divider />
            {isLoading || status === "loading" ? (
              <ProductCategoryLoading />
            ) : (
              <FeaturedLots2 products={sameCategoryPrdoucts} />
            )}
          </Container>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default ProdudctDetail;
