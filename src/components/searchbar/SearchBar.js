import SearchIcon from "@mui/icons-material/Search";

import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


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

export default function SearchBar({setSearchInput}) {

  const navigate = useNavigate();

  const handleChange = (e) => {
    // setTempSearch(e.target.value);
    setSearchInput(e.target.value);
  };


  const handleSubmit = (e) => {

    e.preventDefault();
    navigate("/api/restaurants")
  };

  return (
    <>
      <form 
        onSubmit={handleSubmit} 
        style={{  
        display:"flex",
        justifyContent:"center",
        marginTop:"3vh"
        }}>
        <Search onChange={handleChange}>
          <SearchIconWrapper>
            <SearchIcon sx={{ color: "white" }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Restaurants, Location, or Cuisine"
            inputProps={{ "aria-label": "search" }}
            sx={{ color: "black"}}
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
