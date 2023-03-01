import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { shopCategories } from "../../data/DummyData";

const ChooseDetailsCategory = () => {
  const theme = useTheme();
  const Mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box width={"90%"} mx="auto" my={Mobile ? 8 : 20}>
      <Typography variant="h6" component={"div"} fontWeight="bold">
        Shop By Category
      </Typography>
      <Box
        display={"flex"}
        gap={Mobile ? 0 : 4}
        width="100%"
        flexDirection={Mobile ? "column" : "row"}
      >
        {shopCategories.map((category) => (
          <Box
            textAlign={"center"}
            sx={{
              height: {
                xs: "400px",
                sm: "300px",
                md: "500px",
              },
              color: "white",
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "column",
              paddingBottom: "50px",
              backgroundImage: `url(${category.url})`,
              backgroundPosition: "50% 50%",
              backgroundSize: "cover",
              backgroundAttachment: "scroll",
              boxSizing: "border-box",
              mt: 3,
            }}
          >
            <Typography variant={Mobile ? "h5" : "h4"} fontWeight={"bold"}>
              {category.name}
            </Typography>
            <Link to={`${category.name}`}>
              <Button
                color="warning"
                variant="contained"
                sx={{
                  textTransform: "none",
                  borderRadius: 10,
                  width: Mobile ? "40%" : "24%",
                  mx: "auto",
                  fontWeight: "medium",
                  fontSize: 16,
                  mt: 3,
                  py: "10px",
                  "&:hover": {
                    backgroundColor: "#102343",
                  },
                }}
              >
                Discover
              </Button>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ChooseDetailsCategory;
