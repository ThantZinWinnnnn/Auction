import { Box, OutlinedInput, Typography } from "@mui/material";
import React,{useRef} from "react";

const RequestedFormInput:React.FC<Input> = ({name,placeholder,text,type}) => {

  return (
    <Box>
      <Typography>{text}</Typography>
      <OutlinedInput
        placeholder={placeholder}
        size="small"
        fullWidth
        sx={{}}
        type={type}
        name={name}
      />
    </Box>
  );
};

export default RequestedFormInput;

interface Input{
    // ref:React.RefObject<unknown> | null | undefined,
    placeholder:string,
    text:string,
    type:string,
    name:string
}
