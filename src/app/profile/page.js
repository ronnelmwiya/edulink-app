'use client';

import { useRouter } from 'next/navigation';
import { FaStar } from 'react-icons/fa'; // Import star icon
import Header from '../../components/Header.js';
import styles from './profile.module.css';

const Profile = () => {
  // Dummy tutor data
  const tutor = {
      name: "Tjipuka Ndjoze",
      picture: "pic4.jpg",
      expertise: "Mathematics, Physics",
      reviews: [
          { username: "Alice", comment: "Great tutor!", rating: 5 },
          { username: "Bob", comment: "Very knowledgeable.", rating: 4 },
      ],
      availability: [
          "Monday: 3 PM - 5 PM",
          "Wednesday: 1 PM - 3 PM",
          "Friday: 10 AM - 12 PM",
      ],
  };

  const router = useRouter();

  const toggleChat = () => {
    router.push('/chat');
  }

  const toggleSession = () => {
    router.push('/booking');
  }

  return (
    <div className={styles.profileContainer}>
        <Header />
        <div className={styles.profileDetailsContainer}>
            <img src={tutor.picture} className={styles.profileImage} />
            <h2>{tutor.name}</h2>
        </div>
        <p><strong>Expertise:</strong> {tutor.expertise}</p>
        
        <h3>Reviews</h3>
        <ul className={styles.reviewList}>
            {tutor.reviews.map((review, index) => (
                <li key={index} className={styles.reviewItem}>
                    <strong>{review.username}:</strong> {review.comment} 
                    <span className={styles.reviewStars}>
                        {Array.from({ length: 5 }, (_, i) => (
                            <FaStar key={i} color={i < review.rating ? '#FFD700' : '#ccc'} />
                        ))}
                    </span>
                </li>
            ))}
        </ul>

        <h3>Availability</h3>
        <ul className={styles.availabilityList}>
            {tutor.availability.map((timeSlot, index) => (
                <li key={index} className={styles.availabilityItem}>
                    {timeSlot}
                </li>
            ))}
        </ul>

        <h3>Contact Options</h3>
        <div className={styles.contactOptions}>
            <button className={styles.contactButton} onClick={toggleChat}>Message Tutor</button>
            <button className={styles.contactButton} onClick={toggleSession}>Schedule a Session</button>
        </div>
    </div>
  );
};

export default Profile;