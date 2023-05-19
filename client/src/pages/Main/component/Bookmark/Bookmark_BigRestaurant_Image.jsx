//내부 import
import { BigRestaurantImageContainer } from '../../styled';

//redux
import { fetchBookmarkRestaurants } from '../../../../redux/bookmarkRestaurants/actions';

//외부 import
import { useEffect } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

// 즐겨찾기가 가장 많은 식당 이미지 컴포넌트
// redux에서 서버와 state값을 구조분해할당으로 가져옴
const Bookmark_BigRestaurant_Image = ({ fetchBookmarkRestaurants, restaurants }) => {
  useEffect(() => {
    fetchBookmarkRestaurants();
  }, []);
  return (
    <>
      {restaurants && (
        <BigRestaurantImageContainer
          // Category_BigRestaurant_Image.jsx에서 aos를 실행시키고 있음
          data-aos="fade-right" //이름
          data-aos-offset="500" // 애니메이션 시작할 객체 위치 설정 (default : 120)
          data-aos-duration="1200" // 재생 시간 설정 (default : 400)
          data-aos-once="true" // 스크롤 할 때마다 애니메이션 실행할지, 현재는 한 번만 실행됨.
        >
          <Link to="/restaurant/:restaurantsId">
            <img src={restaurants.images} alt={restaurants.name} />
          </Link>
        </BigRestaurantImageContainer>
      )}
    </>
  );
};

/** 즐겨찾기가 가장 높은 식당 */
const mapStateToProps = state => {
  return {
    restaurants: state.bookmarkRestaurants.restaurants[0],
  };
};

//mapStateToProps를 보내줌으로 서버에서 해당 리턴 데이터(state값)을 받아옴.
export default connect(mapStateToProps, { fetchBookmarkRestaurants })(Bookmark_BigRestaurant_Image);
