import {
  Box,
  Divider,
  InputAdornment,
  OutlinedInput,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { ChangeEventHandler } from "react";

interface priceProps{
  value:string,
  func:(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

const Price:React.FC<priceProps> = ({value,func}) => {
  return (
    <Box width={ "100%"} sx={{
        mb:0.3
    }}>
        <Typography fontWeight={'bold'} component={'h6'} sx={{
            mb:{
                xs:1
            },
            fontSize:{
              sm:14,
              xs:13
            }
        }}>Product Price</Typography>
        <OutlinedInput
        value={value}
        onChange={func}
        fullWidth
        placeholder="Enter your product Price"
        endAdornment={
          <InputAdornment position="end">
            <Box display={"flex"} gap={1.2}>
              <Divider
                orientation="vertical"
                sx={{ border: "1px solid" }}
                flexItem
              />
              MMKS
            </Box>
          </InputAdornment>
        }
      />
    </Box>
  );
};

export default Price;
