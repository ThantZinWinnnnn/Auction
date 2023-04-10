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
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PrimaryCategories } from "../data/DummyData";

//to remove mb from sidebar

const SidebarLists = ({ margin }: any) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
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
      <Box
        bgcolor={""}
        width={isMobile ? "100%" : "18%"}
        marginTop={margin}
        marginBottom={isMobile ? 4 : 4}
        border={isMobile ? "none" : "1px solid rgba(34,36,38,.15)"}
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
              color: "black",
              marginBottom: 1,
              fontWeight: "bold",
              fontSize: {
                sm: 13,
              },
              "&.Mui-focused": {
                color: "black", // change to your desired active/focused color
              },
            }}
          >
            Category
          </FormLabel>
          <FormGroup sx={{ fontSize: 9 }}>
            {PrimaryCategories.map((item) => (
              <FormControlLabel
                control={
                  <Checkbox
                    size={isDesktop ? "medium" : "small"}
                    value={item.name}
                    key={`${item.id}`}
                    checked={category.includes(`${item.name}`)}
                    onChange={checkHandler}
                    name={`${item.name}`}
                    sx={{
                      color: "#DBDBDE",
                      "&.Mui-checked": {
                        color: "#EA4C89",
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
                    key={`${item.id}`}
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
