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
import { UserProductsResponse } from "../../../../Utils/apiTypes/apiTypes";
import ProductInput from "./ProductInput";
import UpdateDatePicker from "./UpdateDatePicker";
import BidButton from "../../../../BiddingComponent/Components/BidButton";
import DeleteIcon from "@mui/icons-material/Delete";
import MemoizedDatePicker from "./UpdateDatePicker";
import moment from "moment";

const DatePickerComponent = React.lazy(() => import("./UpdateDatePicker"));

const DetailProductModal: React.FC<ProductProps> = ({ p }) => {
  const date = moment(p?.updatedAt).format("YYYY-MM-DD");
  console.log("dattttt", date);

  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box component={"section"}>
      <Box
        component={"div"}
        sx={{
          display: "flex",
          height: mediumScreen ? "400px" : "400px",
          gap: 1.3,
        }}
        width={"100%"}
      >
        <Box width={"50%"} overflow={"hidden"} component={"div"}>
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
          width={"50%"}
          sx={{
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              width: "1px",
            },
          }}
        >
          <Typography
            variant="subtitle1"
            fontWeight={"bold"}
            textAlign={"left"}
            sx={{
              mb: 1.8,
            }}
          >
            {p?.title}
          </Typography>
          <Box display={"flex"} flexDirection={"column"} gap={1}>
            <ProductInput
              p={p}
              title="Category"
              value={`${p?.category?.name}`}
            />
            <ProductInput p={p} title="Price" value={`${p?.price}`} />
            <ProductInput
              p={p}
              title="SubCategory"
              value={`${p?.subCategory?.name}`}
            />
            <ProductInput
              p={p}
              title="Price"
              value={`${p?.price}`}
              disable={true}
            />
            {/* <UpdateDatePicker/> */}
            <MemoizedDatePicker date={date} />
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
        <Tooltip placement="top" title={Boolean(p?.currentOwnerName) ? "Can't delete product.It has owner" : "Delete"}>
          <Box>
          <BidButton
            padding={{ xs: 0.8 }}
            ButtonText="Delete"
            fontS={{ xs: 12 }}
            bgC="error.dark"
            hoverC="error.main"
            color="white"
            func={() => {}}
            icon={<DeleteIcon />}
            disabled={Boolean(p?.currentOwnerName)}
          />
          </Box>
        </Tooltip>
        <BidButton
          padding={{ xs: 0.8 }}
          ButtonText="Update"
          fontS={{ xs: 12 }}
          bgC="warning.dark"
          hoverC="warning.main"
          color="white"
          func={() => {}}
        />
      </Box>
    </Box>
  );
};

export default DetailProductModal;

interface ProductProps {
  p: UserProductsResponse;
}
