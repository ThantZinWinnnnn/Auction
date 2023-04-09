import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box
      display={"flex"}
      flexDirection={isDesktop ? "row" : "column"}
      width={isDesktop ? "74%" : "100%"}
      sx={{
        gap: {
          sm: "3%",
          md:"2.4%"
        },
      }}
      px={isDesktop ? 0 : 2}
    >
      <Box
        width={ "150px"}
        mx={isDesktop ? "" : "auto"}
        mb={isDesktop ? 0 : 2}

      >
        <Box mb={isDesktop ? 1.5 : 1} sx={{ paddingX: 0 }} overflow="hidden" width={"100%"}>
          <Link to={"/products/1"}>
            <img
              width={"100%"}
              src="https://portal-images.azureedge.net/auctions-2023/wi415169/images/27d95c96-e885-4da2-9521-fb82562ac93e.jpeg?w=250"
              alt="categories image"
            />
          </Link>
        </Box>
        <Typography
          variant="caption"
          component={"div"}
          fontWeight="bold"
          textAlign="center"
          fontSize={isDesktop ? 10 : 16}
        >
          Thant Zin Win
        </Typography>
      </Box>

      <Box width={isDesktop ? "50%" : "100%"}>
        {/*dynamic routes */}
        <Link to={"/products/1"}>
          <Typography
            color={"black"}
            fontWeight="bold"
            component={"div"}
            mb={isDesktop ? 1 : 2}
            sx={{
              "&:hover": {
                color: "primary.light",
              },
              fontSize: {
                xs: 14,
                sm: 12,
                md: 16,
                xl: 18,
              },
            }}
          >
            No Reserve Pallets of Customer Returns I Small Domestic Appliances,
            Fashion, Toys & Furniture - Sourced from a Major UK Retailer
          </Typography>
        </Link>
        {/* <Typography
					variant="caption"
					color={"grey.600"}
					component="p"
					sx={{ mb: 3 }}
				>
					All pallets are delivery only.Standard pallets £70+VAT,oversized
					pallets £140+VAT to the UK exc Highlands,Islands&South-West which are
					a higher rate
				</Typography> */}
        <Typography
          component={"h5"}
          fontWeight={"bold"}
          mb={isDesktop ? 1.5 : 0.8}
          sx={{
            fontSize: {
              xs: 13,
              sm: 10.5,
              md: 14,
            },
          }}
        >
          Auction dates
        </Typography>
        <Typography
          variant={isDesktop ? "caption" : "subtitle2"}
          component={"h6"}
        >
          Starts: Feb 08, 2023 12:00 PM GMT
        </Typography>
        <Typography
          variant={isDesktop ? "caption" : "subtitle2"}
          component={"h6"}
        >
          Ends from: Feb 21, 2023 01:00 PM GMT
        </Typography>
      </Box>
      <Box width={isDesktop ? "24%" : "100%"} mt={isDesktop ? 0 : 3}>
        <Link to={"/detail"}>
          <Button
            fullWidth
            variant="contained"
            color="warning"
            disableElevation
          >
            <Typography
              sx={{
                fontSize: {
                  xs: 14,
                  sm: 9,
                  md: 12,
                  xl: 14,
                },
                py: {
                  xs: 0.4,
                  md: 0.4,
                  lg: 0.6,
                },
              }}
            >
              View Catalog
            </Typography>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Product;
