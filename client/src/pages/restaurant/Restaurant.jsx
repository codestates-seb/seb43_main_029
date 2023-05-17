import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Restaurant() {
  const { id } = useParams();
  const [restaurants, setRestaurants] = useState({});
  const {
    // restaurantId,
    // name,
    // phone,
    // resDay,
    // score,
    // address,
    // bookmark,
    // businessDay,
    // categoryName,
    imageList,
    // menuList,
  } = restaurants;

  const restaurantApi = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/restaurants/${id}`);
    setRestaurants(response.data);
  };

  useEffect(() => {
    restaurantApi();
  }, []);
  console.log(restaurants);
  return (
    <>
      <section>
        <h1>식당상세페이지</h1>
        <div>
          <ul>
            {imageList.map((image, idx) => {
              return (
                <li key={idx}>
                  <img src={image.url} alt="name" />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Restaurant;
