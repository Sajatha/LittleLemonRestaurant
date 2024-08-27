import React, { useReducer, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Highlights from './components/Highlights';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Home from './components/Home';
import Bookings from './components/Bookings';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

const availableTimes = [
  { label: "17:00", value: "17:00" },
  { label: "18:00", value: "18:00" },
  { label: "19:00", value: "19:00" },
  { label: "20:00", value: "20:00" },
  { label: "21:00", value: "21:00" },
  { label: "22:00", value: "22:00" }
];

export function availableTimesReducer(state, action) {
  switch (action.type) {
    case "INITIALIZE_TIMES":
      return action.payload;

    case "UPDATED_TIMES":
      return availableTimes;
      // const { reservations, date } = action.payload;
      // return availableTimes.filter(availableTime => {
      //   const foundReservation = reservations.find(reservation => reservation.date === date && reservation.time === availableTime.value);
      //   return foundReservation === undefined;
      // });

    default:
      return state;
  }
}

export const initializeTimes = () => ({
  type: "INITIALIZE_TIMES",
  payload: availableTimes
});

export const updatedTimes = (selectedDate) => ({
  type: "UPDATED_TIMES",
  payload: { selectedDate }
});

function App() {
  const [availableTimeSlots, dispatch] = useReducer(availableTimesReducer, []);
  const [formData, setFormData] = useState({
    date: "",
    guests: "",
    time: "",
    occasion: ""
  });

  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    dispatch(initializeTimes());
  }, []);

  useEffect(() => {
    if (formData.date) {
      dispatch(updatedTimes(reservations, formData.date));
    }
  }, [formData.date, reservations]);

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hero' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/highlights' element={<Highlights />} />
        <Route path='/bookings' element={<Bookings formData={formData} setFormData={setFormData} updatedTimes={availableTimeSlots} setReservations={setReservations} />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;


// https://github.com/Sajatha/LittleLemon.git