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

function App() {

  const [restaurantData, setRestaurantData] = useState([]);

  console.log(restaurantData)

  return (
   <BrowserRouter>
    <main>
      <NavBar />
      <TopBar />
      <React.Fragment>
        <CssBaseline />
      <Container maxWidth="xl">
      <Routes>
           <Route
              path="/"
              element={
               <Landing   restaurantData={restaurantData}
               setRestaurantData={setRestaurantData}/>
              }
            />
            <Route
              path="/restaurants"
              element={
               <View />
              }
            />
      </Routes>
      </Container>
      </React.Fragment>
    </main>
   </BrowserRouter>
  );
}

export default App;
