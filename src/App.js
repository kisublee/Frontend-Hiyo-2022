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
import RestaurantDetail from './components/searchList/RestaurantDetail';
import Detail from './pages/Detail';
import Reservation from './pages/Reservation';

function App() {

  const [restaurantData, setRestaurantData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchOption, setSearchOption] = useState("");
  const [isValidSearch, setIsValidSearch] = useState(true)

  console.log("app:", searchInput)
  console.log("app: ", searchOption)
  return (
   <BrowserRouter>
    <main>
      <NavBar 
        setIsValidSearch={setIsValidSearch}
      />
      <TopBar 
        setRestaurantData={setRestaurantData}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        searchOption={searchOption}
        setSearchOption={setSearchOption}
        isValidSearch={isValidSearch}
        setIsValidSearch={setIsValidSearch}
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
             <Route
              path="/restaurants/:id"
              element={
                <Detail />
              }
            />
            <Route
              path="/reservations"
              element={
               <Reservation />
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
