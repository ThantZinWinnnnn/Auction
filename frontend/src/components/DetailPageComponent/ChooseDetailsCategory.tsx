import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { shopCategories } from "../../data/DummyData";

const ChooseDetailsCategory = () => {
	return (
		<Box width={"90%"} mx="auto" marginBottom={30} mt={20}>
			<Typography variant="h6" component={"div"} fontWeight="bold">
				Shop By Category
			</Typography>
			<Box display={"flex"} gap={4} width="100%">
				{shopCategories.map((category) => (
					<Box
						textAlign={"center"}
						sx={{
							height: {
								xs: "400px",
								sm: "300px",
								md: "500px",
							},
							color: "white",
							width: "100%",
							display: "flex",
							justifyContent: "flex-end",
							flexDirection: "column",
							paddingBottom: "50px",
							backgroundImage: `url(${category.url})`,
							backgroundPosition: "50% 50%",
							backgroundSize: "cover",
							backgroundAttachment: "scroll",
							boxSizing: "border-box",
							mt: 3,
						}}
					>
						<Typography variant="h4" fontWeight={"bold"}>
							{category.name}
						</Typography>
						<Link to={`${category.name}`}>
							<Button
								color="warning"
								variant="contained"
								sx={{
									textTransform: "none",
									borderRadius: 10,
									width: "24%",
									mx: "auto",
									fontWeight: "medium",
									fontSize: 16,
									mt: 3,
									py: "10px",
									"&:hover": {
										backgroundColor: "#102343",
									},
								}}
							>
								Discover
							</Button>
						</Link>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default ChooseDetailsCategory;
