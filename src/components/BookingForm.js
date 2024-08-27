
import React from "react";
import { useState } from "react";




const BookingForm = ({ formData, setFormData, updatedTimes, setReservations }) => {


    const [isChecked, setIsChecked] = useState(false);
    const [errors, setErrors] = useState();



    const isValidGuests = (guests) => {
        return parseInt(guests) >= 1 && parseInt(guests) <= 10;
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.guests) {
            newErrors.guests = "Number of guests is required";
        } else if (!isValidGuests(formData.guests)) {
            newErrors.guests = "Number of guests should be less than 10";
        }

        if (!formData.date) {
            newErrors.date = "Date is required";
        }
        if (!formData.time) {
            newErrors.time = "Time is required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

   
    if(errors && Object.keys(errors).length >0) {
        console.log(errors);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = validateForm();
        if(isValid) {
            alert("Form submitted", formData);
            setReservations(prev => {
                let clone = [...prev];
                clone.push(formData);
                return clone;
            });
            setFormData({
                date: "",
                guests: "",
                time: "",
                occasion: ""
            })
            setIsChecked(false)
        } else {
            alert("Form validation failed");
        }
    };

    // after handlesubmit nd form validation, the data is stored in reservation data. so we have to set reservation and setResrvation to store and update data
    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    }

    return (
        
        <form className="form" onSubmit={handleSubmit}>
            <section className="form-container">
                
            <div>
                <label>Number of guests:</label>
                <input 
                key={formData.guests}
                id="guests"
                data-testid="guests"
                type="number"
                name="guests"
                value={formData?.guests}
                placeholder="Eg: 2"
                onChange={handleChange}/>
                {errors?.guests && <div className="error">{errors.guests}</div>}
            </div>
            <div>
                <label>Select a Date:</label>
                <input
                key={formData.date}
                id="date"
                data-testid="date"
                type="date"
                name="date"
                value={formData?.date}
                placeholder="date"
                onChange={handleChange}/>
                {errors?.date && <div className="error">{errors.date}</div> }
            </div>
            <div>
                <label>Select Time:</label>
                <select name="time" id="time"  data-testid="time" value={formData.time} key={formData.time} onChange={handleChange}>
                    <option key="default" >Time</option>
                    {updatedTimes?.map((availableTime) => <option key={availableTime.value} value={availableTime.value}>{availableTime.label}</option>)}
                </select>
                {errors?.time && <div className="error">{errors.time}</div>}
            </div>
            <div>
                <label>Select an Occasion:</label>
                <select key={formData.occasion} id="occasion"  data-testid="occasion" name="occasion" value={formData.occasion} onChange={handleChange} placeholder="occasion">
                    <option key="default-occasion" >Occasion</option>
                    <option key="birthday" value="birthday">Birthday</option>
                    <option key="anniversary" value="anniversary">Anniversary</option>
                </select>
            </div>
            <div>
             <label>
               <input type="checkbox" id="checkbox"  data-testid="checkbox" name="agree" required checked={isChecked} onChange={handleCheckboxChange}/>   
                    I agree to the cancellation policy
                </label>  
                {isChecked }
                {errors?.guests && <div className="error">{errors.guests}</div>}
            </div>
            <button type="Submit" id="submit-button"  data-testid="submit-button" >Make a Reservation!</button>
            </section>
        </form>

    )
}

export default BookingForm;