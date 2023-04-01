import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import ProductInfo from "./ProductInfo";

//to add updat price button

const SellProducts = () => {
  return (
    <Box>
      <Typography fontWeight={"bold"}>Products</Typography>
      <Grid container>
        <Grid>
          <Card>
            <CardMedia
              component={"img"}
              alt="product image"
              height={"50%"}
              image="https://portal-images.azureedge.net/auctions-2023/wi415243/images/b2378df8-210e-44b4-b0f7-208b2a33e1d1.png?w=250"
            />
            <CardContent>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                repellat, recusandae quo voluptatibus deserunt accusamus enim
                ducimus non in illum expedita. Eveniet unde debitis totam
                adipisci vitae asperiores atque mollitia?
              </Typography>
              <ProductInfo name="Owner" value={"Thant Zin Win"}/>
              <ProductInfo name="Your Price" price={200}/>
              <ProductInfo name="Current Bid Winner" value="Thant"/>
              <ProductInfo name="Current Bid Price" price={400}/>
              <ProductInfo name="Category" value="Electronics"/>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SellProducts;
