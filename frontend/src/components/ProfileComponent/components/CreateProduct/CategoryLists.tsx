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

interface category {
  id: Number;
  name: String;
}

interface categoryProps {
  text: string;
  label:string;
  value: string;
  handler: (event: SelectChangeEvent) => void;
  categories: Array<category>;
}

const CategoryLists: React.FC<categoryProps> = ({
  text,
  label,
  value,
  handler,
  categories,
}) => {
  const [category, setCategory] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };
  return (
    <Box sx={{
      mb:{
        xs:2,
        md:2.3,
        lg:1.9,
        xl:2
      }
    }}>
      <Typography
        fontWeight={"bold"}
        component={"h6"}
        sx={{
          mb: {
            xs: 1,
            lg:2
          },
          fontSize: {
            sm: 14,
            xs: 13,
          },
        }}
      >
        {text}
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="category-dropdown">{label}</InputLabel>
        <Select
          labelId="category-dropdown"
          id="category-lists"
          label={label}
          value={value}
          onChange={handler}
        >
          {categories.map((cat) => (
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
