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
  Divider,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PrimaryCategories } from "../data/DummyData";
import { ThemeContext } from "./Utils/ThemeContext/ThemeContext";

//to remove mb from sidebar


interface sidebarProps{
  func:(event: React.ChangeEvent<HTMLInputElement>) => void,
  margin:number,
  checkValue:Array<string>
}

const SidebarLists:React.FC<sidebarProps> = ({margin,func,checkValue}) => {
  const { themeMode } = useContext(ThemeContext);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const light = themeMode === "light"
  // const [category, setCategory] = useState<Array<string>>([]);
  // console.log( category.length );
  // const checkHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const index = category.indexOf(event.target.value);
  //   if (index === -1) {
  //     setCategory([event.target.value]);
  //   } else {
  //     setCategory(
  //       category.filter((category) => category !== event.target.value)
  //     );
  //   }
  // };


  return (
    <>
      <Box
        bgcolor={""}
        width={isMobile ? "100%" : "18%"}
        marginTop={margin}
        marginBottom={isMobile ? 4 : 4}
        border={isMobile ? "none" : light ? "1px solid rgba(34,36,38,.15)" : "1px solid whitesmoke"}
        borderRadius={2}
        sx={{
          pl: {
            lg: 6,
            md: 4,
            sm: 3,
          },
          py: {
            lg: 2,
            sm: 2,
          },
          width: {
            xs: "100%",
            sm: "22%",
          },
          height: "",
          color:light ? "black" :"white"
        }}
      >
        {!isMobile && (
          <Typography sx={{ marginBottom: 2 }} fontWeight="bold">
            Filter by
          </Typography>
        )}
        <FormControl>
          <FormLabel
            component={"h5"}
            sx={{
              color: light ? "black" :"white",
              marginBottom: 1,
              fontWeight: "bold",
              fontSize: {
                sm: 13,
              },
              "&.Mui-focused": {
                color: light ? "black" : "white", // change to your desired active/focused color
              },
            }}
          >
            Category
          </FormLabel>
          <FormGroup sx={{ fontSize: 9 }}>
            {PrimaryCategories.map((item) => (
              <FormControlLabel
              key={`${item.id}`}
                control={
                  <Checkbox
                    size={isDesktop ? "medium" : "small"}
                    value={item.name}
              
                    checked={checkValue.includes(`${item.name}`)}
                    onChange={func}
                    name={`${item.name}`}
                    sx={{
                      color: "#DBDBDE",
                      "&.Mui-checked": {
                        color: light ? "#EA4C89" :"warning.dark",
                      },
                      height: {
                        xs: "3rem",
                        sm: "1.8rem",
                        md: "2.4rem",
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    fontWeight={"medium"}
                    sx={{
                      fontSize: {
                        xs: 14,
                        sm: 10,
                        md: 12,
                        lg: 14,
                      },
                    }}
                  >
                    {item.name}
                  </Typography>
                }
              />
            ))}
          </FormGroup>
        </FormControl>
        {/* <Divider sx={{mt: isMobile ? 5 : 0}}/> */}
      </Box>
    </>
  );
};

export default SidebarLists;
