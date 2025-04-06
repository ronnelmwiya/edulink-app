const Profile = () => {
  // Dummy tutor data
  const tutor = {
      name: "John Doe",
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

  return (
      <div className="profile-container">
          <h2>{tutor.name}</h2>
          <p><strong>Expertise:</strong> {tutor.expertise}</p>
          
          <h3>Reviews</h3>
          <ul className="review-list">
              {tutor.reviews.map((review, index) => (
                  <li key={index} className="review-item">
                      <strong>{review.username}:</strong> {review.comment} <em>({review.rating} stars)</em>
                  </li>
              ))}
          </ul>

          <h3>Availability</h3>
          <ul className="availability-list">
              {tutor.availability.map((timeSlot, index) => (
                  <li key={index} className="availability-item">
                      {timeSlot}
                  </li>
              ))}
          </ul>

          <h3>Contact Options</h3>
          <div className="contact-options">
              <button className="contact-button">Message Tutor</button>
              <button className="contact-button">Schedule a Session</button>
          </div>
      </div>
  );
};

export default Profile;