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
  Divider
} from "@mui/material";
import React from "react";
import ProductInfo from "./ProductInfo";
import { data } from "../../../data/DummyData";

//to add updat price button

const SellProducts = () => {
  const theme = useTheme();
  const belowLg = useMediaQuery(theme.breakpoints.down('lg'))
  const Mobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box width={Mobile ? "100%" : "82%"} p={Mobile ? 2 : 0}>
      <Typography fontWeight={"bold"} variant="h5" mb={2}>Products</Typography>
      <Grid container spacing={2}>
        {data.map((p)=>(
          <Grid item lg={4} md={4} sm={6} xs={12}>
          <Card sx={{height:{
            xs:450,
            sm:400
          }}}>
            <CardMedia
              component={"img"}
              alt="product image"
              height={"40%"}
              image={p.image}
            />
                 {/* Mobile ? "body1" : belowLg ? "caption" : "body2" */}
            <CardContent>
              <Typography component={'div'} variant={Mobile ? "body1" : belowLg ? "caption" : "body2"} color={"text.secondary"} sx={{mb:1}}>
               {p.title}
              </Typography>
              <ProductInfo name="Owner" value={p.owner}/>
              <ProductInfo name="Your Price" price={+p.price}/>
              <ProductInfo name="Current Bid Winner" value={p.currentOwner}/>
              <ProductInfo name="Current Bid Price" price={+p.currentPrice}/>
              <ProductInfo name="Category" value={p.proCat}/>
            </CardContent>
          </Card>
        </Grid>
        ))}
        
        
      </Grid>
    </Box>
  );
};

export default SellProducts;
