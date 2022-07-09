import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function EditReservation({reservationDetail, tempRestaurantData, setEdit}) {

    const [input, setInput] = useState({ 
        firstName: reservationDetail.firstName, 
        lastName: reservationDetail.lastName, 
        phoneNumber: reservationDetail.phoneNumber, 
        email: reservationDetail.email, 
        time: reservationDetail.time, 
        numGuests: reservationDetail.numGuests, 
      })

      console.log(input)
    const API = process.env.REACT_APP_API_URL;

    const navigate = useNavigate();

    const handleChange = (event) => {
        setInput({...input, [event.target.id]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submitting");
        axios
          .patch(`${API}/api/reservations/${reservationDetail.id}`, input)
          .then(() => navigate(`/reservations`));
    
      };

    const clickHandler = () => {
        setEdit(false)
    }

    console.log(input)
    console.log(reservationDetail.id)

  return (
    <div>
        <Typography variant='h6' sx={{textAlign:"center", mt:"33vh"}}>
            Edit Your Reservation
        </Typography>
        <Box sx={{width:"100%", display:"flex", justifyContent:"center", mt:"5vh"}}>
        
        <form style={{width:"80vh"}}>
          <TextField
          onChange={handleChange}
          value={input.firstName }
          autoFocus
          margin="dense"
          id="firstName"
          label="first name"
          type="text"
          fullWidth
          variant="standard"
   
        />
          <TextField
            onChange={(event) => handleChange(event)}
            value={input.lastName}
            autoFocus
            multiline
            margin="dense"
            id="lastName"
            label="last name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={(event) => handleChange(event)}
            autoFocus
            margin="dense"
            id="phoneNumber"
            label="phone number"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={(event) => handleChange(event)}
            value={input.email}
            // inputProps={{ pattern: "([01]\d|2[0-3]):?[0-5]\d" }}
            autoFocus
            margin="dense"
            id="email"
            label="email"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={(event) => handleChange(event)}
            value={input.time}
            autoFocus
            margin="dense"
            id="time"
            label="Enter Time Ex) 2022-06-01 19:00:00"
            type="text"
            fullWidth
            variant="standard"
            placeholder='Ex) 2022-06-01 19:00:00'
          />
          <TextField
            onChange={(event) => handleChange(event)}
            value={input.numGuests}
            autoFocus
            margin="dense"
            id="numGuests"
            label="number of guests"
            type="text"
            fullWidth
            variant="standard"
          />
         <Button size="small" onClick={(event) =>handleSubmit(event)}>
                  Submit
        </Button>
        <Button size="small" onClick={clickHandler}>
                  Back to the reservation
        </Button>
        </form>
        </Box>
    </div>
  )
}
