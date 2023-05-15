//내부 import
// import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { SERVER_URL } from '../config';
import axios from 'axios';

//외부 import
import AOS from 'aos';
import 'aos/dist/aos.css';

// 제일 큰 식당 컴포넌트
const Category_BigRestaurant_Image = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    AOS.init();

    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/restaurants`);
        const { data } = response;
        const randomIndex = Math.floor(Math.random() * data.length);
        setRestaurants(randomIndex);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(`${restaurants}`);
  // const findHighestScore = () => {
  //   if (restaurants.length === 0) return null;

  //   const highestScoreRestaurant = restaurants.reduce((prev, current) => {
  //     return current.score > prev.score ? current : prev;
  //   });

  //   return highestScoreRestaurant;
  // };

  // const highestScoreRestaurant = findHighestScore();

  return (
    <>
      {/* {highestScoreRestaurant && (
        <BigR_Container
          key={highestScoreRestaurant.restaurantId}
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img src={highestScoreRestaurant.images} alt={highestScoreRestaurant.name} />
        </BigR_Container>
      )} */}
    </>
  );
};

export default Category_BigRestaurant_Image;

//style
// const BigR_Container = styled.section`
//   padding-bottom: 2rem;
//   width: calc(100% - 20px);
//   height: calc(100% - 210px);
//   img {
//     border-radius: 2px;
//     width: 100%;
//     height: 100%;
//     // 이미지가 뭉개지는 것을 방지
//     object-fit: cover;

//     cursor: pointer;
//     transition: transform 0.5s;
//     :hover {
//       -ms-transform: scale(1.5); /* IE 9 */
//       -webkit-transform: scale(1.5); /* Safari 3-8 */
//       transform: scale(1.02);
//     }
//   }
// `;
