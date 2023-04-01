import { Box, Modal, TextField, Typography ,InputBase} from "@mui/material";
import React, { useState } from "react";
import Input from "./Input";

interface model {
  openn: boolean;
  closeHandler: () => void;
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  boxShadow: 24,
  borderRadius:1,
  p: 4,
  "&:focus-visible":{
    outline:"none"
  },
};

const UpdateModel: React.FC<model> = ({ openn, closeHandler }) => {
    const[username,setUsername] = useState("")
    const[bgUrl,setbgUrl] = useState("")
    const[profile,setProfile] = useState("")
    const[email,setEmail] = useState("")
    const[street,setStreet] = useState("")
    const[town,setTown] = useState("")
    const[region,setRegion] = useState("")
    const[country,setCountry] = useState("")

  return (
    <>
      <Modal
        keepMounted
        open={true}
        onClose={closeHandler}
        sx={{"&:focus-visible":{
            outline:"none"
        }}}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
            <Input/>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default UpdateModel;
