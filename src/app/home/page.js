'use client';

import { useState, useEffect } from 'react';

import styles from './dashboard.module.css'; // Assuming you have styles for the dashboard

const HomeDashboard = () => {
    const [tutors, setTutors] = useState([]);
    const [students, setStudents] = useState([]);
    const [ongoingSessions, setOngoingSessions] = useState([]);

    // Sample data fetching function (replace with actual data fetching logic)
    useEffect(() => {
        const fetchData = async () => {
            // Replace with your actual data fetching logic
            const fetchedTutors = await fetchTutors();
            const fetchedStudents = await fetchStudents();
            const fetchedSessions = await fetchOngoingSessions();

            setTutors(fetchedTutors);
            setStudents(fetchedStudents);
            setOngoingSessions(fetchedSessions);
        };

        fetchData();
    }, []);

    return (
        <div className={styles.dashboardContainer}>
            
            <h2>Available Tutors</h2>
            <ul className={styles.tutorList}>
                {tutors.map((tutor) => (
                    <li key={tutor.id} className={styles.tutorItem}>
                        {tutor.name} - {tutor.subject}
                    </li>
                ))}
            </ul>

            <h2>Available Students</h2>
            <ul className={styles.studentList}>
                {students.map((student) => (
                    <li key={student.id} className={styles.studentItem}>
                        {student.name} - {student.grade}
                    </li>
                ))}
            </ul>

            <h2>Ongoing Sessions</h2>
            <ul className={styles.sessionList}>
                {ongoingSessions.map((session) => (
                    <li key={session.id} className={styles.sessionItem}>
                        {session.topic} with {session.tutorName} - {session.time}
                    </li>
                ))}
            </ul>

            <div className={styles.quickActions}>
                <h2>Quick Actions</h2>
                <button className={styles.actionButton}>Start New Session</button>
                <button className={styles.actionButton}>View All Sessions</button>
            </div>
        </div>
    );
};

// Sample data fetching functions (replace these with your actual API calls)
const fetchTutors = async () => {
    // Simulated API call
    return [
        { id: 1, name: 'John Doe', subject: 'Math' },
        { id: 2, name: 'Jane Smith', subject: 'Science' },
    ];
};

const fetchStudents = async () => {
    // Simulated API call
    return [
        { id: 1, name: 'Alice Johnson', grade: '8th' },
        { id: 2, name: 'Bob Brown', grade: '10th' },
    ];
};

const fetchOngoingSessions = async () => {
    // Simulated API call
    return [
        { id: 1, topic: 'Algebra', tutorName: 'John Doe', time: '3:00 PM' },
        { id: 2, topic: 'Biology', tutorName: 'Jane Smith', time: '4:00 PM' },
    ];
};

export default HomeDashboard;