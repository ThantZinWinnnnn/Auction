import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import React, { useCallback, useContext, useState } from "react";
import { UserProductsResponse } from "../../../../Utils/apiTypes/apiTypes";

import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../../Utils/ThemeContext/ThemeContext";
import { motion } from "framer-motion";
import HoverCardComponent from "./HoverCardComponent";
import ScrollToTopFab from "../../../../Utils/Fab/UpArrow";

interface userProductsProps {
  products: Array<UserProductsResponse>;
  showEditButton: boolean;
}

const productContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      type: "spring",
      ease: "easeInOut",
    },
  },
};

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

const Products: React.FC<userProductsProps> = ({
  products,
  showEditButton,
}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const belowLg = useMediaQuery(theme.breakpoints.down("lg"));
  const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const Mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [editModal, setEditModal] = useState(false);

  const { themeMode } = useContext(ThemeContext);
  const light = themeMode === "light";

  if (products.length === 0)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          width: "100%",
        }}
      >
        <Typography
          color={light ? "warning.dark" : "white"}
          align="center"
          fontWeight={"bold"}
          variant="h4"
        >
          You don't have any Product.
        </Typography>
      </Box>
    );

  return (
    <Box
      component={motion.div}
      initial="hidden"
      animate="visible"
      variants={productContainer}
      width={Mobile ? "100%" : mediumScreen ? "90%" : "80%"}
      p={Mobile ? 2 : 0}
      mx={"auto"}
      sx={{
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          width: "1px",
        },
      }}
    >
      <Typography
        fontWeight={"bold"}
        variant="h5"
        mb={2}
        color={light ? "black" : "white"}
      >
        Products
      </Typography>
      <Grid container spacing={3}>
        {products?.map((p: UserProductsResponse) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={p?.id}>
            <Paper
              component={motion.div}
              variants={productItem}
              key={p?.id}
              sx={{
                boxShadow:
                  "rgb(0 0 0 / 4%) 0px 5px 22px, rgb(0 0 0 / 3%) 0px 0px 0px 0.5px",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <Card key={p?.id}>
                <Button
                  disableElevation
                  disableRipple
                  fullWidth
                  sx={{ p: 0 }}
                  onClick={() => navigate(`/products/${p?.id}`)}
                >
                  <CardMedia
                    component={"img"}
                    alt="product image"
                    image={p?.image}
                    width={mediumScreen ? "260px" : "210px"}
                    style={{ height: mediumScreen ? "260px" : "210px" }}
                    sx={{
                      p: "12px",
                      borderRadius: "18px",
                      overflow: "hidden",
                      objectFit: "cover  ",
                    }}
                  />
                </Button>
                <CardContent>
                  <HoverCardComponent
                    p={p}
                    showEdit={showEditButton}
                    key={p?.id}
                  />
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Box width={"10%"} pl={"auto"} ml={"auto"}>
        <ScrollToTopFab />
      </Box>
    </Box>
  );
};

export default Products;
