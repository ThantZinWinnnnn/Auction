import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
interface info {
  label: string;
  data: string;
}

const ProfileInfo: React.FC<info> = ({ label, data }) => {

  const theme = useTheme();
  const belowLg = useMediaQuery(theme.breakpoints.down('lg'))
  const belowMd = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
      <Box width={belowMd? "100%" : "50%"} display={'flex'} alignItems={'center'}
        gap={belowLg ? 1.5 : 4}
        sx={{
          mb: 4,
        }}
      >
        <Box textAlign={"right"} width="20%">
          <Typography color={"#C9C9C9"}>{label}</Typography>
        </Box>
        <Box
          border={"1px solid rgba(34,36,38,.15)"}
          py={1.4}
          pl={1.2}
          boxShadow={0.1}
          borderRadius={1}
          width="80%"
        >
          <Typography>{data}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default ProfileInfo;
