import React, { useState } from "react";

import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  Box,
  Typography,
} from "@mui/material";
import { PrimaryCategories } from "../../../../data/DummyData";

interface categoryProps{
    value:string,
    handler : (event: SelectChangeEvent)=> void
}

const CategoryLists:React.FC<categoryProps> = ({value,handler}) => {
  const [category, setCategory] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };
  return (
    <Box>
      <Typography
        fontWeight={"bold"}
        component={"h6"}
        sx={{
          mb: {
            xs:1
          },
          fontSize:{
            sm:14,
            xs:13
          }
        }}
      >
        Product Category
      </Typography>
      <FormControl
        fullWidth
      >
        <InputLabel id="category-dropdown">Category</InputLabel>
        <Select
          labelId="category-dropdown"
          id="category-lists"
          label="Category"
          value={value}
          onChange={handler}
        >
          {PrimaryCategories.map((cat) => (
            <MenuItem
              key={`${cat.id}`}
              value={`${cat.name}`}
              disableRipple
              sx={{
                p: 2,
              }}
            >
              {cat.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CategoryLists;
