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
                height:"50vh"
            }}>
            <Toolbar>
                
            </Toolbar>
      </Box>
    </AppBar>

  )
}