import React from 'react';
import { Link } from 'react-router-dom';

//MUI
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';


//Icon
import LogoutIcon from '@mui/icons-material/Logout';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
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