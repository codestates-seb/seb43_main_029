//내부 import
import { SERVER_URL } from '../../config';

//외부 import
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

// 즐겨찾기 큰 식당 이미지
const Bookmark_BigRestaurant_Image = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    AOS.init();

    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/restaurants`);
        const data = response.data;
        setRestaurants(data);
      } catch (error) {
        console.error('식당 데이터를 불러올 수 없습니다', error);
      }
    };
    fetchRestaurants();
  }, []);

  const findHighestBookmark = () => {
    if (restaurants.length === 0) return null;

    const highestBookmarkRestaurant = restaurants.reduce((prev, current) => {
      return current.bookmark > prev.bookmark ? current : prev;
    });

    return highestBookmarkRestaurant;
  };

  const highestBookmarkRestaurant = findHighestBookmark();

  return (
    <>
      {highestBookmarkRestaurant && (
        <BigR_Container
          key={highestBookmarkRestaurant.restaurantId}
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img src={highestBookmarkRestaurant.images} alt={highestBookmarkRestaurant.name} />
        </BigR_Container>
      )}
    </>
  );
};

export default Bookmark_BigRestaurant_Image;

//style
const BigR_Container = styled.section`
  padding-bottom: 2rem;
  width: calc(100% - 20px);
  height: calc(100% - 210px);
  img {
    border-radius: 2px;
    width: 100%;
    height: 100%;
    // 이미지가 뭉개지는 것을 방지
    object-fit: cover;

    cursor: pointer;
    transition: transform 0.5s;
    :hover {
      -ms-transform: scale(1.5); /* IE 9 */
      -webkit-transform: scale(1.5); /* Safari 3-8 */
      transform: scale(1.02);
    }
  }
`;
