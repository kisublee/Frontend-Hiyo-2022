import { useState, useEffect } from 'react';

import axios from "axios"

import './App.css';
import NavBar from './components/navigation/NavBar';
import TopBar from './components/topbar/TopBar';

function App() {

  const [restaurantList, setRestaurantList] = useState([]);

  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching API");
      const res = await axios.get(`${API}/api/restaurants`);
      setRestaurantList(res.data)
      console.log("res is: ", res)
    };
    fetchData();
  }, []);

  return (
   <main>
    <NavBar />
    <TopBar />
    {restaurantList.restaurants && restaurantList.restaurants.map((each) => {
      return (
        <div key={each.id}>
          <p>{each.name}</p>
          <p>{each.cuisine}</p>
          <div>{each.price}</div>
        </div>
      )
    })}

   </main>
  );
}

export default App;
