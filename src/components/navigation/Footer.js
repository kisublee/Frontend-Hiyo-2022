import React from 'react';
//MUI
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function Footer () {

  return (
    <AppBar position="relative" 
        sx={{ 
            mt:10,
            bottom: 0, 
            backgroundColor:"#2D333F" 
        }}>
        <Box 
            sx={{ 
                display:"flex", 
                justifyContent:"center",
                height:"20vh"
            }}>
            <Toolbar>
              <Box sx={{display:"flex", justifyContent:"center"}}>
                <Typography sx={{mr:2}}>
                  About
                </Typography>
                <Typography  sx={{mr:2}}>
                  Career
                </Typography>
                <Typography sx={{mr:2}}>
                  Contact
                </Typography>
                <Typography  sx={{mr:2}}>
                  Partnership
                </Typography>
                </Box>
            </Toolbar>
      </Box>
    </AppBar>

  )
}