import styled from 'styled-components';
import M_FoodRecommend from './pages/FoodRecommend';
import M_Category from './pages/Category';
import M_Bookmark from './pages/Bookmark';
import M_Review from './pages/Review';

// 메인 페이지를 감싸는 컴포넌트
const Main = () => {
  return (
    <M_Container>
      <M_FoodRecommend />
      <M_Category />
      <M_Bookmark />
      <M_Review />
    </M_Container>
  );
};

export default Main;

//style
const M_Container = styled.main``;
