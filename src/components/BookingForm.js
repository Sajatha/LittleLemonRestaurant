
import React, { useState } from "react";

const BookingForm = ({ formData, setFormData, updatedTimes, setReservations, submitForm, navigate }) => {

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
            if(formData.guests > 10){
                newErrors.guests = "Number of guests should be less than 10";
            } else if(formData.guests <= 0) {
                newErrors.guests = "Number of guests should be greater than 0";
            }
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
            setReservations(prev => {
                let clone = [...prev];
                clone.push(formData);
                return clone;
            });
            setIsChecked(false)
            setFormData({
                date: "",
                guests: "",
                time: "",
                occasion: ""
            });
            const submitResponse = submitForm(formData);
            if(submitResponse) {
                navigate('/confirmed-booking');
            }else {
                alert("Submission failed.");
            }
        } else {
            alert("Form validation failed");
        }
        
    };

    // after handlesubmit nd form validation, the data is stored in reservation data. so we have to set reservation and setResrvation to store and update data
    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };


    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    }

  // on blur, check valid input

    const enable = (formData.guests !== '') && (formData.date !=='') && (formData.time !=='') && (formData.occasion !=='')
    return (
        
        <form className="form" onSubmit={handleSubmit}>
            <section className="form-container">
                
            <div>
                <label htmlFor="guests">Number of guests:</label>
                <input 
                key={formData.guests}
                type="number"
                min="1" max="10"
                id="guests"
                data-testid="guests"
                name="guests"
                value={formData?.guests}
                placeholder="2"
                aria-label="add number of guests to reserve a table"
                onChange={handleChange}
                onBlur={validateForm}
                />

                {errors?.guests && <span style={{ color: 'red'}}>{errors.guests}</span>}
            </div>
            <div>
                <label htmlFor="date">Select a Date:</label>
                <input
                key={formData.date}
                id="date"
                data-testid="date"
                type="date"
                name="date"
                value={formData?.date}
                placeholder="date"
                aria-label="select a date for the reservation"
                onChange={handleChange}

                required/>
                {errors?.date && <span style={{ color: 'red' }}>{errors.date}</span>}
            </div>
            <div>
                <label htmlFor="time">Select Time:</label>
                <select name="time" id="time"  data-testid="time" value={formData.time} key={formData.time} onChange={handleChange} aria-label="select a time for the reservation">
                    <option key="default" >Time</option>
                    {updatedTimes?.map((availableTime) => <option key={availableTime.value} value={availableTime.value}>{availableTime.label}</option>)}
                </select>
                {errors?.time && <span style={{ color: 'red' }}>{errors.time}</span>}
            </div>
            <div>
                <label htmlFor="occasion">Select an Occasion:</label>
                <select key={formData.occasion} id="occasion"  data-testid="occasion" name="occasion" aria-label="select an occasion for the reservation" value={formData.occasion} onChange={handleChange} placeholder="occasion" >
                    <option key="default-occasion" >Occasion</option>
                    <option key="birthday" value="birthday">Birthday</option>
                    <option key="anniversary" value="anniversary">Anniversary</option>
                </select>
                {errors?.occasion && <span style={{ color: 'red' }}>{errors.occasion}</span>}
            </div>
            <div>
                <label htmlFor="checkbox">
                    <input type="checkbox" key='checkbox' id="checkbox"  data-testid="checkbox" name="agree" required checked={isChecked} onChange={handleCheckboxChange} aria-label="On Click to agree to the cancellation policy"/>   
                        I agree to the cancellation policy
                </label>  
                {isChecked }
                {errors?.checkbox && <span style={{ color: 'red' }}>{errors.checkbox}</span>}
            </div>
            <button type="Submit" id="submit-button" disabled={!isChecked || !enable } aria-disabled={!isChecked || !enable}  data-testid="submit-button" aria-label="On click button to make a reservation" >Make a Reservation!</button>
            </section>
        </form>

    )
}

export default BookingForm;