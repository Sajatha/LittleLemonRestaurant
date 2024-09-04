
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ formData, setFormData, updatedTimes, setReservations, submitForm }) => {


    const [isChecked, setIsChecked] = useState(false);
    const [errors, setErrors] = useState();



    const isValidGuests = (guests) => {
        return parseInt(guests) >= 1 && parseInt(guests) <= 10;
    };

    const navigate = useNavigate();


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

        setFormData({
            ...formData,
            [name]: value,
        });
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
                <label>Number of guests:</label>
                <input 
                key={formData.guests}
                type="number"
                min="1" max="10"
                id="guests"
                data-testid="guests"
                name="guests"
                value={formData?.guests}
                placeholder="Eg: 2"
                onChange={handleChange}
                // onBlur={() => setTouched(true)}
                onBlur={validateForm}
                />

                {errors?.guests && <span style={{ color: 'red'}}>{errors.guests}</span>}
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
                onChange={handleChange}
                required/>
                {errors?.date && <span style={{ color: 'red' }}>{errors.date}</span>}
            </div>
            <div>
                <label>Select Time:</label>
                <select name="time" id="time"  data-testid="time" value={formData.time} key={formData.time} onChange={handleChange}>
                    <option key="default" >Time</option>
                    {updatedTimes?.map((availableTime) => <option key={availableTime.value} value={availableTime.value}>{availableTime.label}</option>)}
                </select>
                {errors?.time && <span style={{ color: 'red' }}>{errors.time}</span>}
            </div>
            <div>
                <label>Select an Occasion:</label>
                <select key={formData.occasion} id="occasion"  data-testid="occasion" name="occasion" value={formData.occasion} onChange={handleChange} placeholder="occasion" >
                    <option key="default-occasion" >Occasion</option>
                    <option key="birthday" value="birthday">Birthday</option>
                    <option key="anniversary" value="anniversary">Anniversary</option>
                </select>
                {errors?.occasion && <span style={{ color: 'red' }}>{errors.occasion}</span>}
            </div>
            <div>
                <label>
                    <input type="checkbox" key='checkbox' id="checkbox"  data-testid="checkbox" name="agree" required checked={isChecked} onChange={handleCheckboxChange}/>   
                        I agree to the cancellation policy
                </label>  
                {isChecked }
                {errors?.checkbox && <span style={{ color: 'red' }}>{errors.checkbox}</span>}
            </div>
            <button type="Submit" id="submit-button" disabled={!isChecked || !enable}  data-testid="submit-button" >Make a Reservation!</button>
            </section>
        </form>

    )
}

export default BookingForm;