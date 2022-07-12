import React, { useEffect, useState } from 'react'
//MUI
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Box} from '@mui/material';
//Medias & CSS 
import imageOfRestaurants from '../../staticImages';
import noImage from "../../media/noImage.png"
import EditIcon from '@mui/icons-material/Edit';
import CallIcon from '@mui/icons-material/Call';
import '../../styles/ReservationDetail.css';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//Importing components
import EditReservation from '../../pages/EditReservation';
//Others
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ReservationDetail() {

    const [reservationDetail, setReservationDetail] = useState([]);
    const [tempRestaurantData, setTempRestaurantData] = useState([]);
    const [edit, setEdit] = useState(false);

    const API = process.env.REACT_APP_API_URL;

    const [expanded, setExpanded] = React.useState(false);
    const singleId = useParams()

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`${API}/api/reservations/${singleId.id}`)
            const tempRes = await axios.get(`${API}/api/restaurants`)
            setReservationDetail(res.data)
            setTempRestaurantData(tempRes.data.restaurants)
        }
        fetchData()
    }, [])
    
    const findRestaurantName = (restaurantId) => {

        const find = tempRestaurantData.find((target) => target.id === restaurantId) 
        if (find) {
         return find.name
        }
     }

     const phoneFormat = (phoneNumber) => {
        return `${phoneNumber.substring(0,3)}-${phoneNumber.substring(3,6)}-${phoneNumber.substring(6)}`
     }
     
     const handleClick = () => {
        setEdit(true)
     }

     const handleDelete = () => {
        axios
          .delete(`${API}/api/reservations/${singleId.id}`)
          .then(() => navigate("/reservations"))
          .catch((error) => console.warn(error));
      };

    return (
        !edit ?
            <Box sx={{mt:"40vh", height:"auto", display:"flex", justifyContent:"center"}}>
                <Card sx={{ maxWidth: 455 }}>
                    <CardHeader
                    title={findRestaurantName(reservationDetail.restaurantId)}
                    />
                    <CardMedia
                    component="img"
                    height="194"
                    image={
                        imageOfRestaurants[findRestaurantName(reservationDetail.restaurantId)] 
                        ? 
                        imageOfRestaurants[findRestaurantName(reservationDetail.restaurantId)] 
                        : 
                        noImage}
                    alt="restaurant_image"
                    />
                        <CardContent>
                            <Typography variant="h6">
                                    Guest First Name: 
                                    <span className='reservation_list_item'>
                                        {reservationDetail.firstName}
                                    </span>
                                    <br/>
                                    Guest Last Name: 
                                    <span className='reservation_list_item'>
                                        {reservationDetail.lastName}
                                    </span>
                            </Typography>
                            <Typography variant="h6">
                                    Email: 
                                        <span className='reservation_list_item'>{
                                        reservationDetail.email 
                                        ?
                                        reservationDetail.email 
                                        :
                                        "N/A"} 
                                        </span>
                                        <br/>
                                    Phone: 
                                        <span className='reservation_list_item'>{
                                        reservationDetail.phoneNumber && phoneFormat(reservationDetail.phoneNumber)} 
                                        </span>
                            </Typography>
                            <Typography variant="h6">
                                    Guest Number: 
                                        <span className='reservation_list_item'>
                                        {reservationDetail.numGuests}
                                        </span>
                            </Typography>
                            <Typography variant="h6">
                                    Reservation Date: 
                                        <span className='reservation_list_item'>
                                        {
                                        reservationDetail.time 
                                        && 
                                        reservationDetail.time.split("").slice(0,10).join("")
                                        }
                                        </span>
                                        <br/>
                                    Reservation Time: 
                                        <span className='reservation_list_item'>
                                        {
                                        reservationDetail.time 
                                        && 
                                        reservationDetail.time.split("").slice(12,19).join("")
                                        }
                                        </span>
                                        <br/>
                                    Reservation Made on: 
                                    <span className='reservation_list_item'>
                                        {
                                        reservationDetail.createdAt 
                                        && reservationDetail.createdAt.split("").slice(0,10).join("") + " at "} 
                                        {
                                        reservationDetail.createdAt 
                                        && reservationDetail.createdAt.split("").slice(12,19).join("")
                                        }
                                    </span>
                                    <br/>
                                    Reservation ID:
                                    <br/>
                                    <span className='reservation_list_item'>
                                        {reservationDetail.id}
                                    </span>
                            </Typography>
                        </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="edit" onClick={() => handleClick()}>
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="contact_call">
                            <CallIcon />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={() => handleDelete()}>
                            <DeleteIcon />
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Note:</Typography>
                            <Typography paragraph>
                            Hi, I am planning on throwing a surprise birthday party for my friend, Billy.
                            I am bringing a cake with me. Can you guys bring it to our table 30 mins
                            after we are seated? Thank you!
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </Box> 
        :
    <EditReservation    
    reservationDetail={reservationDetail}
    tempRestaurantData={tempRestaurantData}
    setEdit={setEdit}
    />
    );
}
