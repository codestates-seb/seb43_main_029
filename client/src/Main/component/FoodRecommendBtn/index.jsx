import styled from 'styled-components';

// 오늘 뭐먹지 기능 버튼
const FoodRecommendBtn = () => {
  const StyledFoodRecommendBtn = styled.button`
    width: 6em;
    height: 2em;
  `;
  return <StyledFoodRecommendBtn>Click !</StyledFoodRecommendBtn>;
};

export default FoodRecommendBtn;
