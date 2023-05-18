//내부 import
import { fetchRandomRestaurants } from '../../../../redux/randomRestaurants/actions';

//외부 import
import { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import AOS from 'aos';
import 'aos/dist/aos.css';

// 제일 큰 식당 컴포넌트
const Category_BigRestaurant_Image = ({ fetchRandomRestaurants, restaurants }) => {
  useEffect(() => {
    AOS.init();
    fetchRandomRestaurants();
  }, []);

  return (
    <>
      {restaurants && (
        <BigR_Container
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img src={restaurants.images} alt={restaurants.name} />
        </BigR_Container>
      )}
    </>
  );
};
const mapStateToProps = state => {
  return {
    restaurants: state.randomRestaurants.restaurants[0],
  };
};
export default connect(mapStateToProps, { fetchRandomRestaurants })(Category_BigRestaurant_Image);

//style
const BigR_Container = styled.section`
  padding-bottom: 2rem;
  width: calc(100% - 20px);
  height: 450px;
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
