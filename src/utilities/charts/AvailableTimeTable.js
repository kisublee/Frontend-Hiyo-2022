import { Box, Grid, Button } from '@mui/material'
import React from 'react'
import ReservationDialog from '../dialogs/ReservationDialog';

export default function AvailableTimeTable(restaurant) {

    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleTakenReservation = () => {
    window.alert("There is no available table for your number of guests at this time.")
  }

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
    console.log(tableList)
    console.log(restaurant)
    return tableList && tableList.map((time, i) => {
        return (
             restaurant.reservations.find((target) => {
              const split = target.time.split("T")
              const formatTargetTime = split[1].substring(0,5)
              const compareTime = time.substring(0,5)
              console.log(formatTargetTime, compareTime)
              let checkTable = ""
              if (target.numGuests === 8) {
                 checkTable = "eightPersonTables"
              } else if (target.numGuests === 4) {
                checkTable = "fourPersonTables"
              } else if (target.numGuests === 2) {
                checkTable = "twoPersonTables"
              }

              if (formatTargetTime == compareTime && restaurant.tables[checkTable] === 0) {
                return true
              }
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
                }}> {time} 
        </Button>
        <ReservationDialog 
            open={open} 
            setOpen={setOpen} 
            handleClose={handleClose}
            />
            </>: 
            <>
            <Button variant="contained" 
                onClick={handleClickOpen}
                sx={{
                    backgroundColor:"#1778CD", 
                    color:"white",
                    width:"12vh",
                    m:0.3,
                    }}> {time} 
            </Button>
            <ReservationDialog 
                open={open} 
                setOpen={setOpen} 
                handleClose={handleClose}
            />
            </>
            
        
        )
    })
  }

}
