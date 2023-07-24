import React, { memo } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Typography } from "@mui/material";

const UpdateDatePicker:React.FC<DateProps> = ({date,changeHandler,title,light}) => {

  console.log("date", date);

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DemoItem label={<Typography 
          color={light  ? "black" : "white"}
          sx={{
            fontSize:{
              sm:10.8,
              md:13,
            }
          }}>{title}</Typography>}>
            <DatePicker
              value={date}
              onChange={changeHandler}
              sx={{
                "& .MuiInputBase-root": {
                  fontSize: "14px", // Customize the font size here
                  width: "100%", // Customize the width here
                },
              }}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
};

const MemoizedDatePicker = memo(UpdateDatePicker);

export default MemoizedDatePicker;

interface DateProps{
    date:any,
    changeHandler?:(newValue: React.SetStateAction<Dayjs | null>)=>void,
    title:string,
    light:boolean
}
