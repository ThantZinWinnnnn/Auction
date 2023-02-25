import { Routes,Route } from "react-router-dom"
import ProdudctDetail from "./components/product/ProdudctDetail"
import CategoryOverview from "./Pages/CategoryOverview"
import HomePage from "./Pages/HomePage"


function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/detail/:name" element={<ProdudctDetail/>}/>
      <Route path="/detailHome" element={<CategoryOverview/>}/>
    </Routes>
  )
}

export default App
