//내부 import
import { fetchHighestBookmarkRestaurant } from '../../../../redux/main/highestBookmark';

//외부 import
import styled from 'styled-components';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';

// 즐겨찾기 큰 식당 이미지
const Bookmark_BigRestaurant_Image = ({
  restaurants,
  isLoading,
  error,
  fetchHighestBookmarkRestaurant,
}) => {
  useEffect(() => {
    AOS.init();
    fetchHighestBookmarkRestaurant();
  }, []);

  if (isLoading) {
    console.log(isLoading);
  }
  if (error) {
    console.log(error);
  }

  return (
    <>
      <BigR_Container
        data-aos="fade-right"
        data-aos-offset="500"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <img src={restaurants.images} alt={restaurants.name} />
      </BigR_Container>
    </>
  );
};
const mapStateToProps = state => ({
  restaurants: state.restaurants,
  isLoading: state.isLoading,
  error: state.error,
});

export default connect(mapStateToProps, { fetchHighestBookmarkRestaurant })(
  Bookmark_BigRestaurant_Image
);

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
