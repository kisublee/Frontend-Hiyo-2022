import Box from '@mui/material/Box';
import {useEffect} from 'react';
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
import BigTableRestaurants from './BigTableRestaurants';
import LateNightRestaurants from './LateNightRestaurants';
import noImage from "../../media/noImage.png"

export default function RestaurantsList({restaurantData, setRestaurantData, isLoading, setIsLoading}) {
const API = process.env.REACT_APP_API_URL;

useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching API");
      const res = await axios.get(`${API}/api/restaurants`);
      setRestaurantData(res.data.restaurants)
    };
    fetchData();
  }, []);

  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/api/restaurants")
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
                width:'100%',
                height:"43vh"
                }}>
            {restaurantData && restaurantData.map((each, i) => {
                return (
                    <Grid key={each.id}>
                    <Card
                     sx={{ 
                        width: "37.3vh", ml:"2vh",
                        '&:hover': {
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
                    </CardContent>
                    <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                </Grid>
            )
        })}
        </Box>
        <BigTableRestaurants restaurantData={restaurantData} handleClick={handleClick}/>
        <LateNightRestaurants restaurantData={restaurantData} handleClick={handleClick}/>
    </div>
  )
}
