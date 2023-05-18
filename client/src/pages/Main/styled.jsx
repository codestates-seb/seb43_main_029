import styled from 'styled-components';

/** 높이, 넓이가 꽉 채워지는 flex 컨테이너 */
export const M_RootContainer = styled.section`
  background-color: #fff;

  width: 100%;
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
  max-width: 1200px;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: auto;
`;

/** 큰 섹션을 소개하는 타이틀 컴포넌트*/
export const M_Title_And_BigRestaurant_InfoBox = styled.div`
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
export const M_BigRestaurant_Image_Box = styled.div`
  height: 100%;

  display: flex;
  flex: 1;
  align-items: end;
  /* justify-content: end; */
`;

/**  타이틀 박스 */
export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  padding-left: 10%;

  .Title_Tag {
    font-size: 1.5rem;
    padding-bottom: 0.2rem;
    color: #6b7280;
  }
  .Title_Desc_First {
    font-size: 3rem;
    padding-bottom: 0.2rem;
  }
  .Title_Desc_Second {
    font-size: 3.5rem;
  }
  .point {
    color: #3b82f6;
  }
`;

/** 큰 식당의 정보(이름, 별점, 즐겨찾기, 주소)를 담은 컴포넌트 */
export const BigRestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .BigRestaurant_Name {
    font-weight: 700;
    font-size: 2.2rem;
    padding-bottom: 0.2rem;
  }
  .BigRestaurant_Score {
    font-weight: 500;
    font-size: 1.1rem;
    color: #ec4899;
  }
  .BigRestaurant_Bookmark {
    font-weight: 500;
    font-size: 1.1rem;
    color: #6366f1;
    padding-bottom: 0.5rem;
  }
  .BigRestaurant_Address {
    color: #6b7280;
  }
`;

/** 식당 컴포넌트 */
export const RestaurantBox = styled.div`
  width: 100%;
  height: 250px;

  display: flex;
  flex-direction: column;

  //식당 이미지
  .Restaurant_Image {
    height: 200px;
    img {
      border-radius: 10px;
      width: 100%;
      height: 100%;
      // 이미지가 뭉개지는 것을 방지
      object-fit: cover;

      transition: transform 0.5s;
      cursor: pointer;
      :hover {
        -ms-transform: scale(1.5); /* IE 9 */
        -webkit-transform: scale(1.5); /* Safari 3-8 */
        transform: scale(1.02);
      }
    }
  }

  .Restaurant_Info {
    display: flex;
    flex-direction: column;
    padding: 0.5em;
    align-items: end;
  }
  /* .Restaurant_NameAndScore {
    font-weight: 700;
    font-size: 1.2em;
    margin-bottom: 0.2em;
  } */
  .Restaurant_Name {
    color: #000;
    font-weight: 600;
    font-size: 1.2em;
    padding-bottom: 0.2em;
  }
  .Restaurant_Score {
    color: #ec4899;
    font-weight: 500;
    padding-left: 0.5em;
    .icons {
      font-size: 0.8em;
      padding-right: 0.2em;
    }
  }
  .Restaurant_Bookmark {
    color: #6366f1;
    font-weight: 500;
    padding-left: 0.5em;
    .icons {
      font-size: 0.8em;
      padding-right: 0.2em;
    }
  }
  .Restaurant_Address {
    font-size: 0.8em;
    color: #6b7280;
    padding-left: 0.2em;
  }
`;

/** 식당 컴포넌트를 map 돌리는 컴포넌트 */
export const RestaurantsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 15px;
  width: 100%;
`;

// 큰 식당 이미지 컨테이너
export const BigRestaurantImageContainer = styled.div`
  padding-bottom: 30px;
  width: 600px;
  height: 480px;

  /* PC */
  @media all and (min-width: 1024px) and (max-width: 1250px) {
    width: calc(1024px / 2);
    height: 350px;
  }

  /* 테블릿 세로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: calc(768px / 2);
    height: 250px;
  }

  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
    width: calc(480px / 2);
    height: 150px;
  }

  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    width: 150px;
    height: 100px;
  }
  img {
    border-radius: 2px;
    width: 100%;
    height: 100%;

    // 이미지가 뭉개지는 것을 방지
    object-fit: cover;
    cursor: pointer;
    // 이미지 hover시 자연스럽게 커짐
    transition: transform 0.5s;
    :hover {
      /* IE 9 */
      -ms-transform: scale(1.5);
      /* Safari 3-8 */
      -webkit-transform: scale(1.5);
      // 이미지가 커지는 사이즈
      transform: scale(1.02);
    }
  }
`;
