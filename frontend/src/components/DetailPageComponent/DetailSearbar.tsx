import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  OutlinedInput,
  Box,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
interface themeProps{
  light : boolean
}

const   DetailSearchbar:React.FC<themeProps> = ({light}) => {
  const navigate = useNavigate();
  const [values, setValues] = useState<string | null>(null || "");
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const searchHandler = () => {
    //api call
    console.log("values", values);
    navigate(`/query/product/${values}`)
    setValues('')
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
              border:light ? "1px solid rgba(34,36,38,.15)" : "1px solid white"
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border:light ? "1px solid rgba(34,36,38,.15)" : "1px solid white"
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
            bgcolor: light ? "warning.main" : "warning.dark",
            width: {
              xs: 10,
              sm: 100,
            },
            height: {
              xs: "40px",
              sm: "35px",
            },
            "&:hover": {
              bgcolor: light ? "warning.dark" : "warning.main",
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
