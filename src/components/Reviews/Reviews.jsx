import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../api/api';
import './Reviews.css';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    async function receiveReviews() {
      const reviews = await getReviews(movieId);
      setReviews(reviews);
    }
    receiveReviews();
  }, []);

  if (reviews && reviews.length !== 0) {
    return (
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <p className="review-author">{review.author}</p>
              <p className="review-text">{review.content}</p>
            </li>
          );
        })}
      </ul>
    );
  }
  return <p>We don't have any reviews for this movie</p>;
};
export default Reviews;
