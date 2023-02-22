import Container from "@mui/material/Container";
import { Box, Divider, Typography,Button } from "@mui/material";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import FeaturedLots from "./FeaturedLots";

const ProdudctDetail = () => {
	return (
		<>
			<Navbar />
			<Container fixed sx={{ mt: 2 }}>
				<Box sx={{ display: "flex", gap: "2%", mt: 2 }}>
					<Box sx={{ width: "22%" }}>
						<Box sx={{ mb: 1, paddingX: 3 }} overflow="hidden">
							<Link to={"/detail"}>
								<img
									width={"100%"}
									src="https://portal-images.azureedge.net/auctions-2023/wi415169/images/27d95c96-e885-4da2-9521-fb82562ac93e.jpeg?w=250"
									alt="categories image"
								/>
							</Link>
						</Box>
						<Typography variant="caption" component={"div"} textAlign="center">
							Thant Zin Win
						</Typography>
					</Box>

					<Box sx={{ width: "58%" }}>
						<Link to={"/detail"}>
							<Typography
								color={"black"}
								fontWeight="bold"
								variant="h6"
								component={"div"}
								sx={{
									marginBottom: 1.5,
									"&:hover": {
										color: "primary.light",
									},
								}}
							>
								No Reserve Pallets of Customer Returns I Small Domestic
								Appliances, Fashion, Toys & Furniture - Sourced from a Major UK
								Retailer
							</Typography>
						</Link>
						<Typography
							variant="subtitle2"
							component={"h5"}
							fontWeight={"bold"}
							sx={{ mb: 1 }}
						>
							Auction dates
						</Typography>
						<Typography
							variant="caption"
							component={"h6"}
							marginBottom={"0.1rem"}
						>
							Starts: Feb 08, 2023 12:00 PM GMT
						</Typography>
						<Typography variant="caption" component={"h6"}>
							Ends from: Feb 21, 2023 01:00 PM GMT
						</Typography>
						<Box display={"flex"} sx={{ gap: "30%", mt: 3, mb: 1 }}>
							<Typography
								variant="subtitle2"
								component={"h5"}
								fontWeight={"bold"}
							>
								Auction currency
							</Typography>
							<Typography variant="caption" component={"h6"}>
								MMK
							</Typography>
						</Box>
						<Divider />
						<Box display={"flex"} sx={{ gap: "30%", mt: 3, mb: 1 }}>
							<Typography
								variant="subtitle2"
								component={"h5"}
								fontWeight={"bold"}
							>
								Buyer's premium
							</Typography>
							<Typography variant="caption" component={"h6"}>
								25 %
							</Typography>
						</Box>
						<Divider />
						<Box display={"flex"} sx={{ gap: "24%", mt: 3, mb: 1 }}>
							<Typography
								variant="subtitle2"
								component={"h5"}
								fontWeight={"bold"}
							>
								Accepted for payment
							</Typography>
							<Box width={"75px"} height="30px" overflow={"hidden"} display="flex" gap={2}>
								<img
									width={"50%"}
									src="https://th.bing.com/th?q=Kbz+Pay+Logo.png&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=MM&setlang=en&adlt=moderate&t=1&mw=247"
                  alt="kbz pay logo"
								/>
								<img width={"50%"} src="https://th.bing.com/th/id/OIP.DKCLUwFCa1rywQLs-HGpGwAAAA?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="wavemoney logo" />
							</Box>
						</Box>
					</Box>

					<Box sx={{ width: "16%" }}>
						<Link to={"/register"}>
              <Button fullWidth variant="contained" color="warning" disableElevation>Register to bid</Button>
            </Link>
					</Box>
				</Box>
				<Divider />

        <FeaturedLots/>
			</Container>
		</>
	);
};

export default ProdudctDetail;
