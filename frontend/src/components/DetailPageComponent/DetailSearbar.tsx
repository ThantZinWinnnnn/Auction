import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  OutlinedInput,
  Box,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const   DetailSearchbar = () => {
  const [values, setValues] = useState<string | null>(null);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const searchHandler = () => {
    //api call
    console.log("values", values);
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: {
          xs: "90%",
          sm: "60%",
          md: "40%",
          xl: "50%",
        },
        mx: {
          md: 2,
        },
        mb: {
          xs: 4,
          sm: 0,
        },
      }}
    >
      <Box
        width={"100%"}
        paddingX={isDesktop ? "0" : 3}
        bgcolor="inherit"
        sx={{
          display: "flex",
          mb: {
            sm: 1,
            md: 0,
          },
          gap: {
            xs: "1.5rem",
            sm: "1.7rem",
            md: "1rem",
          },
          position: "relative",
        }}
      >
        <OutlinedInput
          value={values}
          sx={{
            height: {
              xs: "40px",
              sm: "35px",
            },
            width: {
              xs: "100%",
              sm: "100%",
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border:"1px solid rgba(34,36,38,.15)"
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border:"1px solid rgba(34,36,38,.15)"
            },
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setValues(e.target.value);
          }}
          placeholder="Search..."
        />
        <Button
          variant="contained"
          disableElevation
          disableRipple
          sx={{
            color: "white",
            fontSize: {
              sm: 12,
            },
            fontWeight: "bold",
            bgcolor: "warning.main",
            width: {
              xs: 10,
              sm: 100,
            },
            height: {
              xs: "40px",
              sm: "35px",
            },
            "&:hover": {
              bgcolor: "warning.light",
            },
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            position: "absolute",
            right: 0,
          }}
          onClick={searchHandler}
        >
          {isDesktop ? "Search" : <SearchOutlinedIcon fontSize="medium" />}
        </Button>
      </Box>
    </Box>
  );
};

export default DetailSearchbar;
