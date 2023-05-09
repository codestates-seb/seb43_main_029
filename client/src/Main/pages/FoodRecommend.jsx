import styled from 'styled-components';
import FoodRecommendBtn from '../component/FoodRecommendBtn';
const M_FoodRecommend = () => {
  return (
    <M_FoodRecommendContainer>
      <RecommendTitle>오늘 뭐먹지?</RecommendTitle>
      <FoodRecommendBtn />
    </M_FoodRecommendContainer>
  );
};

export default M_FoodRecommend;

//style
const M_FoodRecommendContainer = styled.section`
  background-color: tomato;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RecommendTitle = styled.div`
  border: 1px solid #000;
`;
