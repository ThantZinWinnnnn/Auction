import { Typography } from "@mui/material";

interface bidDetail{
    text:string,
    fontW:string
}

const BidDetailTypo = (props:bidDetail) => {
  return (
    <Typography fontWeight={props.fontW} variant="h6" component={"div"}>
      {props.text}
    </Typography>
  );
};

export default BidDetailTypo;
