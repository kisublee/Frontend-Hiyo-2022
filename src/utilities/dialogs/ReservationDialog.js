import React from 'react'
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

export default function ReservationDialog({open, setOpen, handleClose, formInput, setFormInput, time}) {

  const API = process.env.REACT_APP_API_URL;

  const navigate = useNavigate()

  const handleChange = (event) => {
    console.log(event.target.id, event.target.value);
     setFormInput({...formInput, [event.target.id]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // axios
    //   .post(`${API}/api/restaurants`, )
    //   .then(() => {
    //     setOpen(false)
    //   })
    //   .catch((err) => console.warn(err));

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
          onChange={handleChange}
          value={formInput.name}
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
            value={formInput.description}
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
            onChange={handleChange}
            value={formInput.phoneNumber}
            autoFocus
            margin="dense"
            id="phoneNumber"
            label="phone number"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={handleChange}
            value={formInput.openingTime}
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
            value={time}
            autoFocus
            margin="dense"
            id="time"
            label="time"
            type="text"
            fullWidth
            variant="standard"
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
