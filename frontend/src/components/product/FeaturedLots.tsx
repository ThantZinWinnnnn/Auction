import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Divider,
  Button,
  Paper,
} from "@mui/material";
import { relatedItems } from "../../data/DummyData";
import { ResponseProduct } from "../Utils/apiTypes/apiTypes";
import { useContext } from "react";
import { ThemeContext } from "../Utils/ThemeContext/ThemeContext";
import { useNavigate } from "react-router-dom";

interface realatedProductsProps{
  products :Array<ResponseProduct>
}

const FeaturedLots2:React.FC<realatedProductsProps> = ({products}) => {
  const navigate = useNavigate()
  const { themeMode } = useContext(ThemeContext);
  const light = themeMode === "light"

  return (
    <>
      <Typography
        color={light ? "black" : "white"}
        fontWeight={"bold"}
        component={"div"}
        sx={{
          fontSize:{
            xs:"1.2rem"
          }
        }}
        my={5}
      >
        Featured Lots
      </Typography>
      <Grid container spacing={4}  mb={5}>
        {products?.map((product) => (
          <Grid item xs={12} sm={4} md={3} xl={2} key={`${product.id}`}>
            <Paper  key={product?.id}
              sx={{
                boxShadow:
                  "rgb(0 0 0 / 4%) 0px 5px 22px, rgb(0 0 0 / 3%) 0px 0px 0px 0.5px",
                overflow: "hidden",
              }}>
            <Card key={`${product.id}`} sx={{height:{
              xs:"300px",
              sm:"260px",
              md:"290px",
            },
            }}>
              <Button sx={{width:"100%", height: "70%",p:0 }} onClick={()=> navigate(`/products/${product?.id}`)} disableElevation disableRipple>
              <CardMedia
                sx={{width:"100%", height: "100%"}}
                image={`${product?.image}`}
                title={`${product?.title}`}
              />
               </Button>
              <Divider sx={{ mb: 0.4 }} />
             
              <CardContent sx={{
                px:{
                    md:1,
                    lg:3
                }
              }}>
                <Typography
                  variant="body2"
                  component={"div"}
                  mb={1}
                  color="primary.light"
                  sx={{fontSize:{
                    xs:"0.8rem",
                    xl:"0.875rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}}
                >
                  {product?.title}
                </Typography>
                <Typography  component={"div"} sx={{
                  fontSize:{
                    xs:"0.8rem",
                    xl:"0.75rem"
                  }
                }}>
                  {new Intl.NumberFormat('en-Us',{style:'currency',currency:'MMK'}).format(product?.price).replace(/(\d+)\.(\d+)/, '$1,$2 MMK')}
                </Typography>
              </CardContent>
            </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default FeaturedLots2;
