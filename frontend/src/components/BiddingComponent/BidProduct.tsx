import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  InputAdornment,
  OutlinedInput,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
  Skeleton
} from "@mui/material";
import { LoadingButton } from '@mui/lab';
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BidButton from "./Components/BidButton";
import BidDetailTypo from "./Components/BidDetailTypo";
import { useParams } from "react-router-dom";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { productAPI } from "../Utils/endpoins/axios";
import { ThemeContext } from "../Utils/ThemeContext/ThemeContext";

import {
  ResponseProduct,
  BidProductByUser,
  UpdateProduct,
} from "../Utils/apiTypes/apiTypes";
import moment from "moment";
import { AxiosResponse } from "axios";
import ButtonLoading from "../Utils/LoadingIndicator/ButtonLoading";

// interface BidProductVariable{
//   productId:string ,
//   bidPrice: string
// }

const BidProduct = () => {

  const queryClient = useQueryClient();
  const { productId } = useParams();
  const [bidPrice, setBidPrice] = useState("");
  const theme = useTheme();
  const bidControl = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const { themeMode } = useContext(ThemeContext);
  const light = themeMode === "light";

  const idforProduct = productId ?? "";

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["bidProduct", productId],
    queryFn: () => productAPI.getProduct(productId),
    refetchOnWindowFocus: false,
  });

  const product: ResponseProduct = data?.data;

  console.log("product", product);

  const owner = product?.currentOwnerName;

  const {
    isLoading: bidding,
    mutate: bidProduct,
    isError: biddingError,
    error: bidError,
  } = useMutation(owner ? productAPI.bidProduct : productAPI.firstBidProduct, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(["bidProduct"]);
      console.log("bid", data?.data);
    },
    onError: (error) => {
      console.log("error", error);
    },
  });

  const bidProductHandler = () => {
    const priceNumber = Number(bidPrice);
    const data: BidProductByUser = {
      productId: idforProduct,
      price: priceNumber,
    };
    bidProduct(data);
  };

  return (
    <>
      {/*to add shadow */}
      <Box
        width={isLargeScreen ? "60%" : "100%"}
        marginX="auto"
        sx={{
          pl: 3,
          pr: isMobile ? 2 : 0,
          color:light ? "black" : "whtie"
        }}
      >
        <Typography fontWeight={"bold"} mb={4} mt={2} fontSize={18} color={light ? "black" : "white"}>
         {product?.title}
        </Typography>
        <Box display={"flex"} flexDirection={isMobile ? "column" : "row"}>
          <Box
            width={isMobile ? "100%" : "45%"}
            height="500px"
            display="flex"
            justifyContent={"center"}
            justifyItems="center"
            alignItems="center"
            sx={{
              p: {
                lg: 3,
                sm: 2,
              },
            }}
          >
            {isLoading ? <Skeleton variant="rounded" width={"100%"} height={"100%"}/> : <Box width={"100%"} height={"100%"}>
              <img
                style={{ objectFit: "contain" }}
                width={"100%"}
                height="100%"
                src={product?.image}
                alt="bidProduct"
              />
            </Box>}
          </Box>
          <Box
            width={isMobile ? "100%" : "55%"}
            sx={{
              mr: {
                sm: 2,
              },
            }}
          >
            {/*border='1px solid rgba(34,36,38,.15)' */}
            <Box>
              {/**show not reach target */}
              <Box
                border={"1px solid rgba(34,36,38,.15)"}
                borderRadius={1}
                sx={{
                  px: 2,
                  pb: {
                    sm: 3,
                    xl: 5,
                  },
                  pt: {
                    sm: 2,
                    xl: 3,
                  },
                }}
              >
                <Typography
                  fontWeight={"bold"}
                  variant="body1"
                  textAlign={"center"}
                  color={light ? "black" : "white"}
                  sx={{
                    pl: {},
                  }}
                >
                  Reserve not met
                </Typography>
                <Box display={"flex"} justifyContent="space-between" my={2.5}>
                  <Typography fontWeight={"bold"} component={"div"} color={light ? "black" : "white"}>
                    Opening bid
                  </Typography>
                  <Typography fontWeight={"bold"} component={"div"} color={light ? "black" : "white"}>
                    {new Intl.NumberFormat("en-Us", {
                      style: "currency",
                      currency: "MMK",
                    })
                      .format(product?.price)
                      .replace(/(\d+)\.(\d+)/, "$1,$2 MMK")}
                  </Typography>
                </Box>

                {product?.currentBidPrice ? (
                  <Box display={"flex"} justifyContent="space-between" my={2.5}>
                    <Typography fontWeight={"bold"} component={"div"} color={light ? "black" : "white"}>
                      Current bid
                    </Typography>
                    <Typography fontWeight={"bold"} component={"div"} color={light ? "black" : "white"}>
                      {new Intl.NumberFormat("en-Us", {
                        style: "currency",
                        currency: "MMK",
                      })
                        .format(+product?.currentBidPrice)
                        .replace(/(\d+)\.(\d+)/, "$1,$2 MMK")}
                    </Typography>
                  </Box>
                ) : undefined}

                <Box
                  display={"flex"}
                  flexDirection={bidControl ? "column" : "row"}
                  gap={isMobile ? 0 : 2}
                >
                  {/*  replace enter bid*/}
                  <Box width={bidControl ? "100%" : "60%"}>
                    <OutlinedInput
                      value={bidPrice}
                      onChange={(e) => setBidPrice(e.target.value)}
                      fullWidth
                      placeholder="Enter your maximum bid"
                      endAdornment={
                        <InputAdornment position="end">
                          <Box display={"flex"} gap={1.2}>
                            <Divider
                              orientation="vertical"
                              sx={{ border: "1px solid" }}
                              flexItem
                            />
                            MMK
                          </Box>
                        </InputAdornment>
                      }
                    />
                  </Box>
                  <Box
                    width={bidControl ? "100%" : "40%"}  
                    my={isMobile ? 2 : "none"}
                  >
                   {bidding ? <ButtonLoading text="Bidding"/> : <BidButton
                      
                      disabled={bidding}
                      func={bidProductHandler}
                      ButtonText="Place bid"
                      padding={{
                        xs: 1.4,
                        sm: 1.6,
                        md: 1.7,
                      }}
                      bgC={light ? "warning.main" : "warning.dark"}
                      fontS={{
                        xs: 16,
                      }}
                      hoverC={light ? "warning.dark" : "warning.main"}
                    />}
                  </Box>
                  {/*place bid */}
                </Box>

                <Box>
                  <Box
                    display={"flex"}
                    justifyContent="space-between"
                    mt={isLargeScreen ? 4 : 2.2}
                    sx={{color:light ? "black" : "white"}}
                  >
                    <Typography fontWeight={"bold"} component={"div"}>
                      Sales tax
                    </Typography>
                    <Typography fontWeight={"bold"} component={"div"}>
                      20%
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/*add watchlist and ask a question */}

              <Box
                display={"flex"}
                flexDirection={bidControl ? "column" : "row"}
                sx={{
                  my: 3,
                  gap: {
                    xs: 1,
                  },
                }}
              >
                <BidButton
                  func={() => {}}
                  ButtonText="Add to watchlist"
                  icon={<FavoriteBorderIcon />}
                  padding={{
                    xs: 1.8,
                    sm: 1.5,
                    md: 1.7,
                    lg: 1.9,
                  }}
                  fontS={{
                    xs: 14,
                    sm: 16,
                  }}
                  bgC={"#181818"}
                  hoverC={"grey.700"}
                />
                <BidButton
                  func={() => {}}
                  ButtonText="Ask a question"
                  icon={<MailOutlineIcon />}
                  padding={{
                    xs: 1.8,
                    sm: 1.5,
                    md: 1.7,
                    lg: 1.9,
                  }}
                  fontS={{
                    xs: 14,
                    sm: 16,
                  }}
                  bgC={"#181818"}
                  hoverC={"grey.700"}
                />
              </Box>
            </Box>
            <Box
              border={"1px solid rgba(34,36,38,.15)"}
              borderRadius={1}
              sx={{
                px: 2,
                py: 0.4,
                mb: 3,
              }}
            >
              <Box display={"flex"} justifyContent="space-between" my={2.2}>
                <BidDetailTypo text="Timed auction" fontW="medium" light={light} />
                <BidDetailTypo light={light}
                  text={moment(product?.updatedAt).format("MMM DD, YYYY")}
                  fontW="medium"
                />
              </Box>
              <Divider />
              <Box display={"flex"} justifyContent="space-between" my={2.2}>
                <BidDetailTypo text="Auction Location" fontW="medium" light={light} />
                <BidDetailTypo text="Myanmar" fontW="medium" light={light}/>
              </Box>
            </Box>
          </Box>
        </Box>
        {/*time auction */}
      </Box>
    </>
  );
};

export default BidProduct;
function useMutationuseMutation<T, U, V>(
  firstBidProduct: (
    productId: string | undefined,
    productData: Partial<import("../Utils/apiTypes/apiTypes").Product>
  ) => Promise<import("axios").AxiosResponse<any, any>>,
  arg1: { onSuccess: () => void }
): { isLoading: any; mutate: any; isError: any; error: any } {
  throw new Error("Function not implemented.");
}
