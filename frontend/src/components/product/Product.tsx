import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
		<Box sx={{width:"70%"}}>
			<Box>
				<Link to={'/detail'}>
					<img
						src="https://portal-images.azureedge.net/auctions-2023/wi415169/images/27d95c96-e885-4da2-9521-fb82562ac93e.jpeg?w=250"
						alt="categories image"
					/>
				</Link>
			</Box>
			<Typography component={"div"}>Thant Zin Win</Typography>
			<Box>
				{/*dynamic routes */}
				<Link to={"/detail"}>
					<Typography variant="h4" component={"div"}>
						No Reserve Pallets of Customer Returns I Small Domestic Appliances,
						Fashion, Toys & Furniture - Sourced from a Major UK Retailer
					</Typography>
				</Link>
				<Typography variant="body2">
					All pallets are delivery only.Standard pallets £70+VAT,oversized
					pallets £140+VAT to the UK exc Highlands,Islands&South-West which are
					a higher rate
				</Typography>
				<Typography variant="h6" component={"h5"}>
					Auction date
				</Typography>
			</Box>
			<Box>
				<Link to={"/detail"}>
					<Button>View Catalog</Button>
				</Link>
			</Box>
		</Box>
	);
};

export default Product;
