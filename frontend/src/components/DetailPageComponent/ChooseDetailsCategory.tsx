import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1.4,
    },
  },
};

const ChooseDetailsCategory: React.FC<categoryProps> = ({
  categories,
  light,
}) => {
  const theme = useTheme();
  const Mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      width={"90%"}
      mx="auto"
      my={Mobile ? 8 : 10}
      sx={{ color: light ? "black" : "white" }}
    >
      <Typography variant="h6" component={"div"} fontWeight="bold">
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "spring", delay: 0.2 }}
        >
          Shop By Category
        </motion.span>
      </Typography>
      <Box
        component={motion.div}
        variants={imageContainer}
        initial="hidden"
        whileInView={"visible"}
        display={"flex"}
        gap={Mobile ? 0 : 4}
        width="100%"
        flexDirection={Mobile ? "column" : "row"}
      >
        {categories.map((category, index) => (
          <Box
            key={index}
            component={motion.div}
            variants={imageItem}
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
            <Typography
              sx={{
                fontSize: {
                  xs: "2rem",
                  sm: "1.5rem",
                },
              }}
              fontWeight={"bold"}
            >
              {category.name}
            </Typography>
            <Link to={`/query/subcategory/${category.name}`}>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  borderRadius: 10,
                  width: {
                    xs: "40%",
                    sm: "50%",
                    xl: "28%",
                  },
                  mx: "auto",
                  fontWeight: "medium",
                  fontSize: {
                    xs: 16,
                    xl: 18,
                  },
                  mt: 3,
                  py: {
                    sm: "6px",
                    xl: "10px",
                  },
                  bgcolor: light ? "warning.main" : "warning.dark",
                  color: "white",
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

interface feature {
  id: Number;
  name: String;
  url?: String | React.Component;
  info?: String;
  currentlot?: String;
}

interface categoryProps {
  categories: Array<feature>;
  light: boolean;
}
