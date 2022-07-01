import { useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import axios from "axios"

import './App.css';
import NavBar from './components/navigation/NavBar';
import TopBar from './components/topbar/TopBar';
import Landing from './pages/Landing';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import View from './pages/View';
import Footer from './components/navigation/Footer';

function App() {

  const [restaurantData, setRestaurantData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchOption, setSearchOption] = useState("");

  console.log("app:", searchInput)
  console.log("app: ", searchOption)
  return (
   <BrowserRouter>
    <main>
      <NavBar />
      <TopBar 
        setRestaurantData={setRestaurantData}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        searchOption={searchOption}
        setSearchOption={setSearchOption}
        />
      <React.Fragment>
        <CssBaseline />
      <Container maxWidth="xl">
      <Routes>
           <Route
              path="/"
              element={
               <Landing  
               restaurantData={restaurantData}
               setRestaurantData={setRestaurantData}/>
              }
            />
            <Route
              path="/api/restaurants"
              element={
               <View 
                searchInput={searchInput} 
                setSearchInput={setSearchInput}
                searchOption={searchOption}
                setSearchOption={setSearchOption}
                restaurantData={restaurantData}
                setRestaurantData={setRestaurantData}
                />
              }
            />
      </Routes>
      </Container>
      </React.Fragment>
      <Footer />
    </main>
   </BrowserRouter>
  );
}

export default App;
