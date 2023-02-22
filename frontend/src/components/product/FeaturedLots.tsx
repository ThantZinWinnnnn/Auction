import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { relatedItems } from "../../data/DummyData";

const FeaturedLots = () => {
	return (
		<>
			{/* To Change Card Component with Box */}
			<Typography
				variant="subtitle1"
				fontWeight={"bold"}
				component={"div"}
				my={3}
			>
				Featured Lots
			</Typography>
			<Box
				display="grid"
				gridTemplateColumns="repeat(5, 1fr)"
				gap={1.5}
				mb={5}
				height={300}
			>
				{relatedItems.map((item) => (
					<Paper
						key={`${item.id}`}
						sx={{ gridColumn: "span 1", minHeight: "100%" }}
					>
						<Box width={"100%"} overflow="hidden" height={"50%"} mb={4}>
							<img width={"100%"} src={`${item.url}`} alt={`${item.name}`} />
						</Box>
						<Box px={3}>
							<Typography
								variant="body2"
								component={"div"}
								mb={1.5}
								color="primary.light"
							>
								{item.info}
							</Typography>
							<Typography variant="caption" component={"div"}>
								{item.currentlot}
							</Typography>
						</Box>
					</Paper>
				))}
			</Box>
		</>
	);
};

export default FeaturedLots;
