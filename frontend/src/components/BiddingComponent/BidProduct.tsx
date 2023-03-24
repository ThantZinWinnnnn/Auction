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

const BidProduct = () => {
  const theme = useTheme();
  const bidControl = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <>
      {/*to add shadow */}
      <Box
        width={isDesktop ? "74%" : "100%"}
        sx={{
          pl: 3,
          pr: isMobile ? 2 : 0,
        }}
      >
        <Typography fontWeight={"bold"} mt={3} fontSize={18}>
          Men's Volanthen Automatic Watch
        </Typography>
        <Box display={"flex"} flexDirection={isMobile ? "column" : "row"}>
          <Box width={isMobile ? "100%" : "45%"}>
            <img
              width={"100%"}
              src="https://portal-images.azureedge.net/auctions-2023/wi415250/images/1fb55dfa-6fc7-46c4-a8c9-afc700c2a90e.jpg?w=540&h=360&mode=max"
              alt="bidProduct"
            />
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
              <Box border={"1px solid rgba(34,36,38,.15)"} borderRadius={1} sx={{
                p:2
              }}>
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
                <Box display={"flex"} gap={"30%"} my={2.5}>
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
                    <Button
                      disableElevation
                      disableRipple
                      fullWidth
                      color="warning"
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        p: {
                          xs: 1.4,
                          sm: 1.6,
                        },
                        fontSize: 16,
                        fontWeight: "bold",
                        "&:hover": {
                          backgroundColor: "warning.dark",
                        },
                      }}
                    >
                      Place bid
                    </Button>
                  </Box>
                  {/*place bid */}
                </Box>

                <Box>
                  <Box display={"flex"} gap={"30%"} mt={2.2}>
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
                  gap:{
                    xs:1
                  }
                }}
              >
                <Button
                  variant="contained"
                  disableElevation
                  disableRipple
                  sx={{
                    textTransform: "none",
                    py:{
                      xs:2.5,
                      sm:1.5
                    },
                    color: "white",
                    bgcolor: "#181818",
                    fontSize: 17,
                  }}
                  startIcon={<FavoriteBorderIcon />}
                >
                  Add to watchlist
                </Button>
                <Button
                  variant="contained"
                  disableElevation
                  disableRipple
                  startIcon={<MailOutlineIcon />}
                  sx={{
                    textTransform: "none",
                    py:{
                      xs:2.5,
                      sm:1.5
                    },
                    color: "white",
                    bgcolor: "#181818",
                    fontSize: 17,
                  }}
                >
                  Ask a question
                </Button>
              </Box>
            </Box>
            <Box
              border={"1px solid rgba(34,36,38,.15)"}
              sx={{
                px: 2,
                py: 0.4,
                mb: 3,
              }}
            >
              <Box display={"flex"} gap={"30%"} my={2.2}>
                <Typography
                  fontWeight={"medium"}
                  variant="h6"
                  component={"div"}
                >
                  Timed auction
                </Typography>
                <Typography
                  fontWeight={"medium"}
                  variant="h6"
                  component={"div"}
                >
                  Mar14
                </Typography>
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
