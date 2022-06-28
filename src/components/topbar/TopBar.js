import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function TopBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "25vh",
        position:"fixed",
        backgroundColor:'#EC8B61',
        '&:hover': {
          backgroundColor: '#D87B54',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        <Typography 
                sx={{ 
                flexGrow: 1, 
                fontFamily: "Merriweather",
                color:"white",
                textAlign:"center",
                fontSize: "4.5vh",
                letterSpacing: 1,
                fontWeight: 900,
                marginTop:"2vh"
                }}>
            Seize your table for a wonderful moment
        </Typography>
        

   </Box>
  );
}
