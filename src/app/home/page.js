'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/Header.js';
import styles from './dashboard.module.css'; // Assuming you have styles for the dashboard

const HomeDashboard = () => {
    const [tutors, setTutors] = useState([]);
    const [students, setStudents] = useState([]);
    const [ongoingSessions, setOngoingSessions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const fetchedTutors = await fetchTutors();
            const fetchedStudents = await fetchStudents();
            const fetchedSessions = await fetchOngoingSessions();

            setTutors(fetchedTutors);
            setStudents(fetchedStudents);
            setOngoingSessions(fetchedSessions);
        };

        fetchData();
    }, []);

    const filteredTutors = tutors.filter(tutor =>
        tutor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.dashboardContainer}>
            <Header />
            <h2>Available Tutors</h2>
            <input
                type="text"
                placeholder="Search tutors..."
                className={styles.searchBar}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul className={styles.tutorList}>
                {filteredTutors.map((tutor) => (
                    <li key={tutor.id} className={styles.tutorItem}>
                        <img src={tutor.profilePic} alt={tutor.name} className={styles.profilePic} />
                        <div className={styles.tutorDetails}>
                            <h3>{tutor.name}</h3>
                            <p>{tutor.subject}</p>
                        </div>
                    </li>
                ))}
            </ul>

            <h2>Available Students</h2>
            <ul className={styles.studentList}>
                {students.map((student) => (
                    <li key={student.id} className={styles.studentItem}>
                        <img src={student.profilePic} alt={student.name} className={styles.profilePic} />
                        <div className={styles.studentDetails}>
                            <h3>{student.name}</h3>
                            <p>{student.grade}</p>
                        </div>
                    </li>
                ))}
            </ul>

            <h2>Ongoing Sessions</h2>
            <ul className={styles.sessionList}>
                {ongoingSessions.map((session) => (
                    <li key={session.id} className={styles.sessionItem}>
                        <div className={styles.sessionDetails}>
                            <h3>{session.topic}</h3>
                            <p>{session.tutorName} - {session.time}</p>
                        </div>
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
    return [
        { id: 1, name: 'John Doe', subject: 'Math', profilePic: '/pictures/pic1.jpg' },
        { id: 2, name: 'Jane Smith', subject: 'Science', profilePic: '/pictures/pic2.jpg' },
        { id: 3, name: 'Emily Johnson', subject: 'History', profilePic: '/pictures/pic3.jpg' },
        { id: 4, name: 'Michael Brown', subject: 'English', profilePic: '/pictures/pic4.jpg' },
        { id: 5, name: 'Rachel Green', subject: 'Biology', profilePic: '/pictures/pic5.jpg' },
        { id: 6, name: 'Ross Geller', subject: 'Physics', profilePic: '/pictures/pic6.jpg' },
        { id: 7, name: 'Chandler Bing', subject: 'Drama', profilePic: '/pictures/pic7.jpg' },
    ];
};

const fetchStudents = async () => {
    return [
        { id: 1, name: 'Alice Johnson', grade: '8th', profilePic: '/pictures/pic1.jpg' },
        { id: 2, name: 'Bob Brown', grade: '10th', profilePic: '/pictures/pic2.jpg' },
        { id: 3, name: 'Charlie White', grade: '9th', profilePic: '/pictures/pic3.jpg' },
        { id: 4, name: 'Diana Prince', grade: '11th', profilePic: '/pictures/pic4.jpg' },
        { id: 5, name: 'Ethan Hunt', grade: '12th', profilePic: '/pictures/pic5.jpg' },
        { id: 6, name: 'Fiona Gallagher', grade: '7th', profilePic: '/pictures/pic6.jpg' },
        { id: 7, name: 'George Clooney', grade: '10th', profilePic: '/pictures/pic7.jpg' },
    ];
};

const fetchOngoingSessions = async () => {
    return [
        { id: 1, topic: 'Algebra', tutorName: 'John Doe', time: '3:00 PM' },
        { id: 2, topic: 'Biology', tutorName: 'Jane Smith', time: '4:00 PM' },
        { id: 3, topic: 'History', tutorName: 'Emily Johnson', time: '5:00 PM' },
        { id: 4, topic: 'English Literature', tutorName: 'Michael Brown', time: '6:00 PM' },
        { id: 5, topic: 'Advanced Physics', tutorName: 'Ross Geller', time: '2:00 PM' },
    ];
};

export default HomeDashboard;