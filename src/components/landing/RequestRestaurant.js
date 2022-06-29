import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import { useRef } from "react";
import cookingVideo from "../../media/food_cooking.mp4"

export default function RequestRestaurant() {
  const vidRef = useRef(null);
  const handlePlayVideo = () => {
    vidRef.current.play();
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
        lineHeight:"25vh"
        }}>
        You don't see a restaurant you want to book a table at? Let us know!
      </Typography>
      <video
        ref={vidRef}
        autoPlay
        muted
        loop
        playsInline
        style={{width:"100%", maxHeight:"40vh", objectFit: "cover", filter: "brightness(40%)",position:"relative", zIndex:0 }}
      >
        <source src={cookingVideo} type="video/mp4" />
      </video>
      <Button 
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
          mt:"23vh",
          boxShadow:"none",
           '&:hover': {
          backgroundColor: '#EB4700',
        }
         }}
         >
            Submit
        </Button>
    </Box>
  )
}
