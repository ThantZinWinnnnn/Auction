import { Box, useTheme, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";

const SellWithUs = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const Mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box width={"90%"} mx="auto" mb={Mobile ? 10 : 10}>
      <Box width={"100%"} display="flex" p={1}>
        <Box
          display="flex"
          gap={Mobile ? 3 : 5}
          justifyContent="center"
          alignItems={"center"}
          width={"90%"}
          mx="auto"
        >
          <Typography
            sx={{
              fontSize: {
                xs: "2.5rem",
                sm: "4rem",
                md: "6rem",
              },
            }}
            fontWeight={"bold"}
            color={"#28589B"}
          >
            Sell
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "2.5rem",
                sm: "4rem",
                md: "6rem",
              },
            }}
            fontWeight={"bold"}
            color={"#102343"}
          >
            With
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "2.5rem",
                sm: "4rem",
                md: "6rem",
              },
            }}
            fontWeight={"bold"}
            color={"#F65A03"}
          >
            Us
          </Typography>
        </Box>
      </Box>

      {/* Change One component with Description */}
      <Box
        textAlign={"center"}
        mx={"auto"}
        marginTop="1%"
        sx={{
          width: {
            xs: "100%",
            lg:"50%"
          },
        }}
      >
        <Typography
          variant={Mobile ? "h6" : "h4"}
          fontWeight={"bold"}
          marginBottom="4%"
        >
          Got something to sell?
        </Typography>
        <Typography
          variant={Mobile ? "body2" : "body1"}
          fontWeight={"light"}
          lineHeight={Mobile ? 2 : 2.5}
        >
          There’s never been a better time to sell with us. With a wide audience
          of buyers, no seller commission, free listings in collectives and a
          dedicated account manager on hand should you need them, William George
          is the perfect place to sell.
        </Typography>
        <Button
          onClick={()=>navigate('/user/create')}
          color="warning"
          variant="contained"
          sx={{
            width:{
              xs:"50%",
              sm:"24%",
              xl:"22%"
            },
            textTransform: "none",
            borderRadius: 10,
            mx: "auto",
            fontWeight: "medium",
            fontSize: {
              xs:16,
              xl:18
            },
            mt: 3,
            py: "10px",
            "&:hover": {
              backgroundColor: "#102343",
            },
          }}
        >
          Start Selling
        </Button>
      </Box>
    </Box>
  );
};

export default SellWithUs;
