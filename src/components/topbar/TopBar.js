import * as React from 'react';
//MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
//Importing components
import SearchBar from '../searchbar/SearchBar';

export default function TopBar({
  setSearchInput, 
  setSearchOption,
  searchOption,
  searchInput, 
  setRestaurantData,
  isValidSearch,
  setIsValidSearch
  }) 
  {
  return (
    <Box
      sx={{
        width: "100%",
        height: "25vh",
        position:"absolute",
        backgroundColor:'#EC8B61',
        }}
    >
        <Typography 
                sx={{ 
                flexGrow: 1, 
                fontFamily: "Merriweather",
                color:"white",
                textAlign:"center",
                fontSize: "4.5vh",
                letterSpacing: 1,
                fontWeight: 900,
                marginTop:"2.5vh"
                }}
          >
            Seize your table for a wonderful moment
        </Typography>
        <SearchBar 
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setSearchOption={setSearchOption}
          searchOption={searchOption}
          setRestaurantData={setRestaurantData}
          isValidSearch={isValidSearch}
          setIsValidSearch={setIsValidSearch}
          />
   </Box>
  );
}
