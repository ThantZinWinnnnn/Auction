import {
  Box,
  CardContent,
  Fab,
  Modal,
  SelectChangeEvent,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { grey } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import ProductInfo from "../../CreateProduct/ProductInfo";
import {
  UserProductsResponse,
  finalUpdateProduct,
} from "../../../../Utils/apiTypes/apiTypes";
import DetailProductModal from "./DetailProductModal";
import BidButton from "../../../../BiddingComponent/Components/BidButton";
import MemoizedDatePicker from "./UpdateDatePicker";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { productAPI } from "../../../../Utils/endpoins/axios";
import toast, { Toaster } from "react-hot-toast";
import { AxiosError } from "axios";
import moment from "moment";
import dayjs, { Dayjs } from "dayjs";

const notify = ({ text, bgC }: { text: string; bgC: string }) =>
  toast.success(`${text}`, {
    icon: "👏",
    style: {
      borderRadius: "10px",
      background: `${bgC}`,
      color: "#fff",
    },
  });

const successNoti = (text: string) => toast.success(`${text}`);

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs:"90%",
    sm:580
  },
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 1,
  borderRadius: "10px",
  overflow: "hidden",
};

const editColor = grey[300];

const HoverCardComponent: React.FC<HoverCardProps> = ({ p ,showEdit}) => {
  const queryClient = useQueryClient();
  const [editModal, setEditModal] = useState(false);
  const [price, setPrice] = useState(p?.price);
  const [currentPrice, setCurrentPrice] = useState(p?.currentBidPrice);
  const [category, setCategory] = useState(p?.category?.name);
  const [subCategory, setSubCategory] = useState(p?.subCategory?.name);
  const [date, setDate] = useState<Dayjs | null>(
    dayjs(`${moment(p?.updatedAt).format("YYYY-MM-DD")}`)
  );

  const [startDate, setStartDate] = useState<Dayjs | null>(
    dayjs(`${moment(p?.createdAt).format("YYYY-MM-DD")}`)
  );

  console.log("first",startDate,"api",p?.createdAt)

  const theme = useTheme();
  const belowLg = useMediaQuery(theme.breakpoints.down("lg"));
  const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const Mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [errorMessage, setErrorMessage] = useState("");
  const errorNoti = () => toast.error(`${errorMessage}`);

  const { isLoading: deleting, mutate: deleteProduct } = useMutation(
    productAPI.deleteProduct,
    {
      onSuccess: () => {
        successNoti("Product Deleted Successfully");
        handleShowModal();
        setTimeout(
          () => queryClient.invalidateQueries(["userSellProducts"]),
          1500
        );
      },
      onError: (error) => {
        const errorMessage = error as AxiosError;
        setErrorMessage(errorMessage?.response?.data?.message);
        errorNoti();
      },
    }
  );

  const { isLoading: updatingProduct, mutate: updateFinalProduct } =
    useMutation(productAPI.updateProduct, {
      onSuccess: () => {
        successNoti("Product Updated Successfully");
        handleShowModal();
        queryClient.invalidateQueries(["detailProduct","allProducts"])
        //  setTimeout(
        //   () => queryClient.invalidateQueries(["userSellProducts"]),
        //   1500
        // );
      },
      onError: (error) => {
        const errorMessage = error as AxiosError;
        setErrorMessage(errorMessage?.response?.data?.message);
        errorNoti();
      },
    });

  const deleteProductHandler = useCallback(() => {
    deleteProduct(p?.id);
  }, [p?.id]);

  const handleShowModal = useCallback(() => {
    setEditModal((p) => !p);
  }, [editModal]);

  const updateObj = {
    price,
    currentBidPrice: Number(currentPrice),
    category,
    subCategory,
    date,
    startDate,
  };

  const priceHandler = useCallback(
    (event: SelectChangeEvent) => {
      setCategory(event.target.value as string);
    },
    [price]
  );
  const currentPriceHandler = useCallback(
    (event: SelectChangeEvent) => {
      setCategory(event.target.value as string);
    },
    [currentPrice]
  );
  const categroyHandler = useCallback(
    (event: SelectChangeEvent) => {
      setCategory(event.target.value as string);
    },
    [category]
  );
  const subCategoryHandler = useCallback(
    (event: SelectChangeEvent) => {
      setCategory(event.target.value as string);
    },
    [subCategory]
  );

  const startDateCheck =
    price === p?.price &&
    currentPrice === p?.currentBidPrice &&
    category === p?.category?.name &&
    subCategory === p?.subCategory?.name &&
    moment(date?.$d).isSame(
      dayjs(`${moment(p?.updatedAt).format("YYYY-MM-DD")}`)?.$d
    );

  const updateHandler = useCallback(() => {
    const hasCurrentOwner = Boolean(p?.currentOwnerName);
    if (
      hasCurrentOwner
        ? startDateCheck
        : startDateCheck &&
          moment(startDate?.$d).isSame(
            dayjs(`${moment(p?.updatedAt).format("YYYY-MM-DD")}`)?.$d
          )
    ) {
      successNoti("Nothing to update");
      handleShowModal();
    } else {
      const finalData: finalUpdateProduct = {
        price,
        currentBidPrice: Number(currentPrice),
        category,
        subCategory,
        date: moment(date?.$d).toISOString(),
        startDate: moment(startDate?.$d).toISOString(),
        productId: p?.id,
      };

       updateFinalProduct(finalData);

      console.log(
        "price",
        price,
        "curP",
        currentPrice,
        "cat",
        category,
        "sub",
        subCategory,
        "date",
        moment(date?.$d).toISOString(),
        "start",
        moment(startDate?.$d).toISOString(),
      );
    }
  }, [price, currentPrice, category, subCategory, date]);

  const handlerObj = {
    priceHandler: priceHandler,
    currentPriceHandler: currentPriceHandler,
    categoryHandler: categroyHandler,
    subCategoryHandler: subCategoryHandler,
    dateHandler: (newValue: React.SetStateAction<Dayjs | null>) =>
      setDate(newValue),
    startDateHandler: (newValue: React.SetStateAction<Dayjs | null>) =>
      setStartDate(newValue),
    finalUpdateHandler: updateHandler,
  };

  return (
    <>
      <Box component={"div"}>
        <Typography
          component={"div"}
          variant={Mobile ? "body1" : belowLg ? "caption" : "body2"}
          color={"text.secondary"}
          sx={{
            mb: 3,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {p?.title}
        </Typography>

        <ProductInfo name="Your Price" price={+p?.price} />
        {p?.currentBidPrice ? (
          <ProductInfo name="Current Price" price={+p?.currentBidPrice} />
        ) : (
          <ProductInfo name="Current Price" price={0} />
        )}
        <ProductInfo name="Category" value={p?.category?.name} />
        {showEdit ? (
          <Box
          ml={"auto"}
          mr={{ xs: 0,sm:1.5 }}
          mt={{ xs: 1.5,sm:1.3 }}
          sx={{
            width: {
              xs:80,
              sm: 50,
            },
          }}
        >
          <BidButton
            ButtonText="Edit"
            padding={{ xs: 0.8 ,sm:0.5}}
            color="white"
            bgC="warning.dark"
            hoverC="warning.main"
            fontS={{ xs: 12 }}
            func={handleShowModal}
          />
        </Box>
        ):null}
        <Toaster position="top-center" reverseOrder={true} />
      </Box>

      <Modal
        keepMounted
        open={Boolean(editModal)}
        onClose={handleShowModal}
        aria-labelledby="edit-motal"
        aria-describedby="edit-modal-description"
      >
        <Box sx={style}>
          {editModal ? (
            <DetailProductModal
              updateHandlerObj={handlerObj}
              updateObj={updateObj}
              deleting={deleting}
              deleteHandler={deleteProductHandler}
              p={p}
              updating={updatingProduct}
            />
          ) : null}
        </Box>
      </Modal>
    </>
  );
};

export default HoverCardComponent;

interface HoverCardProps {
  p: UserProductsResponse;
  showEdit:boolean
}
