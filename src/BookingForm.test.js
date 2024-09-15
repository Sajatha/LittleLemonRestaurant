import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { describe, jest, test, expect } from '@jest/globals'
import React from 'react';

describe('booking form', () => {

  const mockSetFormData = jest.fn();
  const mockSetReservations = jest.fn();
  const mockSubmitForm = jest.fn(() => true);
  const renderBookingsForm = (date = '', guests = '', time = '', occasion = '') => {
    render(
      <BookingForm
        formData={{
          date,
          guests,
          time,
          occasion
        }}
        setFormData={mockSetFormData}
        updatedTimes={[]}
        setReservations={mockSetReservations}
        submitForm={mockSubmitForm}
        navigate={jest.fn}
      />);
  }

    test('should navigate on successful form submission', () => {
      renderBookingsForm()
  });

  test('should have required attribute on input fields', () => {
    renderBookingsForm();
    
    // Check if 'required' is present for the date input
    expect(screen.getByTestId('date')).toHaveAttribute('required');

    // Check if 'required' is present for the checkbox
    expect(screen.getByTestId('checkbox')).toBeRequired();

    // Check if 'min' and 'max' attributes are present for guests input
    expect(screen.getByTestId('guests')).toHaveAttribute('min', '1');
    expect(screen.getByTestId('guests')).toHaveAttribute('max', '10');
  });

  test('should have correct type attributes on input fields', () => {
    renderBookingsForm();
      
      // Check the type of the date input
      expect(screen.getByTestId('date')).toHaveAttribute('type', 'date');
    
      // Check the type of the number input
      expect(screen.getByTestId('guests')).toHaveAttribute('type', 'number');
  });  

  test('should validate form fields correctly', () => {
    
    renderBookingsForm();
    
    
    // Fill the form with valid data
    fireEvent.change(screen.getByTestId('guests'), { target: { value: '4' } });
    fireEvent.change(screen.getByTestId('date'), { target: { value: '2024-09-10' } });
    fireEvent.change(screen.getByTestId('time'), { target: { value: '18:00' } });
    fireEvent.change(screen.getByTestId('occasion'), { target: { value: 'Anniversary' } });
    
    // Simulate form submission
    fireEvent.click(screen.getByTestId('submit-button'));
    
    // Check that there are no validation errors
    expect(screen.queryByText(/Number of guests is required/i)).toBeNull();
    expect(screen.queryByText(/Date is required/i)).toBeNull();
    expect(screen.queryByText(/Time is required/i)).toBeNull();
    expect(screen.queryByText(/Occasion is required/i)).toBeNull();
  });

  test('should show validation errors for invalid inputs', () => {
    
    renderBookingsForm(); 
    // Leave fields empty and submit button is disabled
    expect(screen.getByTestId('submit-button')).toBeDisabled();
    fireEvent.change(screen.getByTestId('guests'), { target: { value: '4' } });
    expect(screen.getByTestId('submit-button')).toBeDisabled();
    fireEvent.change(screen.getByTestId('date'), { target: { value: '2024-09-10' } });
    expect(screen.getByTestId('submit-button')).toBeDisabled();
    fireEvent.change(screen.getByTestId('time'), { target: { value: '18:00' } });
    expect(screen.getByTestId('submit-button')).toBeDisabled();
    fireEvent.change(screen.getByTestId('occasion'), { target: { value: 'Anniversary' } });
    fireEvent.click(screen.getByTestId('submit-button'));
    expect(mockSetFormData).toBeCalledTimes(4);

  });
});