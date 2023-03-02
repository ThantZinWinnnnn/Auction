import {
  Box,
  Grid,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { moreAuctions } from "../../data/DummyData";

const MoreAuctions = () => {
  const theme = useTheme();
  const Mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box width={"90%"} mx="auto">
      <Typography variant={Mobile ? "h6" : "h5"} mb={Mobile ? 3 : 5}>
        More Auctons
      </Typography>
      <Grid container spacing={2} marginBottom={5} p="0px">
        {moreAuctions.map((auction) => (
          <Grid item xs={12} sm={6} md={3}>
            <Box
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
              <Typography  fontWeight={"bold"} sx={{
                fontSize:{
                    xs:"1.2rem",
                    sm:"1rem"
                }
              }}>
                {auction.name}
              </Typography>
              <Link to={`${auction.name}`}>
                <Button
                  disableElevation
                  disableRipple
                  color="warning"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    borderRadius: 10,
                    width: {
                        xs:"35%",
                        sm:"40%",
                        md:"60%",
                        xl:"35%"
                    },
                    mx: "auto",
                    fontWeight: "bold",
                    fontSize: {
                      xs:16,
                      xl:18
                    },
                    mt: 3,
                    py: "8px",
                    "&:hover": {
                      backgroundColor: "#102343",
                    },
                  }}
                >
                  Discover
                </Button>
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MoreAuctions;
