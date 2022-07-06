import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';



export default function Reservations() {

    const [reservationData, setReservationData] = useState([])

    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`${API}/api/reservations`);
            console.log(res)
            setReservationData(res.data.reservations)
        };
        fetchData()
    }, [])

const columns = [
  { field: 'id', headerName: 'ID', width: 300 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'phoneNumber',
    headerName: 'Phone',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 160,
    editable: true,
  },
  {
    field: 'time',
    headerName: 'Time',
    width: 160,
    editable: true,
  },
  {
    field: 'numGuests',
    headerName: 'Guests Number',
    width: 160,
    editable: true,
  },
]

const rows = reservationData.map((each) => each)
    
  return (
    <div>
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
            List of Reservations
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
    </div>
  )
}



