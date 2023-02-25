import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const BannerDetail = () => {
  return (
		<Box
			width={"100%"}
			display="flex"
			flexDirection={"column"}
			justifyContent={"center"}
			alignItems={"center"}
			textAlign={"center"}
            overflow='hidden'
			sx={{
				height: {
					sm: "600px",
				},
				backgroundImage: `url('https://uploads-ssl.webflow.com/61dc384cdd32214e08c06a78/6230a4b50eedd6edaa6890a3_Electronics-Hero-Image2.jpg')`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "50% 50%",
			}}
		>
			<Typography
				variant="h1"
				color="common.white"
				fontWeight={"bold"}
				width="940px"
				marginBottom={"4%"}
			>
				Online Electronics Auctions
			</Typography>
			<Box display={"flex"} gap={4}>
				<Button
					disableRipple
					disableFocusRipple
					disableElevation
					variant="contained"
					color="warning"
					sx={{
						textTransform: "none",
						borderRadius: 10,
						"&:hover": {
							backgroundColor: "#102343",
						},
					}}
				>
					Explore Auctions
				</Button>
				<Button
					disableRipple
					disableFocusRipple
					disableElevation
					variant="contained"
					color="warning"
					sx={{
						textTransform: "none",
						borderRadius: 10,
						px: 6,
						"&:hover": {
							backgroundColor: "#102343",
						},
					}}
				>
					Sign Up
				</Button>
			</Box>
		</Box>
	);
}

export default BannerDetail