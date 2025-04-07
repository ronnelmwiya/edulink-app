'use client';
import { useState } from 'react';
import Header from '../../components/Header.js';
import styles from './booking.module.css';

const BookingSession = () => {
    const [dateTime, setDateTime] = useState('');
    const [subject, setSubject] = useState('');
    const [tutor, setTutor] = useState('');
    const [duration, setDuration] = useState('30'); // Default duration
    const [notes, setNotes] = useState('');
    const [error, setError] = useState('');

    const handleBooking = () => {
        if (!dateTime || !subject || !tutor) {
            setError('Please fill in all required fields.');
            return;
        }
        
        // Handle the booking logic here (e.g., API call)
        console.log(`Session booked for ${subject} with ${tutor} on ${dateTime} for ${duration} minutes.`);
        
        // Reset the state or show a success message
        setError('');
        alert(`Session booked for ${subject} with ${tutor} on ${dateTime} for ${duration} minutes.`);
    };

    return (
        <div className={styles.bookingContainer}>
            <Header />
            <h2>Book a Session</h2>
            <div className={styles.dateTimePicker}>
                <label htmlFor="dateTime">Select Date and Time:</label>
                <input 
                    type="datetime-local" 
                    id="dateTime" 
                    value={dateTime} 
                    onChange={(e) => setDateTime(e.target.value)} 
                />
            </div>
            <div className={styles.subjectPicker}>
                <label htmlFor="subject">Subject:</label>
                <select 
                    id="subject" 
                    value={subject} 
                    onChange={(e) => setSubject(e.target.value)}
                >
                    <option value="">Select Subject</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Biology">Biology</option>
                    {/* Add more subjects as needed */}
                </select>
            </div>
            <div className={styles.tutorPicker}>
                <label htmlFor="tutor">Select Tutor:</label>
                <select 
                    id="tutor" 
                    value={tutor} 
                    onChange={(e) => setTutor(e.target.value)}
                >
                    <option value="">Select Tutor</option>
                    <option value="John Doe">John Doe</option>
                    <option value="Jane Smith">Jane Smith</option>
                    {/* Add more tutors as needed */}
                </select>
            </div>
            <div className={styles.durationPicker}>
                <label htmlFor="duration">Duration (minutes):</label>
                <select 
                    id="duration" 
                    value={duration} 
                    onChange={(e) => setDuration(e.target.value)}
                >
                    <option value="30">30</option>
                    <option value="60">60</option>
                    <option value="90">90</option>
                </select>
            </div>
            <div className={styles.notes}>
                <label htmlFor="notes">Additional Notes:</label>
                <textarea 
                    id="notes" 
                    value={notes} 
                    onChange={(e) => setNotes(e.target.value)} 
                    placeholder="Any specific requests or notes..."
                />
            </div>
            {error && <p className={styles.errorMessage}>{error}</p>}
            <button 
                className={styles.confirmButton} 
                onClick={handleBooking}
            >
                Confirm Booking
            </button>
        </div>
    );
};

export default BookingSession;