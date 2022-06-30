import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function SearchResult({searchInput}) {

    const API = process.env.REACT_APP_API_URL;

    console.log(searchInput)

    const [results, setResults] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          console.log("Fetching API from SearchResult");
    
            const res = await axios.get(`${API}/api/restaurants/${searchInput ? `?searchTerm=${searchInput}` : ""}`)
            setResults(res.data.restaurants)
            console.log(res.data)
        };
        fetchData();
      }, []);
    

  return (
    <div>
        Hello
    </div>
  )
}
