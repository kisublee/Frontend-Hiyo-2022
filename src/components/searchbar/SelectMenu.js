import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectMenu({setSearchOption, searchOption}) {

  const handleChange = (event) => {
    setSearchOption(event.target.value);
  };

  return (
    <Box sx={{ width: "20vh"}}>
      <FormControl fullWidth>
        <InputLabel 
            id="search-options"
            sx={{
                color:"white",
                "&.Mui-focused": {
                    color: "white",
                  }
            }}
        >By
        </InputLabel>
        <Select
          labelId="search-options"
          id="search-options"
          value={searchOption}
          label="search-options"
          onChange={(e) => handleChange(e)}
          sx={{
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "white"
              }
        }}
        >
          <MenuItem defaultValue=""> Search by </MenuItem>
          <MenuItem value={"none"}>None</MenuItem>
          <MenuItem value={"name"}>Name</MenuItem>
          <MenuItem value={"cuisine"}>Cuisine</MenuItem>
          <MenuItem value={"location"}>Location</MenuItem>
          <MenuItem value={"price"}>Price</MenuItem>
          <MenuItem value={"diningRestriction"}>Takeout/Delivery</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
