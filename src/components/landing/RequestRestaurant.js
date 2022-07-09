import { NineKPlusOutlined } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useRef } from "react";
import cookingVideo from "../../media/food_cooking.mp4"
import RequestRestaurantFormDialog from './RequestRestaurantFormDialog';

export default function RequestRestaurant() {

  const [formInput, setFormInput] = useState(
    { 
      name: "", 
      description: "", 
      phoneNumber: "", 
      openingTime: "", 
      closingTime: "", 
      price: "", 
      cuisine: "", 
      location: "", 
      diningRestriction:"" || null
    }
  )

  console.log("formInput: ", formInput)

  const vidRef = useRef(null);
  const handlePlayVideo = () => {
    vidRef.current.play();
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{mt:"10vh", display:"flex", justifyContent:"center"}}>
      <Typography 
        sx={{
        position:"absolute",
        zIndex:1,
        color:"white",   
        fontFamily: "Merriweather",
        fontSize: "3.5vh",
        letterSpacing: 1,
        fontWeight: 900,
        lineHeight:"8vh",
        mt:3,
        textAlign:"center"
        }}>
        You don't see a restaurant you want to book a table at?
        <br/> 
        Do you want to add a restaurant? 
        <br/> 
        Click the button below!
      </Typography>
      <video
        ref={vidRef}
        autoPlay
        muted
        loop
        playsInline
        style={{
          width:"100%", 
          maxHeight:"40vh", 
          objectFit: "cover", 
          filter: "brightness(40%)",
          position:"relative", 
          zIndex:0 
          }}
        >
        <source src={cookingVideo} type="video/mp4" />
      </video>
      <Button 
         onClick={handleClickOpen}
         variant="contained"
         sx={{
          backgroundColor:"#FF6534",
          width:"15vh",
          fontFamily: "Merriweather",
          color:"white",
          textAlign:"center",
          fontWeight:"900",
          fontSize:"2.5vh",
          textTransform: "none",
          position:"absolute",
          zIndex:1,
          mt:"28vh",
          boxShadow:"none",
           '&:hover': {
          backgroundColor: '#EB4700',
        }
         }}
         >
            Submit
        </Button>
         <RequestRestaurantFormDialog 
          open={open}
          setOpen={setOpen}
          handleClose={handleClose}
          setFormInput={setFormInput}
          formInput={formInput}
        />
    </Box>
  )
}
