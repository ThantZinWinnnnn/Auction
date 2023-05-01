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
import React, { useContext } from "react";
import { UserProductsResponse } from "../../../../Utils/apiTypes/apiTypes";
import ProductInfo from "../../CreateProduct/ProductInfo";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../../Utils/ThemeContext/ThemeContext";

interface userProductsProps {
  products: Array<UserProductsResponse>;
}

const Products: React.FC<userProductsProps> = ({ products }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const belowLg = useMediaQuery(theme.breakpoints.down("lg"));
  const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const Mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { themeMode } = useContext(ThemeContext);
  const light = themeMode === "light"

  if (products.length === 0)
    return     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' ,width:"100%"}}>
      <Typography color={light ? 'warning.dark' : "white"} align="center" fontWeight={'bold'} variant="h4">You don't have any Product.</Typography>
  </Box>

  return (
    <Box
      width={Mobile ? "100%" : mediumScreen ? "90%" : "80%"}
      p={Mobile ? 2 : 0}
      mx={"auto"}
    >
      <Typography fontWeight={"bold"} variant="h5" mb={2} color={light ? "black" : "white"}>
        Products
      </Typography>
      <Grid container spacing={3}>
        {products?.map((p: UserProductsResponse) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={p?.id}>
            <Paper
              key={p?.id}
              sx={{
                boxShadow:
                  "rgb(0 0 0 / 4%) 0px 5px 22px, rgb(0 0 0 / 3%) 0px 0px 0px 0.5px",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <Card key={p?.id}>
                <Button disableElevation disableRipple fullWidth sx={{p:0}} onClick={() => navigate(`/products/${p?.id}`)}>
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
                {/* Mobile ? "body1" : belowLg ? "caption" : "body2" */}
                <CardContent>
                  <Typography
                    component={"div"}
                    variant={Mobile ? "body1" : belowLg ? "caption" : "body2"}
                    color={"text.secondary"}
                    sx={{
                      mb: 3,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {p?.title}
                  </Typography>

                  <ProductInfo name="Your Price" price={+p?.price} />
                  {p?.currentBidPrice ? (<ProductInfo name="Current Price" price={+p?.currentBidPrice}/>) : <ProductInfo name="Current Price" price={0}/>}
                  <ProductInfo name="Category" value={p?.category?.name} />
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
