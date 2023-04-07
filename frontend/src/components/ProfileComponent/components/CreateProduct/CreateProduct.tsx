import {
  Box,
  Grid,
  Paper,
  SelectChangeEvent,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import ImageUpload from "../ImageUpload/ImageUpload";
import { ChangeEventHandler, useState } from "react";
import CategoryLists from "./CategoryLists";
import Price from "./Price";
import AuctionDatePicker from "./AuctionDatePicker";
import BidButton from "../../../BiddingComponent/Components/BidButton";
import { DateRange } from "@mui/x-date-pickers-pro";
import dayjs, { Dayjs } from "dayjs";

const CreateProduct = () => {
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const Mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [productImage, setProductImage] = useState("");
  const [productTitle, SetProductTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState<DateRange<Dayjs>>([
    dayjs("2022-04-17"),
    dayjs("2022-04-21"),
  ]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setProductImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const categoryHandler = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const priceHanler = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setPrice(event.target.value as string);
  };

  const dateHandler = (newValue: DateRange<dayjs.Dayjs>) => setDate(newValue);

  const submitHandler = () => {
    console.log(
      "image",
      productImage,
      "title",
      productTitle,
      "category",
      category,
      "price",
      price,
      "date",
      { date }
    );
  };

  return (
    <>
      <Box
        width={Mobile ? "100%" : mediumScreen ? "90%" : "80%"}
        mx={"auto"}
        p={Mobile ? 3 : 0}
      >
        <Box mb={4}>
          <Typography
            fontWeight={"bold"}
            variant={mediumScreen ? "body1" : "h6"}
            component={"h6"}
          >
            Create a new product
          </Typography>
        </Box>
        <Box
          component={"form"}
          onSubmit={() => {}}
          boxSizing={"border-box"}
          sx={{
            mr: {
              lg: 0,
              md: 3,
              xs: 0,
            },
          }}
          onSubmitCapture={submitHandler}
        >
          <Grid
            container
            spacing={mediumScreen ? 0 : 3}
            sx={{ mx: "auto", width: "100%" }}
          >
            <Grid item xs={12} md={6} lg={7} xl={8} sx={{ p: 0 }}>
              <Paper
                sx={{
                  boxShadow:
                    "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
                  borderRadius: "10px",
                  p: {
                    xl: 3,
                    md: 2,
                    xs: 3,
                  },
                  mb: {
                    md: 0,
                    xs: 4,
                  },
                  width: "100%",
                }}
              >
                <ImageUpload
                  imageHandler={handleFileSelect}
                  value={productImage}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={5} xl={4}>
              <Box width={"100%"}>
                <Paper
                  sx={{
                    boxShadow:
                      "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
                    borderRadius: "10px",
                    p: {
                      md: "1rem 1rem 2rem",
                      sm: "1.6rem",
                      xs: "1.2rem",
                    },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: {
                      xl: 3.2,
                      lg: 2.6,
                      sm: 2.8,
                      xs: 2.4,
                    },
                  }}
                >
                  <Box>
                    <TextField
                      fullWidth
                      id="outlined-product-title"
                      value={productTitle}
                      onChange={(e) => SetProductTitle(e.target.value)}
                      label="Product Title"
                      InputLabelProps={{
                        style: {
                          color: "black",
                        },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                          {
                            border: "1px solid black",
                          },
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            border: "1px solid black",
                            color: "black",
                          },
                      }}
                    />
                  </Box>

                  <CategoryLists value={category} handler={categoryHandler} />
                  <Price value={price} func={priceHanler} />
                  <AuctionDatePicker value={date} func={dateHandler} />
                </Paper>
              </Box>
              <Box
                sx={{
                  mt: {
                    xl: 4,
                    md: 3,
                    xs: 2.6,
                  },
                  mb: {
                    md: 0,
                    sm: 2,
                  },
                }}
              >
                <BidButton
                  ButtonText="Create Product"
                  bgC="warning.main"
                  padding={{
                    xl: 1.6,
                    md: 1.2,
                    xs: 1.4,
                  }}
                  hoverC="warning.dark"
                  fontS={{
                    xl: 16,
                    md: 13,
                  }}
                  func={submitHandler}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default CreateProduct;