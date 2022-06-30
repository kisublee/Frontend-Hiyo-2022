import React from 'react'
import SearchResult from '../components/searchList/SearchResult'

export default function View({searchInput,searchOption, restaurantData, setRestaurantData}) {
  return (
    <SearchResult 
      searchInput={searchInput} 
      searchOption={searchOption}
      restaurantData={restaurantData}
      setRestaurantData={setRestaurantData}
      />
  )
}
