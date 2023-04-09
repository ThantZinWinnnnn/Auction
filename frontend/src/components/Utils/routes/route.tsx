import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "../../middleware/ProtectedRoute";
import HomePage from "../../../Pages/HomePage";
import ProdudctDetail from "../../product/ProdudctDetail";
import BidProductPage from "../../../Pages/BidProductPage";
import CategoryOverview from "../../../Pages/CategoryOverview";
import Authenticate from "../../AuthenticatPage/Authenticate";
import ProfileComponent from "../../ProfileComponent/ProfileComponent";

const router = createBrowserRouter([
  {
    path:"/auth",
    element:<Authenticate/>
  },
    {
      path:"/",
      element:<ProtectedRoute><HomePage/></ProtectedRoute>
    },
    {
      path:"/products/:productId",
      element:<ProtectedRoute><ProdudctDetail/></ProtectedRoute>
    },
    {
      path:"/products/auction/bid/:productId",
      element:<ProtectedRoute><BidProductPage/></ProtectedRoute>
    }, {
      path:"/auction/:electronic",
      element:<ProtectedRoute><CategoryOverview/></ProtectedRoute>
    },
    {
      path:"/user/:userInfo",
      element:<ProtectedRoute><ProfileComponent/></ProtectedRoute>
    }
  ]);


export default router;