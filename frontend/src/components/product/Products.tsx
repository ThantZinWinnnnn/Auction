import { Box } from "@mui/material";
import { ResponseProduct } from "../Utils/apiTypes/apiTypes";
import Product from "./Product";

interface prodcutsProps {
  products: Array<ResponseProduct>;
  loading?:boolean
}

const Products: React.FC<prodcutsProps> = ({ products,loading }) => {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} width={"100%"} gap={4}>
        {products?.map((product) => (
          <Product product={product} key={`${product?.id}`} loading={loading} />
        ))}
      </Box>
    </>
  );
};

export default Products;
