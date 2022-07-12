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
import { useNavigate,Link } from "react-router-dom";
import noImage from "../../media/noImage.png"

export default function BigTableRestaurants({restaurantData, handleClick}) {

 const calAvailableTables = (restaurant, guestNum) => {

    let availableTable = 0;

    if (guestNum === 2) {
        availableTable = restaurant.tables.twoPersonTables
    } 
    if (guestNum === 4) {
        availableTable = restaurant.tables.fourPersonTables
    } 
    if (guestNum === 8) {
        availableTable = restaurant.tables.eightPersonTables
    }
   
    for (const reservation of restaurant.reservations) {
        if (reservation.numGuests === guestNum) {
            availableTable--;
        }
    
      
    }
    return availableTable;
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
                    Big Tables for a big group event - restaurants with eight person tables
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
                if (each.tables !== null && each.tables.eightPersonTables > 0) {
                    return (
                        <Grid key={each.id}>
                             <Link 
                    to={`/restaurants/${each.id}`}
                    style={{textDecoration:"none"}}
                    key={each.id}
                  >
                        <Card sx={{ width: "37.3vh", ml:"2vh", '&:hover': {
                        backgroundColor:"#FFD1AF",
                        cursor:"grab",

                    }}}>
                            <CardMedia
                            component="img"
                            alt="restaurant cover image"
                            height="140"
                            image={imageOfRestaurants[each.name] ? imageOfRestaurants[each.name] : noImage}
                            />
                        <CardContent>
                        <Typography gutterBottom variant="h6">
                            {each.name.length > 15 ? each.name.slice(0,16) +"...": each.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {each.cuisine} · {each.price} · {each.location}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Available 8 person tables: {each.reservations[0] !== null ? calAvailableTables(each, 8) : each.tables.eightPersonTables}
                        </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                    </Link>
                    </Grid>
                )
                }
        })}
        </Box>
    </div>
  )
}
