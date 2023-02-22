import {
	Box,
	Typography,
	Checkbox,
	FormControl,
	FormLabel,
	FormGroup,
	FormControlLabel,
	useMediaQuery,
	useTheme,
	Divider
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PrimaryCategories } from "../data/DummyData";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";

const SidebarLists = () => {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const [category, setCategory] = useState<Array<string>>([]);
	console.log({ category });
	const checkHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const index = category.indexOf(event.target.value);
		if (index === -1) {
			setCategory([...category, event.target.value]);
		} else {
			setCategory(
				category.filter((category) => category !== event.target.value)
			);
		}
	};
	return (
		<>
			<Box bgcolor={"grey"} width={isMobile ? "100%" : "22%"}>
				<Typography sx={{ marginBottom: 2 }} fontWeight="bold">Filter by</Typography>
				<FormControl>
					<FormLabel
						component={"h5"}
						sx={{ color: "black", marginBottom: 1, fontWeight: "bold" ,fontSize:{
							sm:13
						}}}
					>
						Categories
					</FormLabel>
					<FormGroup sx={{ paddingLeft: 1.5 ,fontSize:9}}>
						{PrimaryCategories.map((item) => (
							<FormControlLabel
								control={
									<Checkbox
										size={isDesktop ? "medium" : 'small'} 
										value={item.name}
										checked={category.includes(`${item.name}`)}
										onChange={checkHandler}
										name={`${item.name}`}
										disableRipple
										color="default"
										icon={<RadioButtonUncheckedOutlinedIcon/>}
										checkedIcon={<CheckCircleRoundedIcon/>}
									/>
								}
								label={<Typography fontWeight={"bold"} sx={{fontSize:{
									sm:10,
									md:12
								}}}>{item.name}</Typography>}
							/>
						))}
					</FormGroup>
				</FormControl>
				<Divider/>
			</Box>
		</>
	);
};

export default SidebarLists;
