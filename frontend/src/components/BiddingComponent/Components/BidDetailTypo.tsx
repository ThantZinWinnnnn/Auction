import { Typography, useMediaQuery,useTheme } from "@mui/material";

interface bidDetail{
    text:string,
    fontW:string,
    light :boolean
}

const BidDetailTypo = (props:bidDetail) => {
  const theme = useTheme();
  const is4k = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Typography fontWeight={props.fontW} variant={is4k ? "subtitle2" :"caption"} component={"div"} color={props.light ? "black" : "white"}>
      {props.text}
    </Typography>
  );
};

export default BidDetailTypo;
