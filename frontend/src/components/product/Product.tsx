import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
	return (
		<Box display={"flex"} sx={{ width: "74%", gap: "3%" }}>
			<Box sx={{ width: "30%" }}>
				<Box sx={{mb:1,paddingX:3}} overflow='hidden'>
					<Link to={"/detail"}>
						<img
							width={"100%"}
							src="https://portal-images.azureedge.net/auctions-2023/wi415169/images/27d95c96-e885-4da2-9521-fb82562ac93e.jpeg?w=250"
							alt="categories image"
						/>
					</Link>
				</Box>
				<Typography variant="caption" component={"div"} textAlign='center'>Thant Zin Win</Typography>
			</Box>

			<Box sx={{ width: "50%" }}>
				{/*dynamic routes */}
				<Link to={"/detail"}>
					<Typography
						color={"black"}
						fontWeight="bold"
						variant="subtitle2"
						component={"div"}
						sx={{ marginBottom: 3 ,
							"&:hover":{
								color:"primary.light"
							}
						}}
					>
						No Reserve Pallets of Customer Returns I Small Domestic Appliances,
						Fashion, Toys & Furniture - Sourced from a Major UK Retailer
					</Typography>
				</Link>
				<Typography
					variant="caption"
					color={"grey.600"}
					component="p"
					sx={{ mb: 3 }}
				>
					All pallets are delivery only.Standard pallets £70+VAT,oversized
					pallets £140+VAT to the UK exc Highlands,Islands&South-West which are
					a higher rate
				</Typography>
				<Typography variant="subtitle2" component={"h5"} fontWeight={"bold"} sx={{mb:1.8}}>
					Auction dates
				</Typography>
				<Typography variant="caption" component={'h6'} marginBottom={"0.5rem"}>Starts: Feb 08, 2023 12:00 PM GMT</Typography>
				<Typography variant="caption" component={'h6'}>Ends from: Feb 21, 2023 01:00 PM GMT</Typography>
			</Box>
			<Box sx={{ width: "17%" }}>
				<Link to={"/detail"}>
					<Button
						fullWidth
						variant="contained"
						color="warning"
						disableElevation
					>
						<Typography fontSize={"12px"}>View Catalog</Typography>
					</Button>
				</Link>
			</Box>
		</Box>
	);
};

export default Product;
