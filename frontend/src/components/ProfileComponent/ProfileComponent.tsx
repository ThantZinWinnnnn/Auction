import React from "react";
import UserPage from "./ProfilePages/UserPage";

import Wrapper from "./Wrapper";
import { Route, Routes, useLocation } from "react-router-dom";
import UserProducts from "./ProfilePages/UserProducts";

type Props = {};

const ProfileComponent = (props: Props) => {
  const location = useLocation();
  console.log("path",location.pathname)
  return (
    <>
      <Wrapper>
         {location.pathname === '/profile' && <UserPage/>}
         {location.pathname === '/userProducts' && <UserProducts/>}
          
      </Wrapper>  
    </>
  );
};

export default ProfileComponent;
