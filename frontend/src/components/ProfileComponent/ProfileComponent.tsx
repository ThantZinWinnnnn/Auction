import React from "react";
import UserPage from "./ProfilePages/UserPage";

import Wrapper from "./Wrapper";
import { Route, Routes, useLocation } from "react-router-dom";

import CreateProduct from "./components/CreateProduct/CreateProduct";
import UserSellProductsPage from "./ProfilePages/UserSellProductsPage";
import WinLotProductPage from "./ProfilePages/WinLotProductPage";
import LostLotProductPage from "./ProfilePages/LostLotProductPage";


type Props = {};

const ProfileComponent = (props: Props) => {
  const location = useLocation();
  console.log("path",location.pathname)
  return (
    <>
      <Wrapper>
         {location.pathname === '/user/profile' && <UserPage/>}
         {location.pathname === '/user/sellProducts' && <UserSellProductsPage/>}
         {location.pathname === '/user/create' && <CreateProduct/>}
         {location.pathname === '/user/winProducts' && <WinLotProductPage/>}
         {location.pathname === '/user/lostProducts' && <LostLotProductPage/>}
          
      </Wrapper>  
    </>
  );
};

export default ProfileComponent;
