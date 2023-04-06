import {
  Box,
  OutlinedInput,
  Typography,
  Input,
  TextField,
  InputProps,
} from "@mui/material";
import React, { useCallback, useState } from "react";

interface imageUploadProps {
  onChange: (base64: string) => void;
  label: string;
  value: string;
  disabled?: boolean;
}
interface FileInputProps extends InputProps {
  accept?: string;
}

const ImageUpload: React.FC<imageUploadProps> = (
  { onChange, label, value, disabled },
  { accept, ...inputProps }: FileInputProps
) => {
  // const [base64, setBase64] = useState(value);
  const [imageFile, setImageFile] = useState<File | undefined>(undefined);
  const [imageBase64, setImageBase64] = useState("");

  // const handleChange= useCallback((base64:string)=>{
  //     onChange(base64)
  // },[onChange]);

  // const handleDrop = useCallback((files: any) => {
  //     console.log("running")
  //     const file = files[0]
  //     const reader = new FileReader();
  //     reader.onload = (event: any) => {
  //       setBase64(event.target.result);
  //       handleChange(event.target.result);
  //     };
  //     reader.readAsDataURL(file);
  // }, [handleChange])

  // const {getRootProps,getInputProps} = useDropzone({
  //     maxFiles:1,
  //     onDrop:handleDrop,
  //     disabled,
  //     accept:{
  //         'image/jpeg':[],
  //         'image/png':[]
  //     }
  // })

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageFile(file);
        if (reader.result) {
          setImageBase64(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  console.log("src", imageBase64);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          p: {
            xl: 2,
          },
          color: "black",
          border: "1px dotted black",
          borderRadius: "10px",
          mt:"15px"
        }}
      >
        <Typography fontWeight={'bold'} variant="h6" mb={1}>Upload Image</Typography>
        <Input
          type="file"
          onChange={handleFileSelect}
          {...inputProps}
          inputProps={{ accept: "image/*" }}
          title="upload"
          sx={{
            color:"primary.main",
            
          }}
        />    
        <Box width={"100%"} height={"300px"} overflow={"hidden"} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        {imageBase64 ? (
            <img
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "contain" }}
              src={imageBase64}
              alt="Preview"
            />
        ):(
            <Typography fontWeight={'bold'} variant="h4">Please upload the product image</Typography>
        )}
      </Box>
      </Box>
    </>
  );
  {
    /* <input type='file' {...getInputProps()}/>
        {base64 ? (<Box display={'flex'} alignItems={'center'} justifyContent={"center"}>
            <img src={base64} height={"100%"} width={"100%"} alt='Uploaded image'/>
        </Box>) : <Typography color={'black'}>{label}</Typography>} */
  }
};

export default ImageUpload;
