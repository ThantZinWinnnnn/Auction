import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRange } from "@mui/x-date-pickers-pro";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { Typography } from "@mui/material";

interface dateProps{
  value: DateRange<dayjs.Dayjs>,
  func:(newValue: DateRange<dayjs.Dayjs>)=> void
}

const AuctionDatePicker:React.FC<dateProps> =({value,func})=> {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateRangePicker", "DateRangePicker"]}>
        <DemoItem label={<Typography sx={{
          fontSize:{
            sm:14,
            xs:13
          },
          mb:{
            sm:1
          },
          fontWeight:"bold"
        }}>Auction Date</Typography>} component="DateRangePicker">
          <DateRangePicker
            value={value}
            onChange={func}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default AuctionDatePicker;
