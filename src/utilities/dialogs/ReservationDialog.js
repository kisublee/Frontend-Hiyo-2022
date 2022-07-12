import React, { useEffect } from 'react'
import { Box, Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from "axios"
import { useNavigate } from "react-router-dom";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

export default function ReservationDialog({open, setOpen, handleClose, formInput, setFormInput, time, restaurantID, setOpenSnackBar}) {

  const API = process.env.REACT_APP_API_URL;

  const navigate = useNavigate()

  // "time": "2022-06-01 19:00:00", 
  // event.target.id === "price" || event.target.id === "rating"
  // ? setArtist({
  //     ...artist,
  //     [event.target.id]: Number(event.target.value),
  //   })
  // : setArtist({
  //     ...artist,
  //     [event.target.id]: event.target.value,
  //   });

  const getDate = new Date().toLocaleDateString();
  const formatDate = getDate.split("/").reverse().join("-")
  const getTime = time.substring(0,5)
  const timeValue = `${formatDate} ${getTime}:00`

  const handleChange = (event) => {
      setFormInput({...formInput, [event.target.id]: event.target.value});
  };
  console.log("time", time)
console.log("getTime:", getTime)
console.log(timeValue)
  useEffect(() => {
    setFormInput({...formInput, time: timeValue, restaurantId: restaurantID} )
    // setFormInput({...formInput, restaurantId: restaurantID})
  }, [restaurantID])


  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/api/reservations`,formInput )
      .then(() => {
        setOpen(false)
        setOpenSnackBar(true)
      })
      .catch((err) => console.warn(err));
  }

  return (
    <div>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Reservation Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill out this form to make a reservation
          </DialogContentText>
          <TextField
          sx={{visibility:"hidden"}}
          value={restaurantID}
          autoFocus
          margin="dense"
          id="restaurantId"
          label="retaurantId"
          type="text"
          fullWidth
          variant="standard"
          hidden
        />
          <TextField
          onChange={handleChange}
          value={formInput.firstName}
          autoFocus
          margin="dense"
          id="firstName"
          label="first name"
          type="text"
          fullWidth
          variant="standard"
          required
        />
          <TextField
            onChange={(event) => handleChange(event)}
            value={formInput.lastName}
            autoFocus
            multiline
            margin="dense"
            id="lastName"
            label="last name"
            type="text"
            fullWidth
            variant="standard"
            required
          />
          <TextField
            onChange={handleChange}
            value={formInput.phoneNumber}
            autoFocus
            margin="dense"
            id="phoneNumber"
            label="phone number"
            type="text"
            fullWidth
            variant="standard"
            required
          />
          <TextField
            onChange={handleChange}
            value={formInput.email}
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
            onChange={handleChange}
            value={timeValue}
            autoFocus
            margin="dense"
            id="time"
            label="time"
            type="text"
            fullWidth
            variant="standard"
            required
          />
          <TextField
            onChange={handleChange}
            value={formInput.numGuests}
            autoFocus
            margin="dense"
            id="numGuests"
            label="number of guests"
            type="text"
            fullWidth
            variant="standard"
            required
          />
          

       
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
