import { useState } from "react";
import { Button } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import SidebarLists from "../SidebarLists";

const MobileLists = () => {
  const [open, setOpen] = useState(false)
  const categoryHandler = ()=>{
    setOpen(!open)
  }

  return (
    <>
      <Button
        fullWidth
        disableRipple
        startIcon={<ListIcon />}
        
        variant="contained"
        color="warning"
        endIcon={open ? <ArrowDropUpIcon fontSize="large"/> : <ArrowDropDownIcon fontSize="large"/>}
        onClick={categoryHandler}
        disableElevation
        disableTouchRipple
        sx={{mb:8,mt:2,py:1.2,fontSize:14}}
      >
        Refine results
      </Button>
      {open && (
        <SidebarLists margin={-4}/>
      )}
    </>
  );
};

export default MobileLists;
