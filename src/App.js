import { useState, useEffect } from 'react';

import axios from "axios"

import './App.css';

function App() {

  const [testArr, setTestArr] = useState([]);

  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching API");
      const res = await axios.get(`${API}/api/restaurants`);
      setTestArr(res.data)
      console.log("testData: ", testArr)
      console.log("res is: ", res)
    };
    fetchData();
  }, []);

  // const testingMap = testData.map((each) => {
  //   <div>
  //     <p>{each.name}</p>
  //   </div>
  // })

  // console.log("outside :", testArr.restaurants)
  // console.log(testData.restaurants[0].name)
  return (
   <div>
    {testArr.restaurants && testArr.restaurants.map((each) => {
      return (
        <div key={each.id}>
          <p>{each.name}</p>
          <p>{each.cuisine}</p>
          <div>{each.price}</div>
        </div>
      )
    })}

   </div>
  );
}

export default App;
