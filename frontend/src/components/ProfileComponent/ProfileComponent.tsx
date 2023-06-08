import  { useContext } from "react";
import UserPage from "./ProfilePages/UserPage";

import Wrapper from "./Wrapper";
import { useLocation, useParams } from "react-router-dom";

import CreateProduct from "./components/CreateProduct/CreateProduct";
import UserSellProductsPage from "./ProfilePages/UserSellProductsPage";
import WinLotProductPage from "./ProfilePages/WinLotProductPage";
import LostLotProductPage from "./ProfilePages/LostLotProductPage";
import { Title } from "../Utils/helmet/Title";
import { ThemeContext } from "../Utils/ThemeContext/ThemeContext";
import WatchListProductsPage from "./ProfilePages/WatchListProductsPage";


type Props = {};

const ProfileComponent = (props: Props) => {
  const {userInfo} = useParams();
  console.log("info2",userInfo)
  const { themeMode } = useContext(ThemeContext);
  const light = themeMode === "light"
  const location = useLocation();
  console.log("path",location.pathname)
  const content = location.pathname === '/user/profile' ? "Profile Page" : location.pathname === '/user/sellProducts' ? "UserProducts Page" : location.pathname === '/user/create' ? "User Create Product Page" : location.pathname === '/user/winProducts' ? "User Win Products Page" : "User Lost Products Page"
  return (
    <>
      <Title title={content}/>
      <Wrapper>
         {location.pathname === '/user/profile' && <UserPage light={light}/>}
         {location.pathname === '/user/sellProducts' && <UserSellProductsPage/>}
         {location.pathname === '/user/create' && <CreateProduct light={light} />}
         {location.pathname === '/user/winProducts' && <WinLotProductPage/>}
         {location.pathname === '/user/lostProducts' && <LostLotProductPage/>}
         {location.pathname === '/user/watchList' && <WatchListProductsPage/>}
          
      </Wrapper>  
    </>
  );
};

export default ProfileComponent;
