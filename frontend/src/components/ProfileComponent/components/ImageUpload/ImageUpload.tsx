import { Box, Typography, InputProps } from "@mui/material";
import Input from "../Input";
import React from "react";

interface imageUploadProps {
  imageHandler: (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>void;
  value: string;
  light:boolean
}
interface FileInputProps extends InputProps {
  accept?: string;

}

const ImageUpload: React.FC<imageUploadProps> = (
  { imageHandler, value ,light},
  { accept, ...inputProps }: FileInputProps
) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          p: 2,
          color: "black",
          border: light ? "1px dotted black" : "1px dotted white",
          borderRadius: "10px",
        }}
      >
        {/* <Typography
          fontWeight={"bold"}
          sx={{
            fontSize: {
              lg: 16,
              sm: 14,
            },
          }}
          mb={1}
        >
          Upload Image
        </Typography>
        <Input
          type="file"
          onChange={imageHandler}
          {...inputProps}
          inputProps={{ accept: "image/*" }}
          title="upload"
          sx={{
            color: "primary.main",
            mb: 2,
          }}
        /> */}

        <Input name="Image Url" text={value} id="image-upload" handlerFun={imageHandler} />

        <Box
          width={"100%"}
          height={"300px"}
          overflow={"hidden"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {value ? (
            <img
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "contain" }}
              src={value}
              alt="Preview"
            />
          ) : (
            <Typography
              fontWeight={"bold"}
              sx={{
                fontSize: {
                  lg: 20,
                  sm: 14,
                },
                color:light ? "black" : "white"
              }}
            >
              Please upload the product image
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
};

export default ImageUpload;
