import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
	return (
		<Box display={"flex"} sx={{ width: "74%", gap: "3%" }}>
			<Box sx={{ width: "30%" }}>
				<Box sx={{}}>
					<Link to={"/detail"}>
						<img
							width={"100%"}
							src="https://portal-images.azureedge.net/auctions-2023/wi415169/images/27d95c96-e885-4da2-9521-fb82562ac93e.jpeg?w=250"
							alt="categories image"
						/>
					</Link>
				</Box>
				<Typography component={"div"}>Thant Zin Win</Typography>
			</Box>

			<Box sx={{ width: "50%" }}>
				{/*dynamic routes */}
				<Link to={"/detail"}>
					<Typography
						color={"black"}
						fontWeight="bold"
						variant="subtitle2"
						component={"div"}
						sx={{ marginBottom: 2 }}
					>
						No Reserve Pallets of Customer Returns I Small Domestic Appliances,
						Fashion, Toys & Furniture - Sourced from a Major UK Retailer
					</Typography>
				</Link>
				<Typography
					variant="caption"
					color={"grey.600"}
					component="p"
					sx={{ mb: 2 }}
				>
					All pallets are delivery only.Standard pallets £70+VAT,oversized
					pallets £140+VAT to the UK exc Highlands,Islands&South-West which are
					a higher rate
				</Typography>
				<Typography variant="subtitle2" component={"h5"} fontWeight={"bold"}>
					Auction dates
				</Typography>
			</Box>
			<Box sx={{ width: "17%" }}>
				<Link to={"/detail"}>
					<Button fullWidth variant="contained" color="warning">
						<Typography fontSize={"12px"}>View Catalog</Typography>
					</Button>
				</Link>
			</Box>
		</Box>
	);
};

export default Product;
