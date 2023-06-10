import {
  Box,
  Grid,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { moreAuctions } from "../../data/DummyData";
import { motion } from "framer-motion";

interface themeProps {
  light: boolean;
}


const imageContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      ease: "easeInOut",
    },
  },
};

const imageItem = {
  hidden: {
    opacity: 0,
    x:-100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 1.4,
    },
  },
};

const MoreAuctions: React.FC<themeProps> = ({ light }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const Mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box width={"90%"} mx="auto">
      <Typography
        component={motion.p}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, type: "spring", delay: 0.2 }}
        variant={Mobile ? "h6" : "h5"}
        mb={Mobile ? 3 : 5}
        color={light ? "black" : "white"}
      >
        More Auctons
      </Typography>
      <Grid container spacing={2} marginBottom={5} p="0px"
        component={motion.div}
        variants={imageContainer}
        initial="hidden"
        whileInView={"visible"}
      >
        {moreAuctions.map((auction) => (
          <Grid item xs={12} sm={6} md={3} key={`${auction.id}`}>
            <Box
              component={motion.div}
              variants={imageItem}
              sx={{
                height: {
                  xs: "400px",
                  sm: "300px",
                },
                backgroundImage: `url(${auction.url})`,
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
                backgroundAttachment: "scroll",
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "column",
                color: "white",
                textAlign: "center",
                pb: 4,
              }}
            >
              <Typography
                fontWeight={"bold"}
                sx={{
                  fontSize: {
                    xs: "1.2rem",
                    sm: "1rem",
                  },
                }}
              >
                {auction.name}
              </Typography>

              <Button
                disableElevation
                disableRipple
                variant="contained"
                onClick={() => navigate(`/query/category/${auction.name}`)}
                sx={{
                  textTransform: "none",
                  borderRadius: 10,
                  width: {
                    xs: "35%",
                    sm: "40%",
                    md: "60%",
                    xl: "35%",
                  },
                  mx: "auto",
                  fontWeight: "bold",
                  fontSize: {
                    xs: 16,
                    xl: 18,
                  },
                  mt: 3,
                  py: "8px",
                  bgcolor: light ? "warning.main" : "warning.dark",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#102343",
                  },
                }}
              >
                Discover
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MoreAuctions;
