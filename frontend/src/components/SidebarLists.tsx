import {
	Box,
	Typography,
	Checkbox,
	FormControl,
	FormLabel,
	FormGroup,
	FormControlLabel,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PrimaryCategories } from "../data/DummyData";

const SidebarLists = () => {
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
			<Box bgcolor={""} sx={{ width: "22%" }}>
				<Typography sx={{ marginBottom: 2 }}>Filter by</Typography>
				<FormControl>
					<FormLabel
						component={"h5"}
						sx={{ color: "black", marginBottom: 1, fontWeight: "bold" }}
					>
						Categories
					</FormLabel>
					<FormGroup sx={{ paddingLeft: 1.5 ,fontSize:9}}>
						{PrimaryCategories.map((item) => (
							<FormControlLabel
								control={
									<Checkbox
										value={item.name}
										checked={category.includes(`${item.name}`)}
										onChange={checkHandler}
										name={`${item.name}`}
										disableRipple
									/>
								}
								label={<Typography variant="body2">{item.name}</Typography>}
							/>
						))}
					</FormGroup>
				</FormControl>
			</Box>
		</>
	);
};

export default SidebarLists;
