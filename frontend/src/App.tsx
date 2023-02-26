import { Routes,Route } from "react-router-dom"
import ProdudctDetail from "./components/product/ProdudctDetail"
import CategoryOverview from "./Pages/CategoryOverview"
import HomePage from "./Pages/HomePage"
import { createTheme,ThemeProvider } from "@mui/material"


const theme = createTheme({
	typography: {
		fontFamily: "'Oswald', sans-serif",
	},
});

function App() {

  return (
		<ThemeProvider theme={theme}>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/detail/:name" element={<ProdudctDetail />} />
				<Route path="/detailHome" element={<CategoryOverview />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App
