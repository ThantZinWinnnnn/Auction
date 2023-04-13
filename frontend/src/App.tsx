import { Routes, Route,createBrowserRouter, RouterProvider } from "react-router-dom";
import ProdudctDetail from "./components/product/ProdudctDetail";
import CategoryOverview from "./Pages/CategoryOverview";
import HomePage from "./Pages/HomePage";
import Authenticate from "./components/AuthenticatPage/Authenticate";
import BidProductPage from "./Pages/BidProductPage";
import { ProtectedRoute } from "./components/middleware/ProtectedRoute";
import ProfileComponent from "./components/ProfileComponent/ProfileComponent";

/*Routes */
import router from "./components/Utils/routes/route";



function App() {
  return (
    <main>
      <RouterProvider router={router}/>
    </main>
  );
}

export default App;
