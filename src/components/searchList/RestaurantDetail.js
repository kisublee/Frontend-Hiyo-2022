import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import placeHolderCoverImage from "../../media/image 12.png"
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AvailableTimeTable from '../../utilities/charts/AvailableTimeTable'
export default function RestaurantDetail() {

    const API = process.env.REACT_APP_API_URL;
    const [restaurantInfo, setRestaurantInfo] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            console.log("Hitting detail page");
            const res = await axios.get(`${API}/api/restaurants/${id}`);
            setRestaurantInfo(res.data);
          } catch (err) {
            return err;
          }
        };
        fetchData();
      }, []);


    const formatPhoneNumber = (phoneNumber) => {

      if (phoneNumber) {

        const first =  phoneNumber.substring(0,3);
        const middle = phoneNumber.substring(3,6);
        const last = phoneNumber.substring(6,10) 
  
        return (`${first} - ${middle} - ${last}`)
      }

    }

      console.log(restaurantInfo)
  return (
    <div>
        <Box sx={{mt:"30vh"}}>
            <img 
              src={placeHolderCoverImage} 
              style={{width:"100%", objectFit: "cover", height:"55vh"}}
              />
         <Grid container spacing={1}>
            <Grid item lg={7}>
                <Card sx={{ width: "100%"}}>
                <CardContent>
                <Typography gutterBottom variant="h5">
                    {restaurantInfo.name}
                </Typography>
                <Typography sx={{lineHeight:"5vh"}}>
                  <RestaurantIcon fontSize='small'/>: {restaurantInfo.cuisine}    
                  <AttachMoneyIcon fontSize='small' sx={{ml:"1vh"}}/>: {restaurantInfo.price}
                </Typography>
                <Typography>
                    <span style={{fontWeight:"bold"}}>Location</span>: {restaurantInfo.location}
                </Typography>
                <Typography>
                <span style={{fontWeight:"bold"}}>Restaurant Description</span>: {restaurantInfo.description}
                </Typography>
                <Typography>
                <LocalPhoneIcon fontSize='small'/>: {formatPhoneNumber(restaurantInfo.phoneNumber)}
                </Typography>
                </CardContent>
                {/* <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions> */}
                </Card>
            </Grid>
            <Grid item lg={5}> 
                <Card sx={{ width: "100%"}}>
                      <CardContent>
                      <Typography gutterBottom variant="h6">
                        Currently Available Tables
                      </Typography>
                      {restaurantInfo.tables && 
                      <>
                      <Typography>
                      Two person tables: {restaurantInfo.tables.twoPersonTables}
                      </Typography>
                      <Typography>
                      Four person tables: {restaurantInfo.tables.fourPersonTables}
                      </Typography>
                      <Typography>
                      Eight person tables: {restaurantInfo.tables.eightPersonTables}
                      </Typography>
                      </>
                    }
                      </CardContent>

                      <Divider  sx={{mt:1, borderBottomWidth: 5, backgroundColor:"#6AA5FF"}}/>

                      <Box sx={{mt:3, display:"flex", ml:4}}>
                        <Grid container spacing={2}>
                          {/* <Grid item lg={1}> */}
                          {restaurantInfo && AvailableTimeTable(restaurantInfo)}
                          {/* </Grid> */}
                        </Grid>
                      </Box>
                    
                      <CardActions>
                      <Button size="small">Book a </Button>
                      <Button size="small">Learn More</Button>
                      </CardActions>
                  </Card>
              </Grid>
          </Grid>
        </Box>


    </div>
  )
}
