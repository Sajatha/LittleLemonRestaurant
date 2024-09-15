import React, { useReducer, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Highlights from './components/Highlights';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Home from './components/Home';
import Bookings from './components/Bookings';
import About from './components/About';
import Footer from './components/Footer';
import ConfirmedBooking from './components/ConfirmedBooking';
import './App.css';

const seededRandom = (seed) => {
  const m = 2**35 - 31;
  const a = 185852;
  let s = seed % m;
  return () => (s = s * a % m) / m;
}

export const fetchAPI = (date) => {
  const result = [];
  const random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ':00');
      }
      if(random() < 0.5) {
          result.push(i + ':30');
      }
  }
  return result;
};

const submitAPI = (formData) => true;

const submitForm = (formData) => submitAPI(formData);

export function availableTimesReducer(state, action) {
  switch (action.type) {
    case "INITIALIZE_TIMES":
      return action.payload;
    case "UPDATED_TIMES":
      return action.payload;
    default:
      return state;
  }
}

export const initializeTimes = () => ({
  type: "INITIALIZE_TIMES",
  payload: fetchAPI(new Date()).map(function(item) { 
    return { label:item, value: item }
  })
});

export const updatedTimes = (reservations, date) => ({
  type: "UPDATED_TIMES",
  payload: fetchAPI(new Date(date)).map(function(item) { 
    return { label:item, value: item }
  }).filter(availableTime => {
    const foundReservation = reservations.find(reservation => reservation.date === date && reservation.time === availableTime.value);
    return foundReservation === undefined;
  })
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
      const times = updatedTimes(reservations, formData.date);
      dispatch(times);
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
        <Route path='/bookings' element={<Bookings formData={formData} setFormData={setFormData} updatedTimes={availableTimeSlots} setReservations={setReservations} submitForm={submitForm} />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/confirmed-booking' element={<ConfirmedBooking />} />
        <Route path='/order-online' element={<>Order Online</>} />
        <Route path='/login' element={<>Login</>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;