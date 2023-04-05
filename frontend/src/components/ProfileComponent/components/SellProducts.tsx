import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";
import React from "react";
import ProductInfo from "./ProductInfo";
import { data } from "../../../data/DummyData";

//to add updat price button

const SellProducts = () => {
  const theme = useTheme();
  const belowLg = useMediaQuery(theme.breakpoints.down("lg"));
  const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const Mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      width={Mobile ? "100%" : mediumScreen ? "90%" : "80%"}
      p={Mobile ? 2 : 0}
      mx={"auto"}
    >
      <Typography fontWeight={"bold"} variant="h5" mb={2}>
        Products
      </Typography>
      <Grid container spacing={3}>
        {data.map((p) => (
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Paper sx={{boxShadow:"rgb(0 0 0 / 4%) 0px 5px 22px, rgb(0 0 0 / 3%) 0px 0px 0px 0.5px",borderRadius:"16px",overflow:"hidden"}}>
              <Card
              
              >
                <CardMedia
                  component={"img"}
                  alt="product image"
                  image={p.image}
                  sx={{
                    p: "12px",
                    borderRadius: "18px",
                    overflow: "hidden",
                  }}
                />
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
                    {p.title}
                  </Typography>

                  <ProductInfo name="Your Price" price={+p.price} />
                  <ProductInfo name="Category" value={p.proCat} />
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SellProducts;
