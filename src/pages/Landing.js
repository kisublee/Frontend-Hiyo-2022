import React from 'react'
import RequestRestaurant from '../components/landing/RequestRestaurant'
import RestaurantsList from '../components/landing/RestaurantsList'
import CircularProgress from '@mui/material/CircularProgress';
import { Stack } from '@mui/material';

export default function Landing({restaurantData, setRestaurantData, isLoading, setIsLoading}) {


  return (
 
      <>
      <RestaurantsList 
        restaurantData={restaurantData} 
        setRestaurantData={setRestaurantData}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
        
        />
      <RequestRestaurant />
      </>
      // : 
      // <Stack sx={{ color: 'red', display:"flex", justifyContent:"center", mt:"35vh" }} spacing={2} direction="row">
      // <CircularProgress color='inherit' thickness={10}
      //   size="29vh" />
      // </Stack>
      
  )
}
