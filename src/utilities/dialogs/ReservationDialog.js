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

export default function ReservationDialog({open, setOpen, handleClose}) {

  const API = process.env.REACT_APP_API_URL;

  const navigate = useNavigate()

//   const handleChange = (event) => {
//     console.log(event.target.id, event.target.value);
//      setFormInput({...formInput, [event.target.id]: event.target.value});
//   };

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
        <DialogTitle>Create a restaurant</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill out this form with correct information.
          </DialogContentText>
          <TextField
        //   onChange={handleChange}
        //   value={formInput.name}
          autoFocus
          margin="dense"
          id="name"
          label="name"
          type="text"
          fullWidth
          variant="standard"
        />
          <TextField
            // onChange={(event) => handleChange(event)}
            // value={formInput.description}
            autoFocus
            multiline
            margin="dense"
            id="description"
            label="description"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            // onChange={handleChange}
            // value={formInput.phoneNumber}
            autoFocus
            margin="dense"
            id="phoneNumber"
            label="phone number"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            // onChange={handleChange}
            // value={formInput.openingTime}
            // inputProps={{ pattern: "([01]\d|2[0-3]):?[0-5]\d" }}
            autoFocus
            margin="dense"
            id="openingTime"
            label="opening time ex) 10:00:00"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            // onChange={handleChange}
            // value={formInput.closingTime}
            autoFocus
            margin="dense"
            id="closingTime"
            label="closing time ex) 22:00:00"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            // onChange={handleChange}
            // value={formInput.price}
            autoFocus
            margin="dense"
            id="price"
            label="price between $ and $$$$"
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
