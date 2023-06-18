import {
  Box,
  Grid,
  Paper,
  SelectChangeEvent,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  Snackbar,
  SnackbarOrigin,
  Alert
} from "@mui/material";

//Import tanstackquery
import { useMutation, useQueryClient } from "@tanstack/react-query";

///Import product create api
import { productAPI } from "../../../Utils/endpoins/axios";

import moment from "moment";

import { DateRange } from "@mui/x-date-pickers-pro";
import dayjs, { Dayjs } from "dayjs";

import { ChangeEventHandler, useState } from "react";
import CategoryLists from "./CategoryLists";
import Price from "./Price";
import AuctionDatePicker from "./AuctionDatePicker";
import BidButton from "../../../BiddingComponent/Components/BidButton";
import ImageUpload from "../ImageUpload/ImageUpload";
import {
  watchesSubCategories,
  jewellerySubCategories,
  vehicleSubCategories,
  fashionSubCategories,
  handbagSubCategories,
  electronicSubCategories,
} from "../../../../data/DummyData";
import { PrimaryCategories } from "../../../../data/DummyData";

import { Product } from "../../../Utils/apiTypes/apiTypes";
import Toast from "./Toast";
import ButtonLoading from "../../../Utils/LoadingIndicator/ButtonLoading";
interface themeProps {
  light: boolean;
}


const CreateProduct: React.FC<themeProps> = ({ light }) => {
  const queryClient = useQueryClient();
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const Mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const currentDate = moment(Date.now()).format("YYYY-MM-DD");

  const [productImage, setProductImage] = useState("");
  const [productTitle, SetProductTitle] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState<DateRange<Dayjs>>([
    dayjs(`${currentDate}`),
    dayjs(`${currentDate}`),
  ]);

  console.log("datee",moment(moment(date[0]?.$d).toISOString()).format('YYYY-MM-DD'))
  const [open,setOpen] = useState<boolean>(true);
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(!open);
  };

  // const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       if (reader.result) {
  //         setProductImage(reader.result as string);
  //       }
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const categoryHandler = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const subCateogryHandler = (event: SelectChangeEvent) => {
    setSubCategory(event.target.value as string);
  };

  const priceHanler = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setPrice(event.target.value as string);
  };

  const dateHandler = (newValue: DateRange<dayjs.Dayjs>) => setDate(newValue);

  const {
    isLoading,
    mutate: createProduct,
    data: product,
    isError,
    error,
    isSuccess,
  } = useMutation(productAPI.createProduct, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(["products", "allProducts"]);
      SetProductTitle("");
      setProductImage("");
      setCategory("");
      setSubCategory("");
      setPrice("");
      setDate([dayjs("2023-04-17"), dayjs("2023-04-21")]);

      // console.log("product", data?.data);
      // const date = data?.data?.post?.createdAt;
      // console.log("date", date);
    },
    onError: (error) => {
      console.log("error", error);
    },
  });

  const submitHandler = () => {

    const productPrice = Number(price);

    const product: Product = {
      title: productTitle,
      image: productImage as string,
      price: productPrice,
      category,
      subCategory,
      createdAt: moment(date[0]?.$d).toISOString(),
      updatedAt: moment(date[1]?.$d).toISOString(),
    };

    if(productTitle.length > 10 && productImage.length > 0 && productPrice > 0 && category.length>0 && subCategory.length > 0 ){
      createProduct(product);
    }

    return null;

    
  };

  return (
    <>
      <Box
        width={Mobile ? "100%" : mediumScreen ? "90%" : "80%"}
        mx={"auto"}
        p={Mobile ? 3 : 0}
        sx={{ color: light ? "black" : "white" }}
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
                  bgcolor: light ? "white" : "#1B2938",
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
                        color: light ? "black" : "white",
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                        {
                          border: light ? "1px solid black" : "1px solid white",
                        },
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          border: light ? "1px solid black" : "1px solid white",
                          color: "black",
                        },
                      mb: 2,
                    }}
                    // error={!!(productTitle.length < 10)}
                    // helperText={"Proudct title should not be less than 10 characters for searching your product."}
                  />
                </Box>
                <ImageUpload
                  light={light}
                  imageHandler={(e) => setProductImage(e.target.value)}
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
                      xl: 3.8,
                      lg: 3.3,
                      md: 3.6,
                      sm: 2.8,
                      xs: 2.4,
                    },
                    bgcolor: light ? "white" : "#1B2938",
                  }}
                >
                  <CategoryLists
                    text="Product Category"
                    label="Category"
                    value={category}
                    handler={categoryHandler}
                    categories={PrimaryCategories}
                  />

                  {/**  when user chooses a category to show related subCategories */}
                  {category && (
                    <CategoryLists
                      text="Product Subcategory"
                      label="SubCategory"
                      value={subCategory}
                      handler={subCateogryHandler}
                      categories={
                        category === "Watches"
                          ? watchesSubCategories
                          : category === "Jewellery"
                          ? jewellerySubCategories
                          : category === "Electrical"
                          ? electronicSubCategories
                          : category === "Vehicles"
                          ? vehicleSubCategories
                          : category === "Fashion"
                          ? fashionSubCategories
                          : handbagSubCategories
                      }
                    />
                  )}

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
                    lg: 6,
                  },
                }}
              >
                {isLoading ? <ButtonLoading text="Loading"/> : <BidButton
                  color="white"
                  disabled={isLoading}
                  ButtonText="Create Product"
                  bgC={light ? "warning.main" : "warning.dark"}
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
                />}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {isSuccess && <Toast open={open} handleClose={handleClose} info="success" message="Successfully created Product" Xaxis="right" Yaxis="bottom"/>  }
      {isError && <Toast open={open} handleClose={handleClose} info="error" message="Please Enter the full Information" Xaxis="right" Yaxis="bottom"/>}
    </>
  );
};

export default CreateProduct;
