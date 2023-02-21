import { Box ,Container} from '@mui/material'
import Navbar from '../components/Navbar';
import Product from '../components/product/Product';
import ProdudctDetail from '../components/product/ProdudctDetail'
import SidebarLists from '../components/SidebarLists'

const HomePage = () => {
  return (
		<>
    <Navbar/>
			<Container fixed>
				<Box sx={{ display: "flex" ,gap:"5%",paddingTop:"2%"}}>
					<SidebarLists />
					<Product/>
				</Box>
			</Container>
		</>
	);
}

export default HomePage