import { Box, Container } from "@mui/material";
import Navbar from "../components/Navbar";
import Product from "../components/product/Product";
import SidebarLists from "../components/SidebarLists";

const HomePage = () => {
	return (
		<>
			<Navbar />
			<Container fixed>
				<Box sx={{ display: "flex", gap: "1%", paddingTop: "2%" }}>
					<SidebarLists />
					<Product />
				</Box>
			</Container>
		</>
	);
};

export default HomePage;
