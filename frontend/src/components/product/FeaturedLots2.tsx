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

const FeaturedLots2 = () => {
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
        {relatedItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} xl={3}>
            <Card sx={{height:{
              sm:"400px",
              xl:"300px"
            }}}>
              <CardMedia
                sx={{width:"100%", height: "50%" ,paddingTop: '56.25%'}}
                image={`${item.url}`}
                title={`${item.name}`}
              />
              <Divider sx={{ mb: 2 }} />
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
                    xs:"1.5rem",
                    sm:"1.2rem",
                    xl:"0.875rem"
                  }}}
                >
                  {item.info}
                </Typography>
                <Typography  component={"div"} sx={{
                  fontSize:{
                    xs:"1rem",
                    xl:"0.75rem"
                  }
                }}>
                  {item.currentlot}
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
