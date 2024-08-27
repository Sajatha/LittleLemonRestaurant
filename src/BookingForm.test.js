import { fireEvent, render, screen, within } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import React from "react";


describe("BookingForm", () => {
    const handleSubmit = jest.fn();
    const setFormData = jest.fn();
    const setReservations = jest.fn();
    const formData = {date: "", guests: "", time: "", occasion: ""};
    const updatedTimes = [
        {label: "17:00", value: "17:00"},
        {label: "18:00", value: "18:00"},
        {label: "19:00", value: "19:00"},
        {label: "20:00", value: "20:00"},
        {label: "21:00", value: "21:00"},
        {label: "22:00", value: "22:00"}
    ];

    beforeEach(() => {
        handleSubmit.mockClear();
        
    });

    it('submit button is called when all fields pass validation', () => {
        const {getByText, getByRole, getByTestId} = render(<BookingForm  formData = {formData} setFormData = {setFormData} updatedTimes = {updatedTimes} setReservations = {setReservations}   />);

        expect(getByText("Number of guests:")).toBeInTheDocument();
        expect(getByText("Select a Date:")).toBeInTheDocument();
        expect(getByText("Select Time:")).toBeInTheDocument();
        expect(getByText("Select an Occasion:")).toBeInTheDocument();
        expect(getByText("I agree to the cancellation policy")).toBeInTheDocument();


        expect(getByTestId("guests")).toBeInTheDocument();
        expect(getByTestId("date")).toBeInTheDocument();
        expect(getByTestId("time")).toBeInTheDocument();
        expect(getByTestId("occasion")).toBeInTheDocument();
        expect(getByTestId("checkbox")).toBeInTheDocument();
        expect(getByTestId("submit-button")).toBeInTheDocument();
    });

    it('updates on change', () => {
        const {getByTestId} = render(<BookingForm formData={formData} setFormData={setFormData} updatedTimes={updatedTimes} setReservations={setReservations} />);

        const guests = getByTestId("guests");
        fireEvent.change(guests, {target: { value: guests }});

        const date = getByTestId("date");
        fireEvent.change(date, {target: { value: date }});

        const time = getByTestId("time");
        fireEvent.change(time, {target: { value: time }});

        const occasion = getByTestId("occasion");
        fireEvent.change(occasion, {target: { value: occasion }});

        const checkbox = getByTestId("checkbox");
        fireEvent.change(checkbox, {target: { value: checkbox }});

        const submit = getByTestId("submit-button");
        fireEvent.change(submit, {target: { value: submit }});
    })




});













//     test("user is able to submit the form only after filling all the input fields and checking the checkbox", () => {
//         const guests = 3;
//         const date = "12-12-2024";
//         const time = "18:00";
//         const occasion = "birthday";
//         const handleSubmit = jest.fn();
//         render(<BookingForm onSubmit={handleSubmit} />);

//         const numberofGuests = screen.getByLabelText(/Number of guests:/);
//         fireEvent.change(numberofGuests, {target: {value: guests}});

//         const reservationDate = screen.getByLabelText(/Select a Date:/);
//         fireEvent.change(reservationDate, {target: {value: date}});

//         const reservationTime = screen.getByLabelText(/Select Time:/);
//         fireEvent.change(reservationTime, {target: {value: time}});

//         const reservationOccasion = screen.getByLabelText(/Select an Occasion:/);
//         fireEvent.change(reservationOccasion, {target: {value: occasion}});

//         const submitButton = screen.getByRole("button");
//         fireEvent.click(submitButton);


//         expect(handleSubmit).toHaveBeenCalledWith({
//             guests,
//             date,
//             time,
//             occasion
//         });
        
    // });



