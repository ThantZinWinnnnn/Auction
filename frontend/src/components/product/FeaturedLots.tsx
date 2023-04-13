import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";
import { relatedItems } from "../../data/DummyData";
import { ResponseProduct } from "../Utils/apiTypes/apiTypes";

interface realatedProductsProps{
  products :Array<ResponseProduct>
}

const FeaturedLots2:React.FC<realatedProductsProps> = ({products}) => {


  return (
    <>
      <Typography
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
            <Card key={`${product.id}`} sx={{height:{
              sm:"260px",
              md:"290px",
            },
            }}>
              <CardMedia
                sx={{width:"100%", height: "70%" ,paddingTop: '56.25%'}}
                image={`${product?.image}`}
                title={`${product?.title}`}
              />
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
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default FeaturedLots2;
