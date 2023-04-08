import { Routes, Route } from "react-router-dom";
import ProdudctDetail from "./components/product/ProdudctDetail";
import CategoryOverview from "./Pages/CategoryOverview";
import HomePage from "./Pages/HomePage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Authenticate from "./components/AuthenticatPage/Authenticate";
import BidProductPage from "./Pages/BidProductPage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:name" element={<ProdudctDetail />} />
        <Route path="/auction/:electronic" element={<CategoryOverview />} />
        <Route path="/login" element={<Authenticate />} />
        <Route path="/bidProduct" element={<BidProductPage />} />
        <Route path="/:usedetail" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
