import React from 'react';
import BookingForm from './BookingForm';
import { useNavigate } from "react-router-dom";

function Bookings({ formData, setFormData, pickTime, setPickTime, updatedTimes, setReservations, submitForm }) {
    const navigate = useNavigate();

    return (
        <section>
            <BookingForm formData={formData} setFormData={setFormData} pickTime={pickTime} setPickTime={setPickTime} updatedTimes={updatedTimes} setReservations={setReservations} submitForm={submitForm} navigate={navigate} />
        </section>
    )
}

export default Bookings;