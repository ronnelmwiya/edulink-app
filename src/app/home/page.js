'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header.js';
import styles from './dashboard.module.css'; // Assuming you have styles for the dashboard

const HomeDashboard = () => {
    const [tutors, setTutors] = useState([]);
    const [students, setStudents] = useState([]);
    const [ongoingSessions, setOngoingSessions] = useState([]);
    const [searchTermTutor, setSearchTermTutor] = useState('');
    const [searchTermStudent, setSearchTermStudent] = useState('');
    const [searchTermSession, setSearchTermSession] = useState('');
    const router = useRouter();

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

    const toggleProfile = () => {
        router.push('/profile');
    }

    const filteredTutors = tutors.filter(tutor =>
        tutor.name.toLowerCase().includes(searchTermTutor.toLowerCase())
    );

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchTermStudent.toLowerCase())
    );

    const filteredSessions = ongoingSessions.filter(session =>
        session.topic.toLowerCase().includes(searchTermSession.toLowerCase())
    );

    return (
        <div className={styles.dashboardContainer}>
            <Header />
            <h2>Available Tutors</h2>
            <input
                type="text"
                placeholder="Search tutors..."
                className={styles.searchBar}
                value={searchTermTutor}
                onChange={(e) => setSearchTermTutor(e.target.value)}
            />
            <ul className={styles.tutorList}>
                {filteredTutors.map((tutor) => (
                    <li key={tutor.id} className={styles.tutorItem} onClick={toggleProfile}>
                        <img src={tutor.profilePic} alt={tutor.name} className={styles.profilePic} />
                        <div className={styles.tutorDetails}>
                            <h3>{tutor.name}</h3>
                            <p>{tutor.subject}</p>
                            <div className={styles.rating}>
                                {[...Array(5)].map((_, index) => (
                                    <span key={index} className={index < Math.floor(tutor.rating) ? styles.filledStar : styles.emptyStar}>★</span>
                                ))}
                                <span className={styles.ratingValue}>{tutor.rating}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <h2>Available Students</h2>
            <input
                type="text"
                placeholder="Search students..."
                className={styles.searchBar}
                value={searchTermStudent}
                onChange={(e) => setSearchTermStudent(e.target.value)}
            />
            <ul className={styles.studentList}>
                {filteredStudents.map((student) => (
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
            <input
                type="text"
                placeholder="Search sessions..."
                className={styles.searchBar}
                value={searchTermSession}
                onChange={(e) => setSearchTermSession(e.target.value)}
            />
            <ul className={styles.sessionList}>
                {filteredSessions.map((session) => (
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
        { id: 1, name: 'Tjipuka Ndjoze', subject: 'Math', profilePic: 'pic4.jpg', rating: 4.5 },
        { id: 2, name: 'Sakaria Shikongo', subject: 'Science', profilePic: 'pic5.jpg', rating: 5.0 },
        { id: 3, name: 'Maria Kapenda', subject: 'History', profilePic: 'pic6.jpg', rating: 4.8 },
        { id: 4, name: 'Elia Tjivinda', subject: 'English', profilePic: 'pic7.jpg', rating: 4.2 },
        { id: 5, name: 'Nerina Ndeitunga', subject: 'Biology', profilePic: 'pic1.jpg', rating: 4.7 },
        { id: 6, name: 'Hendrik Garoeb', subject: 'Physics', profilePic: 'pic2.jpg', rating: 4.6 },
        { id: 7, name: 'Lydia Nghipondoka', subject: 'Drama', profilePic: 'pic3.jpg', rating: 5.0 },
    ];
};

const fetchStudents = async () => {
    return [
        { id: 1, name: 'Anna Kambowe', grade: 'University', profilePic: 'pic2.jpg' },
        { id: 2, name: 'Jonas Amukoto', grade: '10th grade', profilePic: 'pic1.jpg' },
        { id: 3, name: 'Selma Mupetami', grade: '9th', profilePic: 'pic3.jpg' },
        { id: 4, name: 'Tafara Nguvumali', grade: '11th', profilePic: 'pic4.jpg' },
        { id: 5, name: 'Kabelo Ndeitunga', grade: '12th', profilePic: 'pic5.jpg' },
        { id: 6, name: 'Pius Kambunda', grade: 'University', profilePic: 'pic6.jpg' },
        { id: 7, name: 'Rina Shikongo', grade: '10th', profilePic: 'pic7.jpg' },
    ];
};

const fetchOngoingSessions = async () => {
    return [
        { id: 1, topic: 'Algebra', tutorName: 'Tjipuka Ndjoze', time: '3:00 PM' },
        { id: 2, topic: 'Biology', tutorName: 'Nerina Ndeitunga', time: '4:00 PM' },
        { id: 3, topic: 'History', tutorName: 'Maria Kapenda', time: '5:00 PM' },
        { id: 4, topic: 'English Literature', tutorName: 'Elia Tjivinda', time: '6:00 PM' },
        { id: 5, topic: 'Advanced Physics', tutorName: 'Hendrik Garoeb', time: '2:00 PM' },
    ];
};

export default HomeDashboard;