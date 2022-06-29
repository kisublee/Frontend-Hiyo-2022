import React from 'react'
import RestaurantsList from '../components/landing/RestaurantsList'

export default function Landing({restaurantData, setRestaurantData}) {
  return (
   <RestaurantsList restaurantData={restaurantData} setRestaurantData={setRestaurantData}/>
  )
}
