import { Box, Typography, Input, InputProps } from "@mui/material";
import React from "react";

interface imageUploadProps {
  imageHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
interface FileInputProps extends InputProps {
  accept?: string;
}

const ImageUpload: React.FC<imageUploadProps> = (
  { imageHandler, value },
  { accept, ...inputProps }: FileInputProps
) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          p: 2,
          color: "black",
          border: "1px dotted black",
          borderRadius: "10px",
        }}
      >
        <Typography
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
        />
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
