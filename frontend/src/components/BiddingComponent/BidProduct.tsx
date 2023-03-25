import React from "react";
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
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BidButton from "./Components/BidButton";
import BidDetailTypo from "./Components/BidDetailTypo";

const BidProduct = () => {
  const theme = useTheme();
  const bidControl = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      {/*to add shadow */}
      <Box
        width={isLargeScreen ? "60%" : "100%"}
        marginX="auto"
        sx={{
          pl: 3,
          pr: isMobile ? 2 : 0,
        }}
      >
        <Typography fontWeight={"bold"} mt={3} fontSize={18}>
          Men's Volanthen Automatic Watch
        </Typography>
        <Box display={"flex"} flexDirection={isMobile ? "column" : "row"}>
          <Box width={isMobile ? "100%" : "45%"} height="500px"  display="flex" justifyContent={"center"} justifyItems="center" alignItems="center">
           <Box minWidth={"100%"} >
           <img
              min-width={"100%"}
              min-height="100%"
              src="https://portal-images.azureedge.net/auctions-2023/wi415250/images/1fb55dfa-6fc7-46c4-a8c9-afc700c2a90e.jpg?w=540&h=360&mode=max"
              alt="bidProduct"
            />
           </Box>
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
                  pb:{
                    sm:3,
                    xl:5
                  },
                  pt:{
                    sm:2,
                    xl:3
                  }
                }}
              >
                <Typography
                  fontWeight={"bold"}
                  variant="body1"
                  textAlign={"center"}
                  sx={{
                    pl: {},
                  }}
                >
                  Reserve not met
                </Typography>
                <Box display={"flex"} justifyContent="space-between" my={2.5}>
                  <Typography fontWeight={"bold"} component={"div"}>
                    Opening bid
                  </Typography>
                  <Typography fontWeight={"bold"} component={"div"}>
                    15 MMKS
                  </Typography>
                </Box>

                <Box
                  display={"flex"}
                  flexDirection={bidControl ? "column" : "row"}
                  gap={isMobile ? 0 : 2}
                >
                  {/*  replace enter bid*/}
                  <Box width={bidControl ? "100%" : "60%"}>
                    <OutlinedInput
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
                            MMKS
                          </Box>
                        </InputAdornment>
                      }
                    />
                  </Box>
                  <Box
                    width={bidControl ? "100%" : "40%"}
                    my={isMobile ? 2 : "none"}
                  >
                    <BidButton
                      ButtonText="Place bid"
                      padding={{
                        xs: 1.4,
                        sm: 1.6,
                        md:1.7
                      }}
                      bgC="warning.main"
                      fontS={{
                        xs:16
                      }}
                      hoverC="warning.dark"
                    />
                  </Box>
                  {/*place bid */}
                </Box>

                <Box>
                  <Box display={"flex"} justifyContent="space-between" mt={isLargeScreen? 4 : 2.2}>
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
                  ButtonText="Add to watchlist"
                  icon={<FavoriteBorderIcon />}
                  padding={{
                    xs: 1.8,
                    sm: 1.5,
                    md:1.7,
                    lg:1.9
                  }}
                  fontS={{
                    xs:14,
                    sm:16
                  }}
                  bgC={"#181818"}
                  hoverC={"grey.700"}
                />
                <BidButton
                  ButtonText="Ask a question"
                  icon={<MailOutlineIcon />}
                  padding={{
                    xs: 1.8,
                    sm: 1.5,
                    md:1.7,
                    lg:1.9
                  }}
                  fontS={{
                    xs:14,
                    sm:16
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
                <BidDetailTypo text="Timed auction" fontW="medium"/>
                <BidDetailTypo text="Mar 14" fontW="medium"/>
              </Box>
              <Divider/>
              <Box display={"flex"} justifyContent="space-between" my={2.2}>
                <BidDetailTypo text="Auction Location" fontW="medium"/>
                <BidDetailTypo text="Myanmar" fontW="medium"/>
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
