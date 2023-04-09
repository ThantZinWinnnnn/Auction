import React from "react";
import UserPage from "./ProfilePages/UserPage";

import Wrapper from "./Wrapper";
import { Route, Routes, useLocation } from "react-router-dom";
import UserProducts from "./ProfilePages/UserProducts";
import CreateProduct from "./components/CreateProduct/CreateProduct";

type Props = {};

const ProfileComponent = (props: Props) => {
  const location = useLocation();
  console.log("path",location.pathname)
  return (
    <>
      <Wrapper>
         {location.pathname === '/user/profile' && <UserPage/>}
         {location.pathname === '/user/userProducts' && <UserProducts/>}
         {location.pathname === '/user/create' && <CreateProduct/>}
          
      </Wrapper>  
    </>
  );
};

export default ProfileComponent;
