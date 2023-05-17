import axios from 'axios';
import { useEffect, useState } from 'react';

function RestaurantReview({ restaurantId }) {
  const [initialReviews, setInitialReviews] = useState([]);

  const reviews = initialReviews.filter(el => el.restaurantId === Number(restaurantId));

  const restaurantReviewApi = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/reviews`);
    setInitialReviews(response.data);
  };
  useEffect(() => {
    restaurantReviewApi();
  }, []);

  return (
    <section>
      <h2>리뷰{reviews.length}</h2>
      <ul>
        {reviews &&
          reviews.map((review, idx) => {
            console.log(review);
            return <li key={idx}></li>;
          })}
      </ul>
    </section>
  );
}

export default RestaurantReview;
