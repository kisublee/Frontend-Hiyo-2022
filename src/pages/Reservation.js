import React from 'react'
import ReservationDetail from '../components/landing/ReservationDetail'
import Reservations from '../components/landing/Reservations'

export default function Reservation({restaurantData}) {
  return (
    <>
        <Reservations restaurantData={restaurantData} />
    </>
  )
}
