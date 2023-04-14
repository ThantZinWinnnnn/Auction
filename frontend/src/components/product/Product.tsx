import {
  Box,
  Button,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import { ResponseProduct } from "../Utils/apiTypes/apiTypes";
import moment from "moment";

interface productProp {
  product: ResponseProduct;
  loading?:boolean
}

const Product: React.FC<productProp> = ({ product ,loading}) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      display={"flex"}
      flexDirection={isDesktop ? "row" : "column"}
      width={"100%"}
      sx={{
        gap: {
          sm: "3%",
          md: "2.4%",
        },
        mb:3
      }}
      px={isDesktop ? 0 : 2}
    >
      <Box width={"150px"} mx={isDesktop ? "" : "auto"} mb={isDesktop ? 0 : 2}>
        <Box
          mb={isDesktop ? 1.5 : 1}
          sx={{ paddingX: 0 }}
          overflow="hidden"
          width={"100%"}
          height={"150px"}
        >
          <Link to={`/products/${product?.id}`}>
            <img
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover" }}
              src={product?.image}
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
          {product?.owner}
        </Typography>
      </Box>

      <Box width={isDesktop ? "52%" : "100%"}>
        {/*dynamic routes */}
        <Link to={`/products/${product?.id}`}>
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
            {product?.title}
          </Typography>
        </Link>
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
          Starts: {moment(product?.createdAt).format("MMM DD, YYYY")}
        </Typography>
        <Typography
          variant={isDesktop ? "caption" : "subtitle2"}
          component={"h6"}
        >
          Ends from: {moment(product?.updatedAt).format("MMM DD, YYYY")}
        </Typography>
      </Box>
      <Box width={isDesktop ? "20%" : "100%"} mt={isDesktop ? 0 : 3}>
        <Link to={`/products/${product?.id}`}>
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
