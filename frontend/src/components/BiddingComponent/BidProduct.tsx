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
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const BidProduct = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {/*to add shadow */}
      <Box
        width={isDesktop ? "74%" : "100%"}
        sx={{
          pl: 3,
          pr: 2,
        }}
      >
        <Typography fontWeight={"bold"} mt={3} fontSize={18}>
          Men's Volanthen Automatic Watch
        </Typography>
        <Box display={"flex"} flexDirection={isMobile ? "column" : "row"}>
          <Box width={isMobile ? "100%" : "50%"}>
            <img
              width={"100%"}
              src="https://portal-images.azureedge.net/auctions-2023/wi415250/images/1fb55dfa-6fc7-46c4-a8c9-afc700c2a90e.jpg?w=540&h=360&mode=max"
              alt="bidProduct"
            />
          </Box>
          <Box>
            {/**show not reach target */}
            <Typography
              fontWeight={"bold"}
              variant="body1"
              textAlign={"center"}
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

            <Box display={"flex"} flexDirection={isMobile ? "column" : "row"}>
              {/*  replace enter bid*/}
              <Box width={isMobile ? "100%" : "70%"}>
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
              <Box width={isMobile ? "100%" : "30%"} my={isMobile ? 2 : "none"}>
                <Button
                  disableElevation
                  disableRipple
                  fullWidth
                  color="warning"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    p: 1.4,
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
              <Box display={"flex"} gap={"30%"} my={2.2}>
                <Typography fontWeight={"bold"} component={"div"}>
                  Sales tax
                </Typography>
                <Typography fontWeight={"bold"} component={"div"}>
                  20%
                </Typography>
              </Box>
            </Box>

            {/*add watchlist and ask a question */}

            <ButtonGroup
              color="inherit"
              orientation={isMobile ? "vertical" : "horizontal"}
              fullWidth
              variant="outlined"
              aria-label="outlined button group"
              sx={{
                my:3
              }}
            >
              <Button
                disableElevation
                disableRipple
                sx={{
                  textTransform: "none",
                  py: 2,
                  color: "black",
                }}
                startIcon={<FavoriteBorderIcon/>}
              >
                Add to watchlist
              </Button>
              <Button
                disableElevation
                disableRipple
                startIcon={<MailOutlineIcon/>}
                sx={{
                  textTransform: "none",
                  py: 2,
                  color: "black",
                }}
              >
                Ask a question
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
        {/*time auction */}
        <Paper sx={{
            px:1,
            py:0.4,
            mb:3
        }}>
              <Box display={"flex"} gap={"30%"} my={2.2}>
                <Typography fontWeight={"medium"} variant="h6" component={"div"}>
                  Timed auction
                </Typography>
                <Typography fontWeight={"medium"} variant="h6" component={"div"}>
                  Mar14
                </Typography>
              </Box>
            </Paper>
      </Box>
    </>
  );
};

export default BidProduct;
