import Box from '@mui/material/Box';
import {useEffect, useState } from 'react';
import * as React from 'react';
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

export default function RestaurantsList({restaurantData, setRestaurantData}) {
const API = process.env.REACT_APP_API_URL;

const [tempList, setTempList] = useState([])

useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching API");
      const res = await axios.get(`${API}/api/restaurants`);
      setRestaurantData(res.data)
      setTempList(res.data)
      console.log("res is: ", res)
    };
    fetchData();
  }, []);

  const navigate = useNavigate()
  console.log(tempList)

  const handleClick = () => {
    navigate("/restaurants")
  }

  return (
    <div>
        <Box sx={{mt:"40vh", mb:1, display:"flex"}}>
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
                    Restaurants of Today
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
                width:'100%'
                }}>
            {tempList && tempList.restaurants.map((each, i) => {
                return (
                    <Grid container spacing={3}>
                    <Grid item xs={2} xl={3}>
                    <Card sx={{ width: "33.5vh", ml:"2vh"}}>
                        <CardMedia
                        component="img"
                        alt="green iguana"
                        height="180"
                        image={imageOfRestaurants[i].image}
                        />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {each.name.length > 15 ? each.name.slice(0,16) +"...": each.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {each.cuisine} · {each.price} · {each.location}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                </Grid>
                </Grid>
            )
        })}
        </Box>
    </div>
  )
}
