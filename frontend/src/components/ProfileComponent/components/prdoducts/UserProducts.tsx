import { useQuery } from '@tanstack/react-query';
import { productAPI } from '../../../Utils/axios';
import { useLocation } from 'react-router-dom';
import Products from '../../../product/Products';

export default function UserProducts() {
    const location = useLocation();

    const {
        isLoading,
        data: userProducts,
        isError,
        error,
      } = useQuery({
        queryKey: ["products"],
        queryFn: productAPI.getProductsByUserId,
        refetchOnWindowFocus: false,
      });



      const products = userProducts?.data?.products?.sellerProducts;
      const winProducts = userProducts?.data?.products?.winLotProducts;
      const lostProducts = userProducts?.data?.products?.lostLotProducts;

      if (isLoading) return <p>Loading....</p>;

  return <Products products={location.pathname === "/user/products/sellProducts" ? products : location.pathname === "/user/products/winProducts" ? winProducts : lostProducts}/>
}
