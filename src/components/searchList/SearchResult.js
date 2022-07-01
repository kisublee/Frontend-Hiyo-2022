import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imageOfRestaurants from '../../staticImages';

export default function SearchResult({searchInput, searchOption, restaurantData, setRestaurantData}) {

    const API = process.env.REACT_APP_API_URL;

    console.log(searchInput)
    console.log(searchOption)

    const API_Route = (searchInput, searchOption) => {

      let route = "";

      if (!searchInput && !searchOption) {
        return route = ""
      }

      if (!searchOption && searchInput) {
       return route = `?searchTerm=${searchInput}`
      }

      if (searchOption !== "name") {
        let convertStr = searchInput
        if (searchOption === "cuisine") {
          // For Cuisine, first letter of a cuisine must be capitalized due to how it is set in Backend
            // Lowercase the rest of the cuisine's letters
          convertStr = convertStr.slice(0,1).toUpperCase() + searchInput.slice(1).toLowerCase()
        } 

       return route = `?filters[${searchOption}]=${convertStr}`
      } else if (searchOption === "name") {
       return route = `?searchTerm=${searchInput}`
      }
    }

    useEffect(() => {
        const fetchData = async () => {
          console.log("Fetching API from SearchResult");
            const res = await axios.get(`${API}/` + "api/restaurants/" + API_Route(searchInput, searchOption))
            setRestaurantData(res.data.restaurants)
            console.log(res.data)
        };
        fetchData();
      }, [restaurantData.length]);

  return (
    <div>
      <Box sx={{ flexGrow: 1, mt:30 }}>
        <Grid container spacing={1}>
          
          <Grid  // Left Box
            item xs={6} lg={6} 
            sx={{
              maxHeight:"350vh",
              // backgroundColor:"lightBlue"
              }}>
            {restaurantData.map((restaurant) => {
              return (
               <Card key={restaurant.id}
                sx={{ width: "95%", mb:"2vh", height:"25vh", display:"flex"}}>
                <CardMedia
                component="img"
                alt="restaurant cover image"
                height="140"
                image={imageOfRestaurants[restaurant.name]}
                sx={{
                  width:"30%", 
                  height:"100%"
                }}
                />

                <CardContent>
                    <Typography gutterBottom variant="h6">
                        {restaurant.name.length > 15 ? restaurant.name.slice(0,16) +"...": restaurant.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {restaurant.cuisine} · {restaurant.price} · {restaurant.location}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {restaurant.description.length > 150 ? restaurant.description.split("").slice(0,151).join("") + " ..." : restaurant.description }
                    </Typography>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
                </CardContent>
            </Card>
            )
          })}
          </Grid>

          <Grid // Right Box
            item xs={6} lg={6} 
            sx={{
              height:"350vh",
              backgroundColor:"lightGreen"
              }}>
            <div>xs</div>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}