import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  elevation={0}>
        <Toolbar  sx={{backgroundColor:"white"}}>
          <Typography 
            sx={{ 
              flexGrow: 1, 
              fontFamily: "Merriweather",
              color:"black",
              fontSize: "3.5vh",
              letterSpacing: 1,
              fontWeight: 900,
              textShadow: "1px 0 black"
               }}>
            Hiyo
          </Typography>
          <Button color="inherit"
            sx={{ 
             fontFamily: "Merriweather",
             color:"black",
             textTransform: "none",
             fontSize: "2.5vh"
             }}>
            My Reservations
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
