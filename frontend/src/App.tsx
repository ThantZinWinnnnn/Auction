import { Routes,Route } from "react-router-dom"
import DetailNavbar from "./components/DetailPageComponent/DetailNavbar"
import ProdudctDetail from "./components/product/ProdudctDetail"
import HomePage from "./Pages/HomePage"


function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/detail/:name" element={<ProdudctDetail/>}/>
      <Route path="/detailHome" element={<DetailNavbar/>}/>
    </Routes>
  )
}

export default App
