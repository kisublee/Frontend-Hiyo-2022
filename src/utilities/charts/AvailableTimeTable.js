import { Box, Grid, Button } from '@mui/material'
import React, { useState } from 'react'
import ReservationDialog from '../dialogs/ReservationDialog';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function AvailableTimeTable(restaurant) {

  const [open, setOpen] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const restaurantID = restaurant.id;
  const [formInput, setFormInput] = useState(
    { 
      firstName: "", 
      lastName: "", 
      phoneNumber: "", 
      email: "", 
      time: "", 
      numGuests: "", 
      restaurantId: ""
    }
  );

  const getDate = new Date().toLocaleDateString();
  const formatDate = getDate.split("/").reverse().join("-")
  // const getTime = formInput.time && formInput.time.substring(0,5)
  // const timeValue = `${formatDate} ${getTime}:00`

  const handleClickOpen = (e) => {
    setFormInput({...formInput, time: `${formatDate} ${e.target.value.length === 7 ? e.target.value.substring(0,5) : e.target.value.substring(0,4)}:00`})
    setOpen(true);
  };

  console.log(formInput)
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleTakenReservation = () => {
    window.alert("There is no available table for your number of guests at this time.")
  }

  const handleSnackBar = () => {
    setOpenSnackBar(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
    if (restaurant) {
    let openingTime = restaurant.openingTime
    let closingTime = restaurant.closingTime
    const tableList = [];
    if (closingTime === "00:00:00") {
        closingTime = "24:00:00"
    }
    
    const firstClosingNum = closingTime && closingTime. substring(0,2)
    let firstOpeningNum = openingTime && openingTime.substring(0,2)
    let format = ""

    for (let i = firstOpeningNum; i < firstClosingNum; i++) {
        if (openingTime) {
            if (i >= 12) {
                format = Number(i) + ":" + "00" + "PM"
                tableList.push(format)
            } else {
                format = i + ":" + "00" + "AM"
            tableList.push(format)
            }
        }
    }
    return tableList && tableList.map((time, i) => {
        return (
            restaurant.reservations[0] !== null && restaurant.reservations.find((target) => {
              const split = target.time.split("T");
              const getTime = split[1]
              const formatTargetTime = getTime.substring(0,5);
              const compareTime = time && time.substring(0,5);
              let checkTable = ""
              
              if (target.numGuests === 8) {
                 checkTable = "eightPersonTables"
              } else if (target.numGuests === 4) {
                checkTable = "fourPersonTables"
              } else if (target.numGuests === 2) {
                checkTable = "twoPersonTables"
              };

              if ((formatTargetTime === compareTime) && restaurant.tables[checkTable] === 0) {
                return true
              };
            }) ?
            <>
            <Button variant="contained" 
            onClick={handleTakenReservation}
            sx={{
                backgroundColor:"red", 
                color:"white",
                width:"12vh",
                m:0.3,
                '&:hover': {
                    backgroundColor: 'darkRed',
                },
                }}> 
                {time} 
            </Button>
            <ReservationDialog 
              open={open} 
              setOpen={setOpen} 
              handleClose={handleClose}
              formInput={formInput}
              setFormInput={setFormInput}
              time={time}
              restaurantID={restaurantID}
              setOpenSnackBar={setOpenSnackBar}
                />
            </>
            : 
            <>
            <Button variant="contained" 
                onClick={(e) => handleClickOpen(e)}
                value={time}
                sx={{
                    backgroundColor:"#1778CD", 
                    color:"white",
                    width:"12vh",
                    m:0.3,
                    }}
            > 
                {time} 
            </Button>
            <ReservationDialog 
              open={open} 
              setOpen={setOpen} 
              handleClose={handleClose}
              formInput={formInput}
              setFormInput={setFormInput}
              time={time}
              restaurantID={restaurantID}
              setOpenSnackBar={setOpenSnackBar}
            />
            <Snackbar open={openSnackBar} autoHideDuration={4000} onClose={handleSnackBar}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%', boxShadow:"none" }}>
                Your reservation has been sent! Thank you and see you soon!
              </Alert>
            </Snackbar>
            </>
            
        
        )
    })
  }

}
