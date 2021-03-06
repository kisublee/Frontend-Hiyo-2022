import * as React from 'react';
//MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//Others
import { useNavigate } from 'react-router-dom';

export default function NavBar({setIsValidSearch}) {

  const navigate = useNavigate();
  const handleClick = () => {
    setIsValidSearch(true)
    navigate("/")
  }
  const navigateToReservation = () => {
    navigate("/reservations")
  }

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static"  elevation={0}>
        <Toolbar 
         sx={{
            backgroundColor:"white",  
            '&:hover': {
            backgroundColor: '#FCADAA',
                }
             }}>
          <Typography 
            onClick={handleClick}
            sx={{ 
              flexGrow: 1, 
              fontFamily: "Merriweather",
              color:"black",
              fontSize: "3.5vh",
              letterSpacing: 1,
              fontWeight: 900,
              textShadow: "1px 0 black",
              '&:hover': {
                color: 'white',
                textShadow: "1px 0 white",
                cursor:"grab"
                    }
               }}>
            Hiyo
          </Typography>
          <Button 
            onClick={navigateToReservation}
            color="inherit"
            sx={{ 
             fontFamily: "Merriweather",
             color:"black",
             textTransform: "none",
             fontSize: "2.5vh",
             '&:hover': {
                color: 'white',
                textShadow: "1px 0 white",
                boxShadow:"none",
                backgroundColor:'#FCADAA'
                    }
               }}>
            My Reservations
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
