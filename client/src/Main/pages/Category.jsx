import styled from 'styled-components';
import TitleCategory from '../component/TitleCategory';
import TitleRestaurant from '../component/TitleRestaurant';
import CategoryMap from '../component/CategoryMap';
const M_Category = () => {
  //style
  //카테고리 페이지를 감싸는 컨테이너
  const M_CategoryContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;

    .TopContainer {
      display: flex;
      flex: 4;
    }
  `;

  const TitleContainer = styled.div`
    background-color: pink;
    display: flex;
    flex: 3;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const TitleRestaurantContainer = styled.div`
    background-color: skyblue;
    display: flex;
    flex: 2;
    align-items: center;
    justify-content: center;
  `;
  const SubRestaurantContainer = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <M_CategoryContainer>
      <div className="TopContainer">
        <TitleContainer>
          <TitleCategory />
        </TitleContainer>
        <TitleRestaurantContainer>
          <TitleRestaurant />
        </TitleRestaurantContainer>
      </div>
      <SubRestaurantContainer>
        <CategoryMap />
      </SubRestaurantContainer>
    </M_CategoryContainer>
  );
};

export default M_Category;
