//내부 import
import { BigRestaurantImageContainer } from '../../styled';
//redux
import { fetchRandomRestaurants } from '../../../../redux/randomRestaurants/actions';

//외부 import
import { useEffect } from 'react';
import { connect } from 'react-redux';
//이미지 애니메이션
import AOS from 'aos';
import 'aos/dist/aos.css';

// 랜덤 카테고리 중, 별점이 가장 높은 식당 컴포넌트
// redux에서 서버와 state값을 구조분해할당으로 가져옴
const Category_BigRestaurant_Image = ({ fetchRandomRestaurants, restaurants }) => {
  useEffect(() => {
    //최초 렌더시 aos 애니메이션 동작
    AOS.init();
    //최초 렌더시 redux 데이터 받아옴.
    fetchRandomRestaurants();
  }, []);

  return (
    <>
      {restaurants && (
        <BigRestaurantImageContainer
          data-aos="fade-left" //이름
          data-aos-offset="500" // 애니메이션 시작할 객체 위치 설정 (default : 120)
          data-aos-duration="1200" // 재생 시간 설정 (default : 400)
          data-aos-once="true" // 스크롤 할 때마다 애니메이션 실행할지, 현재는 한 번만 실행됨.
        >
          <img src={restaurants.images} alt={restaurants.name} />
        </BigRestaurantImageContainer>
      )}
    </>
  );
};

/** 랜덤카테고리 식당 중, 별점이 가장 높은 값 */
const mapStateToProps = state => {
  return {
    restaurants: state.randomRestaurants.restaurants[0],
  };
};

//mapStateToProps를 보내줌으로 서버에서 리턴 데이터(state값)을 받아옴.
export default connect(mapStateToProps, { fetchRandomRestaurants })(Category_BigRestaurant_Image);
