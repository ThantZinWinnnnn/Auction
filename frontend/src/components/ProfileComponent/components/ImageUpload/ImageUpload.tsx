import { Box } from '@mui/material';
import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

interface imageUploadProps{
    onChange:(base64:string)=> void,
    label:string,
    value:string,
    disabled?:boolean
}

const ImageUpload: React.FC<imageUploadProps> = ({
    onChange,
    label,
    value,
    disabled
}) => {

    const [base64, setBase64] = useState(value);

    const handleChange= useCallback((base64:string)=>{
        onChange(base64)
    },[onChange]);

    const handleDrop = useCallback((files:any)=>{
        const file = files[0];

        const reader = new FileReader();
        reader.onload=(event:any)=>{
            setBase64(event.target.result);
            handleChange(event.target.result)
        }
    },[handleChange]);

    const {getRootProps,getInputProps} = useDropzone({
        maxFiles:1,
        onDrop:handleDrop,
        disabled,
        accept:{
            'image/jpeg':[],
            'image/png':[]
        }
    })

  return (
    <Box sx={{}} {...getRootProps()}>

    </Box>
  )
}

export default ImageUpload