import styled from 'styled-components';
import Restaurants from '../component/Restaurants';
import BigRestaurant from '../component/BigRestaurant';
import Title from '../component/Title';
import Big_R_Info from '../component/Big_R_Info';
/** 카테고리 감싸는 역할 */
const M_Category = () => {
  return (
    <M_Page_Container>
      <TopContainer>
        <ContentBox>
          <TitleContainer>
            <Desc>
              <Title />
            </Desc>
            <Big_R_Info_Container>
              <Big_R_Info />
            </Big_R_Info_Container>
          </TitleContainer>
          <BigRestaurantContainer>
            <BigRestaurant />
          </BigRestaurantContainer>
        </ContentBox>
      </TopContainer>

      <BottomContainer>
        <ContentBox>
          <Restaurants />
        </ContentBox>
      </BottomContainer>
    </M_Page_Container>
  );
};

export default M_Category;

//style
/** 메인의 페이지들을 감싸는 컴포넌트 */
export const M_Page_Container = styled.section`
  background-color: #fff7ed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

/** 카테고리 타이틀을 감싸는 컴포넌트 */
export const TitleContainer = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  flex-direction: column;
  border: 1px solid black;
`;

/** 페이지 소개글 */
export const Desc = styled.div`
  height: 50%;
  width: 100%;
`;

/** 큰 이미지 컴포넌트의 정보 */
export const Big_R_Info_Container = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;
`;

/** 큰 이미지를 감싸는 컴포넌트 */
export const BigRestaurantContainer = styled.div`
  display: flex;
  height: 100%;
  flex: 1;

  align-items: end;
  justify-content: end;
  border: 1px solid black;
`;

/** 큰 이미지와 카테고리 타이틀을 감싸는 컴포넌트 */
export const TopContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: center;
`;

/** 작은 이미지를 감싸는 컴포넌트 */
export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  align-items: center;
  justify-content: center;
  background-color: #f0fdf4;
`;

/** 양 옆의 여백을 남겨줌 */
export const ContentBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  max-width: calc(100% - 300px);
  margin: auto;
  width: 100%;
`;
