import SearchIcon from "@mui/icons-material/Search";

import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import SelectMenu from "./SelectMenu";
import AlertsForInput from "../../utilities/alerts/AlertsForInput";
import { useState } from "react";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    height:"4.3vh",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

export default function SearchBar(
  {setSearchInput, 
   searchOption, 
   setSearchOption, 
   searchInput,
   setRestaurantData,
   isValidSearch,
   setIsValidSearch
  }) {

  const navigate = useNavigate();

  const handleChange = (e) => {
    // setTempSearch(e.target.value);
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
   
    e.preventDefault();
    if (checkInput(searchInput, searchOption) === false) {
        setIsValidSearch(false)
    } else {
      setIsValidSearch(true)
      setRestaurantData([])
      navigate("/api/restaurants")
    }
  };

  const placeHolderLists = (searchOption) => {
    let placeHolder = ""
    if (searchOption === "name") {

     return placeHolder = "Enter a name of restaurant ex) Doma"
    }
    else if (searchOption === "cuisine") {
      return placeHolder = "Enter a name of cuisine ex) American"
    }
    else if (searchOption === "location") {
      return placeHolder = "Enter your preferred location ex) New York City"
    }
    else if (searchOption === "price") {
     return  placeHolder = "Enter price between $ and $$$$ ex) $" 
    }
    else if (searchOption === "diningRestriction") {
      return placeHolder = "Check your preferred dining option ex) Take Out" 
    } else {
      return placeHolder
    }
  }

  const checkInput = (searchInput, searchOption) => {

    if (searchOption === "name" && !searchInput) {
        return false
     }
     else if (searchOption === "cuisine" && !searchInput) {
      return false
     }
     else if (searchOption === "location" && !searchInput) {
      return false
     }
     else if (searchOption === "price" && !searchInput) {
      return false
     }
     else if (searchOption === "diningRestriction" && !searchInput) {
      return false
     }
  }


  return (
    <>
      <form 
        style={{  
        display:"flex",
        justifyContent:"center",
        marginTop:"3vh"
        }}>
        <SelectMenu
          setSearchOption={setSearchOption}
          searchOption={searchOption}
          />
        <Search onChange={handleChange}>
          <SearchIconWrapper>
           <SearchIcon sx={{ color: "white" }} /> 
          </SearchIconWrapper>
       
          <StyledInputBase
            placeholder={ placeHolderLists(searchOption)}
            inputProps={{ "aria-label": "search" }}
            sx={{ color: "black", mt:"1vh"}}
          />  
        </Search>
        <Button 
         variant="contained"
         onClick={handleSubmit}
         sx={{
          backgroundColor:"#FF6534",
          width:"15vh",
          fontFamily: "Merriweather",
          color:"white",
          textAlign:"center",
          fontWeight:"900",
          fontSize:"2.5vh",
          textTransform: "none",
          boxShadow:"none",
           '&:hover': {
          backgroundColor: '#EB4700',
        }
         }}
         >
            Search
        </Button>
      </form>
    </>
  );
}
