import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import RequestedFormInput from "./RequestedFormInput";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Textarea from "./RequestTextAreaInput";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
const notifyForSending = ()=> toast.success("Successfully sent email",{icon: "👏"})

interface Props{
    modalHanler : ()=> void;
}

const RequestMailForm = ({modalHanler}: Props) => {
  const formRef = React.useRef<HTMLFormElement | string>("");
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_m20djsf",
        "template_qodmloq",
        formRef.current,
        "8yK8K96qL50GcXNap"
      )
      .then(
        (result) => {
          console.log(result.text);
          notifyForSending();
          modalHanler();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
    <Toaster position="top-center" reverseOrder={true} />
    <Box
      component={"form"}
      id="request-mail-form"
      onSubmit={() => {}}
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      ref={formRef}
    >
      <RequestedFormInput
        text="Your Name"
        name="user_name"
        placeholder="Enter your name"
        type="text"
      />
      <RequestedFormInput
        text="Your Email"
        name="user_email"
        placeholder="Enter your email"
        type="email"
      />
      <Box width={"100%"}>
        <Textarea name="message" />
      </Box>
      <Stack direction={"row"} gap={3} marginLeft={"auto"}>
        <Button
          variant="contained"
          disableTouchRipple
          disableElevation
          disableFocusRipple
          color="warning"
          onClick={modalHanler}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          disableTouchRipple
          disableElevation
          disableFocusRipple
          color="primary"
          type="submit"
          onClick={submitHandler}
        >
          Send
        </Button>
      </Stack>
    </Box>
    </>
  );
};

export default RequestMailForm;
