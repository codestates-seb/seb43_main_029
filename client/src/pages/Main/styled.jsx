import styled from 'styled-components';

/** 높이, 넓이가 꽉 채워지는 flex 컨테이너 */
export const M_RootContainer = styled.section`
  background-color: #fff;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

/** 타이틀, 식당의 큰 이미지와 소개글을 담은 컴포넌트 */
export const M_TopContainer = styled.div`
  width: 100%;

  display: flex;
  flex: 1;
  justify-content: center;
`;

/** 식당의 작은 이미지와 소개글들을 담은 컴포넌트 */
export const M_BottomContainer = styled.div`
  background-color: #bae6fd;

  width: 100%;
  height: 300px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

/** 양 옆의 여백을 남겨 컨텐츠의 넓이를 제한하는 컴포넌트 */
export const M_ContentBox = styled.div`
  max-width: calc(100% - 300px);
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: auto;
`;

/** 큰 섹션을 소개하는 타이틀 컴포넌트*/
export const M_Title_And_BigRestaurant_InfoBox = styled.section`
  height: 100%;

  display: flex;
  flex: 1;
  flex-direction: column;
`;

/** 타이틀 감싸는 컴포넌트 */
export const M_TitleBox = styled.div`
  height: 50%;
  width: 100%;

  display: flex;
  align-items: end;
`;

/** 큰 식당의 정보를 감싸는 컴포넌트 */
export const M_BigRestaurant_InfoBox = styled.div`
  height: 50%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: end;

  margin-bottom: 3rem;
`;

/** 큰 식당의 이미지를 감싸는 컴포넌트 */
export const M_BigRestaurant_ImgBox = styled.div`
  height: 100%;

  display: flex;
  flex: 1;
  align-items: end;
  justify-content: end;
`;
