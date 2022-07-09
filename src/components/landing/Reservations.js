import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import imageOfRestaurants from '../../staticImages';
import noImage from "../../media/noImage.png"


export default function Reservations({restaurantData}) {

    const [reservationData, setReservationData] = useState([])
    const [tempRestaurantData, setTempRestaurantData] = useState([])

    const API = process.env.REACT_APP_API_URL;

    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`${API}/api/reservations`);
            const tempRes = await axios.get(`${API}/api/restaurants`)
       
            setReservationData(res.data.reservations)
            setTempRestaurantData(tempRes.data.restaurants)
            
        };
        fetchData()
    }, [])

const columns = [
  { field: 'id', headerName: 'ID', width: 300 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: false,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: false,
  },
  {
    field: 'phoneNumber',
    headerName: 'Phone',
    type: 'number',
    width: 150,
    editable: false,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 160,
    editable: false,
  },
  {
    field: 'time',
    headerName: 'Time',
    width: 160,
    editable: false,
  },
  {
    field: 'numGuests',
    headerName: 'Guests Number',
    width: 160,
    editable: false,
  },  
]

const rows = reservationData.map((each) => each)


// Can make this function global
const findRestaurantName = (restaurantId) => {

   const find = tempRestaurantData.find((target) => target.id === restaurantId) 
   if (find) {
    return find.name
   }
}

const phoneFormat = (phoneNumber) => {
    return `${phoneNumber.substring(0,3)}-${phoneNumber.substring(3,6)}-${phoneNumber.substring(6)}`
 }

const handleClick = (id) => {
    navigate(`/reservations/${id}`)
}




  return (
    <Box sx={{height:"300vh"}}>
        <Box sx={{ mt:"30vh", height:"100vh", width:"100%"}}>
        <Typography
            sx={{
                fontFamily: "Merriweather",
                color:"black",
                textTransform: "none",
                textAlign:"center",
                mb:3,
                fontSize: "6.5vh",
                '&:hover': {
                   textShadow: "2px 0 white",
                   boxShadow:"none",
                   color:'#FCADAA'
                       }
            }}
        >
            Quick look at Reservations
        </Typography>
        <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        />
        </Box>
        <Box sx={{mt:"20vh", height:"100vh", width:"100%"}}>
          <Typography
            sx={{
                fontFamily: "Merriweather",
                color:"black",
                textTransform: "none",
                textAlign:"center",
                mb:3,
                fontSize: "6.5vh",
                '&:hover': {
                   textShadow: "2px 0 white",
                   boxShadow:"none",
                   color:'#FCADAA'
                       }
            }}
        >
            Detail
        </Typography>

        <Grid container spacing={0} sx={{overFlowY:"scroll"}} >
           {reservationData.map((reservation) => { 
            return (
                <div>
                    <Grid item lg={3} key={reservation.id}>
                    <Card sx={{ width: "37.3vh", ml:"2vh", mb:"2vh"}}>
                                <CardMedia
                                component="img"
                                alt="restaurant cover image"
                                height="140"
                                image={imageOfRestaurants[findRestaurantName(reservation.restaurantId)] ? imageOfRestaurants[findRestaurantName(reservation.restaurantId)] : noImage}
                                />
                            <CardContent>
                            <Typography gutterBottom variant="h6">
                              {findRestaurantName(reservation.restaurantId).length > 15 ? findRestaurantName(reservation.restaurantId).slice(0,16) + "..." : findRestaurantName(reservation.restaurantId)}
                            </Typography>
                            <Typography gutterBottom variant="h7">
                             Name:   {reservation.firstName} {reservation.lastName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                             Email: {reservation.email ? reservation.email : "N/A"} <br/>
                             Phone: {phoneFormat(reservation.phoneNumber)} 
                            </Typography>
                            </CardContent>
                            <CardActions>
                            <Button size="small" onClick={() => handleClick(reservation.id)}>View More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
            </div>
            )
           })}
        </Grid>
        

        </Box>
    </Box>
  )
}



