import {
  Box,
  Button,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ResponseProduct } from "../Utils/apiTypes/apiTypes";
import moment from "moment";
import { ThemeContext } from "../Utils/ThemeContext/ThemeContext";
import { motion } from "framer-motion";



const productItem = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.4,
      type: "spring",
      ease: "easeInOut",
    },
  },
};

const Product: React.FC<productProp> = ({ product ,loading}) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const { themeMode } = useContext(ThemeContext);
  const light = themeMode === "light"


  return (
    <Box
      key={product?.id}
      component={motion.div}
      variants={productItem}
      exit={{opacity:0}}
      display={"flex"}
      flexDirection={isDesktop ? "row" : "column"}
      width={"100%"}
      sx={{
        gap: {
          sm: "3%",
          md: "2.4%",
        },
        mb:3,
        color:light ? "black" :"white"
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
            color={light ? "black" : "white"}
            fontWeight="bold"
            component={"div"}
            mb={isDesktop ? 1 : 2}
            sx={{
              "&:hover": {
                color: "warning.dark",
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
            sx={{bgcolor:light ? "warning.main" : "warning.dark",
            "&:hover":{
              bgcolor:light ? "warning.dark" :"warning.main"
            }
          }}
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
                color: 'white'
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

interface productProp {
  product: ResponseProduct;
  loading?:boolean
}
