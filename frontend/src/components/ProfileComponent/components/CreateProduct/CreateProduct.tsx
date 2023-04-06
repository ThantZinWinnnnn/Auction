import {
  Box,
  Grid,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import ImageUpload from "../ImageUpload/ImageUpload";
import { useState } from "react";



const CreateProduct = () => {
  const [productImage,setProductImage] = useState('')
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const Mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box width={Mobile ? "100%" : mediumScreen ? "90%" : "80%"}>
        <Box mb={4}>
          <Typography fontWeight={"bold"} variant="h5" component={"h6"}>
            Create a new product
          </Typography>
        </Box>
        <Box component={"form"} onSubmit={() => {}}>
          <Grid container spacing={3}>
            <Grid item xl={8}>
              <Paper
                sx={{
                  boxShadow:
                    "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
                  borderRadius: "10px",
                  p:{
                    xl:3
                  }
                }}
              >
                <Box>
                  <TextField
                    fullWidth
                    id="outlined-product-title"
                    label="Product Name"
                    InputLabelProps={{
                      style: {
                        color: 'black'
                      }
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                        border:"1px solid black",
                        
                      },
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        border:"1px solid black",
                        color:"black"
                      },
                      
                    }}
                  />
                </Box>

                <ImageUpload onChange={(image)=> setProductImage(image)} label="image" disabled value={productImage}/>
              </Paper>
            </Grid>
            <Grid item xl={4}>
              <Box width={"100%"}  height={"100%"}>
                <Paper sx={{
                  boxShadow:
                    "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
                  borderRadius: "10px",
                  p:{
                    xl:3
                  }
                }}>
                  <Typography>Product Category</Typography>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default CreateProduct;
