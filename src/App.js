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

// const availableTimes = [
//   { label: "17:00", value: "17:00" },
//   { label: "18:00", value: "18:00" },
//   { label: "19:00", value: "19:00" },
//   { label: "20:00", value: "20:00" },
//   { label: "21:00", value: "21:00" },
//   { label: "22:00", value: "22:00" }
// ];

const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}

const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());

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

const submitAPI = function(formData) {
  return true;
};

const submitForm = (formData) => {
  return submitAPI(formData)
};

export function availableTimesReducer(state, action) {
  switch (action.type) {
    case "INITIALIZE_TIMES":
      return action.payload; // availableTimes

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
  payload: fetchAPI(new Date( date)).map(function(item) { 
    return { label:item, value: item }
  }).filter(availableTime => {
    const foundReservation = reservations.find(reservation => reservation.date === date && reservation.time === availableTime.value);
    return foundReservation === undefined;
  })
});


function App() {
  // const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [availableTimeSlots, dispatch] = useReducer(availableTimesReducer, []);
  const [formData, setFormData] = useState({
    date: "",
    guests: "",
    time: "",
    occasion: ""
  });

  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const temp = initializeTimes();
    dispatch(temp);
  }, []);

  // useEffect(() => {
  //   setAvailableTimeSlots(initializeTimes());
  // }, []);

  // availableTimeSlots - availableTimes - initial load
  // availableTimeSlots - needs update - after some interaction - formData.date - 09-02-2024

  useEffect(() => {
    if (formData.date) {
      const dateObj = fetchAPI(new Date(formData.date))
      console.log(dateObj)
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;


// https://github.com/Sajatha/LittleLemon.git