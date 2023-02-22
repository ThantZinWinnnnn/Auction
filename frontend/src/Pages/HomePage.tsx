import { Box, Container,useMediaQuery,useTheme} from "@mui/material";
import Navbar from "../components/Navbar";
import Product from "../components/product/Product";
import SidebarLists from "../components/SidebarLists";

const HomePage = () => {
	const theme = useTheme()
	const is4kScreen = useMediaQuery(theme.breakpoints.up('xl'))

	return (
		<>
			<Navbar />
			<Container maxWidth= {is4kScreen ? 'xl' : 'lg'} >
				<Box sx={{ display: "flex", gap: "1%", paddingTop: "2%" }}>
					<SidebarLists />
					<Product />
				</Box>
			</Container>
		</>
	);
};

export default HomePage;
