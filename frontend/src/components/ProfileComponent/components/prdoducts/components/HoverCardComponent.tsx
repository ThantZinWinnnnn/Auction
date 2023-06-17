import {
  Box,
  CardContent,
  Fab,
  Modal,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { grey } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import ProductInfo from "../../CreateProduct/ProductInfo";
import { UserProductsResponse } from "../../../../Utils/apiTypes/apiTypes";
import DetailProductModal from "./DetailProductModal";
import BidButton from "../../../../BiddingComponent/Components/BidButton";
import MemoizedDatePicker from "./UpdateDatePicker";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 1,
  borderRadius: "10px",
  overflow: "hidden",
};

const editColor = grey[300];

const HoverCardComponent: React.FC<HoverCardProps> = ({ p }) => {
  const [editModal, setEditModal] = useState(false);
  const handleShowModal = useCallback(() => {
    setEditModal((p) => !p);
  }, [editModal]);

  const theme = useTheme();
  const belowLg = useMediaQuery(theme.breakpoints.down("lg"));
  const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const Mobile = useMediaQuery(theme.breakpoints.down("sm"));
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
        <Box
          ml={"auto"}
          mr={{ xs: 3 }}
          mt={{ xs: 1 }}
          sx={{
            width: {
              xs: 40,
            },
          }}
        >
          <BidButton
            ButtonText="Edit"
            padding={{ xs: 0.5 }}
            color="white"
            bgC="warning.dark"
            hoverC="warning.main"
            fontS={{ xs: 12 }}
            func={handleShowModal}
          />
        </Box>
      </Box>
      <Modal
        keepMounted
        open={Boolean(editModal)}
        onClose={handleShowModal}
        aria-labelledby="edit-motal"
        aria-describedby="edit-modal-description"
      >
        <Box sx={style}>
          {editModal ? <DetailProductModal p={p} /> : null}
        </Box>
      </Modal>
    </>
  );
};

export default HoverCardComponent;

interface HoverCardProps {
  p: UserProductsResponse;
}
