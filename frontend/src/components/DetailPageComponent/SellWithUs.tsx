import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const SellWithUs = () => {
  return (
    <Box width={"90%"} mx="auto" mb={20}>
      <Box width={"100%"} display="flex" p={4} justifyContent='space-evenly'>
        <Box
          display="flex"
          gap={5}
          justifyItems="center"
          alignItems={"center"}
          pl={6}
        >
          <Typography variant="h1" fontWeight={"bold"} color={"#28589B"}>
            Sell
          </Typography>
          <Typography variant="h1" fontWeight={"bold"} color={"#102343"}>
            With
          </Typography>
          <Typography variant="h1" fontWeight={"bold"} color={"#F65A03"}>
            Us
          </Typography>
        </Box>
      </Box>

      {/* Change One component with Description */}
      <Box textAlign={"center"} width="50%" mx={"auto"} marginTop="3%">
        <Typography variant="h4" fontWeight={"bold"} marginBottom="4%">
          Got something to sell?
        </Typography>
        <Typography variant="body1" fontWeight={"light"} lineHeight={2.5}>
          There’s never been a better time to sell with us. With a wide audience
          of buyers, no seller commission, free listings in collectives and a
          dedicated account manager on hand should you need them, William George
          is the perfect place to sell.
        </Typography>
        <Button
          color="warning"
          variant="contained"
          sx={{
            textTransform: "none",
            borderRadius: 10,
            width: "24%",
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
          Start Selling
        </Button>
      </Box>
    </Box>
  );
};

export default SellWithUs;
