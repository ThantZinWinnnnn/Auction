import { Routes,Route } from "react-router-dom"
import ProdudctDetail from "./components/product/ProdudctDetail"
import HomePage from "./Pages/HomePage"


function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/detail/:name" element={<ProdudctDetail/>}/>
    </Routes>
  )
}

export default App
