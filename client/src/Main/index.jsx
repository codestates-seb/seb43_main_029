import styled from 'styled-components';
import FoodRecommendMain from './pages/FoodRecommendMain';
import CategoryMain from './pages/CategoryMain';
import BookmarkMain from './pages/BookmarkMain';
import ReviewMain from './pages/ReviewMain';

// 메인 페이지를 감싸는 컴포넌트
const Main = () => {
  // 역할 : 페이지들을 감쌈
  // 시맨틱 main 사용

  //컨테이너 넣을까 말까
  const StyledMain = styled.main``;
  return (
    <StyledMain>
      <FoodRecommendMain />
      <CategoryMain />
      <BookmarkMain />
      <ReviewMain />
    </StyledMain>
  );
};

export default Main;
