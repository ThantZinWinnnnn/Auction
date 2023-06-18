import {
  Box,
  Input,
  InputBase,
  Modal,
  OutlinedInput,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import {
  OwnerUpdateHandler,
  OwnerUpdateProduct,
  UserProductsResponse,
} from "../../../../Utils/apiTypes/apiTypes";
import ProductInput from "./ProductInput";
import UpdateDatePicker from "./UpdateDatePicker";
import BidButton from "../../../../BiddingComponent/Components/BidButton";
import DeleteIcon from "@mui/icons-material/Delete";
import MemoizedDatePicker from "./UpdateDatePicker";
import moment from "moment";
import UpdatingButton from "../../../../Utils/LoadingIndicator/UpdatingButton";

const DetailProductModal: React.FC<ProductProps> = ({
  updateObj,
  deleteHandler,
  deleting,
  updating,
  p,
  updateHandlerObj,
}) => {
  const { price, currentBidPrice, category, subCategory, date, startDate } =
    updateObj;

  console.log("dattttt", date, "startDate", startDate);

  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box component={"section"}>
      <Box
        component={"div"}
        sx={{
          display: "flex",
          height: {
            xs:"550px",
            sm:"400px"
          },
          flexDirection: mobileScreen ? "column" : "row",
          gap: 1.3,
        }}
        width={"100%"}
      >
        <Box  overflow={"hidden"} component={"div"} sx={{
         width:{
          xs:"100%",
          sm:"50%"
         }
        }}>
          <img
            src={p?.image}
            width={"100%"}
            height={"100%"}
            alt="product"
            style={{
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </Box>
        <Box
          component={"div"}

          sx={{
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              width: "1px",
            },
            width:{
              xs:"100%",
              sm:"50%"
             }
          }}
        >
          <Typography
            fontWeight={"bold"}
            textAlign={"left"}
            sx={{
              mb: 1.8,
              fontSize: {
                sm: 12,
                lg: 13,
              },
            }}
          >
            {p?.title}
          </Typography>
          <Box display={"flex"} flexDirection={"column"} gap={1}>
            <ProductInput
              changeHanler={updateHandlerObj.priceHandler}
              title="Your Price"
              value={`${price}`}
              disable={Boolean(p?.currentBidPrice) ? true : false}
            />
            <ProductInput
              changeHanler={updateHandlerObj.currentPriceHandler}
              title="Current Bid Price"
              value={`${currentBidPrice}`}
              disable={Boolean(p?.currentBidPrice) ? true : false}
            />
            <ProductInput
              changeHanler={updateHandlerObj.categoryHandler}
              title="Category"
              value={`${category}`}
              disable={Boolean(p?.currentBidPrice) ? true : false}
            />
            {Boolean(p?.currentBidPrice) ? (
              <ProductInput
                changeHanler={updateHandlerObj.subCategoryHandler}
                title="Sub Category"
                value={`${subCategory}`}
                disable={true}
              />
            ) : null}
            {/* <UpdateDatePicker/> */}
            {Boolean(p?.currentOwnerName) ? null : (
              <MemoizedDatePicker
                title="Update your product start date"
                date={startDate}
                changeHandler={updateHandlerObj.startDateHandler}
              />
            )}
            <MemoizedDatePicker
              title="Update your product end date"
              date={date}
              changeHandler={updateHandlerObj.dateHandler}
            />
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        width={"240px"}
        ml={"auto"}
        sx={{
          my: {
            xs: 2,
          },
          gap: {
            xs: 2,
          },
        }}
      >
        <Tooltip
          placement="top"
          title={
            Boolean(p?.currentOwnerName)
              ? "Can't delete product.It has bid owner"
              : "Delete"
          }
        >
          <Box width={"100%"}>
            {deleting ? (
              <UpdatingButton text="Deleting" />
            ) : (
              <BidButton
                padding={{ xs: 1 }}
                ButtonText="Delete"
                fontS={{ xs: 11, md: 13 }}
                bgC="error.dark"
                hoverC="error.main"
                color="white"
                func={deleteHandler}
                icon={<DeleteIcon />}
                disabled={Boolean(p?.currentOwnerName)}
              />
            )}
          </Box>
        </Tooltip>
        {updating ? (
          <UpdatingButton text="Updating" />
        ) : (
          <BidButton
            padding={{ xs: 1 }}
            ButtonText="Update"
            fontS={{ xs: 11, md: 13 }}
            bgC="warning.dark"
            hoverC="warning.main"
            color="white"
            func={updateHandlerObj.finalUpdateHandler}
          />
        )}
      </Box>
    </Box>
  );
};

export default DetailProductModal;

interface ProductProps {
  p: UserProductsResponse;
  deleting?: boolean;
  updating?: boolean;
  deleteHandler: () => void;
  updateObj: OwnerUpdateProduct;
  updateHandlerObj: OwnerUpdateHandler;
}
