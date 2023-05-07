import styled from 'styled-components';

const M_FoodRecommend = () => {
  //시맨틱 section 사용
  const M_FoodRecommendContainer = styled.section`
    background-color: tomato;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  return <M_FoodRecommendContainer></M_FoodRecommendContainer>;
};

export default M_FoodRecommend;
