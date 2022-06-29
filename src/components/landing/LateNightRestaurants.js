import React from 'react'
import Box from '@mui/material/Box';
import {useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios"
import imageOfRestaurants from '../../staticImages'
import Grid from '@mui/material/Grid';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Divider from '@mui/material/Divider';
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';

export default function LateNightRestaurants({restaurantData, handleClick}) {

  const convertClosingTime = (time) => {
    const getHours = time.split(":");
    let closingTime = getHours[0];
  
    if (closingTime === "00") {
        closingTime = "24"
    }
    return Number(closingTime)
  }

  const checkDiningAvailability = (diningRestriction) => {
    if (diningRestriction === null) {
       return  (
        <div style={{display:"flex"}}>
            Dining availability: 
            <CheckCircleIcon sx={{height:"3.1vh", color:"#2B94FC"}}/>
       </div>
       )
    } else {
       return  (
        <div style={{display:"flex"}}>
            Dining availability: 
            <CloseIcon sx={{height:"3.1vh", color:"#2B94FC"}}/>
        </div>
       )
    }
  }
  
  return (
    <div>
         <Box sx={{mt:"10vh", mb:1, display:"flex"}}>
            <Typography gutterBottom variant="h4" 
                sx={{
                    flexGrow: 1,
                    color:"black",   
                    fontFamily: "Merriweather",
                    color:"black",
                    fontSize: "3.5vh",
                    letterSpacing: 1,
                    fontWeight: 900, 
                    textAlign:"left"
                    }}>
                    Open Till Midnight for your late night food
            </Typography>
            <Typography  
                onClick={handleClick}
                sx={{
                    mt:1,
                    color:"black",   
                    fontFamily: "Merriweather",
                    color:"black",
                    fontSize: "2.5vh",
                    letterSpacing: 1,
                    fontWeight: 900,
                    '&:hover': {
                            textDecoration:"underline"
                            }
                    }}>
                    See more
            </Typography>
            <ArrowRightIcon sx={{mt:1.4}}/>
        </Box>
        <Box 
            sx={{
                display:"flex",
                overflowY:"auto", 
                width:'100%',
                height:"45vh",
                mb:3
                }}>
            {restaurantData && restaurantData.map((each, i) => {
                if (convertClosingTime(each.closingTime) === 24) {
                    return (
                        <Grid>
                        <Card sx={{ width: "37.3vh", ml:"2vh"}}>
                            <CardMedia
                            component="img"
                            alt="restaurant cover image"
                            height="140"
                            image={imageOfRestaurants[each.name]}
                            />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {each.name.length > 15 ? each.name.slice(0,16) +"...": each.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {each.cuisine} · {each.price} · {each.location}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {checkDiningAvailability(each.diningRestriction)}
                        </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                    </Grid>
                )
                }
        })}
        </Box>
    </div>
  )
}
