'use client';
import { useState } from 'react';
import styles from './booking.module.css';

const BookingSession = () => {
    const [dateTime, setDateTime] = useState('');
    const [error, setError] = useState('');

    const handleBooking = () => {
        if (!dateTime) {
            setError('Please select a date and time.');
            return;
        }
        
        // Handle the booking logic here (e.g., API call)
        console.log(`Session booked for: ${dateTime}`);

        // Reset the state or show a success message
        setError('');
        alert(`Session booked for: ${dateTime}`);
    };

    return (
        <div className="booking-container">
            <h2>Book a Session</h2>
            <div className="date-time-picker">
                <label htmlFor="dateTime">Select Date and Time:</label>
                <input 
                    type="datetime-local" 
                    id="dateTime" 
                    value={dateTime} 
                    onChange={(e) => setDateTime(e.target.value)} 
                    className="border p-2"
                />
            </div>
            {error && <p className="error-message text-red-500">{error}</p>}
            <button 
                className="p-2 bg-green-500 text-white rounded" 
                onClick={handleBooking}
            >
                Confirm Booking
            </button>
        </div>
    );
};

export default BookingSession;