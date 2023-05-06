import styled from 'styled-components';
import FoodRecommendBtn from '../../component/FoodRecommendBtn';

const FoodRecommendMain = () => {
  //시맨틱 section 사용
  const StyledFoodRecommendMain = styled.section`
    background-color: tomato;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const StyledRecoBox = styled.span`
    background-color: cornflowerblue;
  `;
  return (
    <StyledFoodRecommendMain>
      <StyledRecoBox>오늘 뭐먹지?</StyledRecoBox>
      <FoodRecommendBtn />
    </StyledFoodRecommendMain>
  );
};

export default FoodRecommendMain;
