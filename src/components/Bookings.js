import React from 'react';
import BookingForm from './BookingForm';


function Bookings({ formData, setFormData, pickTime, setPickTime, updatedTimes, setReservations }) {


    return (
        <section>
                <BookingForm formData={formData} setFormData={setFormData} pickTime={pickTime} setPickTime={setPickTime} updatedTimes={updatedTimes} setReservations={setReservations} />
        </section>
    )
}

export default Bookings;