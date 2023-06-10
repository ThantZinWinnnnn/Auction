import {
  Box,
  Divider,
  Typography,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { motion } from "framer-motion";

const navContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      ease: "easeInOut",
    },
  },
};

const navItem = {
  hidden: { opacity: 0, y: -20 },
  visible:{
    opacity: 1,
    y: 0,
    transition:{
      type:"spring",
      duration:1.2
    }
  }
};

const icon={
  hidden:{opacity:0},
  visible:{opacity:1,transition:{duration:1.2}}
}

const Footer = () => {
  const theme = useTheme();
  const is4kScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const Mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box bgcolor={"#102343"} py={Mobile ? 4 : 4} color="white" sx={{marginTop:"auto"}}>
      <Container maxWidth={is4kScreen ? "xl" : "lg"} sx={{height:{
        xs:400,
        sm:180
      }}}>
        <Box
          display={"flex"}
          mb={Mobile ? 5 : 5}
          flexDirection={Mobile ? "column" : "row"}
        >
          <Box
            display={"flex"}
            width="70%"
            textAlign={"left"}
            gap={"15%"}
            flexDirection={Mobile ? "column" : "row"}
            mb={Mobile ? 1 : 0}
          >
            <Box component={motion.div} variants={navContainer} initial="hidden" whileInView="visible"
     viewport={{ once: true }}>
              <Link to={"/user/profile"}>
                <Typography
                  sx={{
                    "&:hover": {
                      color: "warning.main",
                    },
                  }}
                  color={"white"}
                  variant={"caption"}
                  fontWeight={"bold"}
                  mb={Mobile ? 1 : 3}
                  component={motion.p}
                  variants={navItem}
                >
                  Account Setting
                </Typography>
              </Link>
              <Link to={"/user/sellProducts"}>
                <Typography
                  sx={{
                    "&:hover": {
                      color: "warning.main",
                    },
                  }}
                  color={"white"}
                  variant={"caption"}
                  fontWeight={"bold"}
                  mb={Mobile ? 1 : 0}
                  component={motion.p}
                  variants={navItem}
                >
                  Selling Products
                </Typography>
              </Link>
            </Box>
            <Box component={motion.div} variants={navContainer} initial="hidden" whileInView="visible"
      viewport={{ once: true }}>
              <Link to={"/user/create"}>
                <Typography
                  sx={{
                    "&:hover": {
                      color: "warning.main",
                    },
                  }}
                  color={"white"}
                  variant={"caption"}
                  fontWeight={"bold"}
                  mb={Mobile ? 1 : 3}
                  component={motion.p} 
                  variants={navItem}
                >
                  Selling
                </Typography>
              </Link>
              {/* <Link to={"/"}>
                <Typography
                  sx={{
                    "&:hover": {
                      color: "warning.main",
                    },
                  }}
                  color={"white"}
                  variant={"caption"}
                  fontWeight={"bold"}
                  mb={Mobile ? 1 : 0}
                  component={motion.p}
                  variants={navItem}
                >
                  Online Auctions
                </Typography>
              </Link> */}
            </Box>
            <Box component={motion.div} variants={navContainer} initial="hidden" whileInView="visible"
      viewport={{ once: true }}>
              <Link to={"/user/watchList"}>
                <Typography
                  sx={{
                    "&:hover": {
                      color: "warning.main",
                    },
                  }}
                  color={"white"}
                  variant={"caption"}
                  fontWeight={"bold"}
                  mb={Mobile ? 1 : 3}
                  component={motion.p}
                  variants={navItem}
                >
                  Favourite Products
                </Typography>
              </Link>
              {/* <Link to={"/contact"}>
                <Typography
                  sx={{
                    "&:hover": {
                      color: "warning.main",
                    },
                  }}
                  color={"white"}
                  variant={"caption"}
                  fontWeight={"bold"}
                  mb={Mobile ? 4 : 0}
                  component={motion.p}
                  variants={navItem}
                >
                  Contact Us
                </Typography>
              </Link> */}
            </Box>
          </Box>
          <Box
          component={motion.div} variants={navContainer} initial="hidden" whileInView="visible"
          viewport={{ once: true }}
            width={Mobile ? "70%" : "30%"}
            display="flex"
            justifyContent={Mobile ? "space-between" : "space-evenly"}
            px={ 0}
            mb={0}
          >
            <Link to={"https://www.facebook.com/thantzin.win.75470316/"} target="_blank">
              <FacebookIcon
                sx={{ color: "white", "&:hover": { color: "warning.main" } }}
                fontSize={"medium"}
              />
            </Link>

            <Link to={"https://twitter.com/thantzi28886007"}>
              <TwitterIcon
                sx={{ color: "white", "&:hover": { color: "warning.main" } }}
                fontSize={"medium"}
              />
            </Link>

            <Link to={"https://www.instagram.com/than.zaw.winnn/"}>
              <InstagramIcon
                sx={{ color: "white", "&:hover": { color: "warning.main" } }}
                fontSize={"medium"}
              />
            </Link>

            <Link to={"https://www.linkedin.com/in/thantzinwin/"}>
              <LinkedInIcon
                sx={{ color: "white", "&:hover": { color: "warning.main" } }}
                fontSize={"medium"}
              />
            </Link>
          </Box>
        </Box>
        <Divider sx={{ bgcolor: "white" }} variant="fullWidth" light={true} />
        <Box
        component={motion.div} variants={icon} initial="hidden" whileInView="visible"
        viewport={{ once: true }}
          width={Mobile ? "60%" : "70%"}
          mx="auto"
          display={"flex"}
          flexDirection={Mobile ? "column" : "row"}
          justifyContent={Mobile ? "center" : 'space-between'}
          gap={Mobile? 4 : 0}
          mt={2}
          mb={Mobile ? 4 : 4}
          textAlign={'center'}
        >
          <Typography variant="body2" component={motion.p} variants={navItem}>Terms & Conditions</Typography>
          <Typography variant="body2" component={motion.p} variants={navItem}>Privacy & Cookie Policy</Typography>
        </Box>
        <Typography variant="caption" fontWeight={"medium"}>@Thant Zin Win 2023</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
