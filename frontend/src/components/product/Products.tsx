import { Box, Button, Typography } from "@mui/material";
import { ResponseProduct } from "../Utils/apiTypes/apiTypes";
import Product from "./Product";
import BidButton from "../BiddingComponent/Components/BidButton";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const productContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      type:"spring",
      ease: "easeInOut",
    },
  },
};



const Products: React.FC<prodcutsProps> = ({ products, loading }) => {
  const navigate = useNavigate();
  if (products.length == 0) {
    return (
      <Box
        width={"100%"}
        height={"50vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        gap={6}
      >
        <Typography
          variant="h4"
          fontWeight={"bold"}
          color={"warning.dark"}
          textAlign={"center"}
        >
          No Product Found Related From Searching
        </Typography>
        <Button
          disableElevation
          disableRipple
          onClick={() => navigate(-1)}
          sx={{
            textTransform: "none",
            bgcolor: "warning.dark",
            width: {
              xs: "40%",
              sm: "20%",
              xl: "14%",
            },
            "&:hover": { bgcolor: "warning.main" },
            p: {
              sm: 0.6,
              md: 0.8,
              lg: 1,
            },
            color: "white",
          }}
          variant="contained"
        >
          {" "}
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        height={"100%"}
        gap={4}
        component={motion.div} 
        initial="hidden"
        animate="visible"
        variants={productContainer}
      >
        {products?.map((product) => (
          <AnimatePresence>
            <Product
              
              product={product}
              key={`${product?.id}`}
              loading={loading}
            />
          </AnimatePresence>
        ))}
      </Box>
    </>
  );
};

export default Products;

interface prodcutsProps {
  products: Array<ResponseProduct>;
  loading?: boolean;
}
