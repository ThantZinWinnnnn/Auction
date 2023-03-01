import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const Description = () => {
  const theme = useTheme();
  const Mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      textAlign={"center"}
      mx={"auto"}
      marginTop="4%"
      sx={{
        width: {
          xs: "90%",
          md: "70%",
        },
      }}
    >
      <Typography
        variant={Mobile ? "h6" : "h4"}
        fontWeight={"bold"}
        marginBottom="2%"
      >
        Gadgets and goods at hard to beat prices
      </Typography>
      <Typography
        variant={Mobile ? "body2" : "body1"}
        fontWeight={"light"}
        lineHeight={Mobile ? 1.5 : 2}
      >
        Here you’ll find an extensive choice of electronic gadgets and goods at
        hard to beat prices. Perhaps you’re after a slimline vacuum cleaner to
        replace your hefty old one or are looking for a piece of computing
        equipment to help you work, you can bid on them here. As well as sales
        of individual electrical items, we hold weekly sales of no reserve
        return pallets sourced from leading retailers, which contain many
        electronic gems. See what’s on offer today.
      </Typography>
    </Box>
  );
};

export default Description;
