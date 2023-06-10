import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import {motion} from "framer-motion"
interface themeProps{
  light : boolean
}
const header = {
  hidden:{opacity:0,y:60},
  visible:{opacity:1,y:0,transition:{duration:2,delay:0.6}}
}

const paragraph={
  hidden:{opacity:0,y:80},
  visible:{opacity:1,y:0,transition:{duration:2,delay:0.8}}
}


const Description:React.FC<themeProps> = ({light}) => {
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
		  sm:"85%",
          md: "80%",
        },
        color:light ? "black" : "white"
      }}
    >
      <Typography
        variant={Mobile ? "h6" : "h4"}
        fontWeight={"bold"}
        marginBottom="2%"
        overflow={"hidden"}
      >
        <motion.span variants={header} initial="hidden" whileInView="visible">Gadgets and goods at hard to beat prices</motion.span>
      </Typography>
      <Typography
        variant={Mobile ? "body2" : "body1"}
        fontWeight={"light"}
        lineHeight={Mobile ? 1.5 : 2}
      >
        <motion.span variants={paragraph} initial="hidden" whileInView="visible">
        Here you’ll find an extensive choice of electronic gadgets and goods at
        hard to beat prices. Perhaps you’re after a slimline vacuum cleaner to
        replace your hefty old one or are looking for a piece of computing
        equipment to help you work, you can bid on them here. As well as sales
        of individual electrical items, we hold weekly sales of no reserve
        return pallets sourced from leading retailers, which contain many
        electronic gems. See what’s on offer today.
        </motion.span>
      </Typography>
    </Box>
  );
};

export default Description;
