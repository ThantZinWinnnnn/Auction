import { Typography } from "@mui/material";

interface bidDetail{
    text:string,
    fontW:string,
    light :boolean
}

const BidDetailTypo = (props:bidDetail) => {
  return (
    <Typography fontWeight={props.fontW} variant="h6" component={"div"} color={props.light ? "black" : "white"}>
      {props.text}
    </Typography>
  );
};

export default BidDetailTypo;
