import React from 'react'

//Importing components
import RequestRestaurant from '../components/landing/RequestRestaurant'
import RestaurantsList from '../components/landing/RestaurantsList'

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
  )
}
