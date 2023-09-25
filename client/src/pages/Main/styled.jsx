import styled from 'styled-components';

/** 높이, 넓이가 꽉 채워지는 flex 컨테이너 */
export const M_RootContainer = styled.section`
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
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: end;
`;

/** 타이틀 감싸는 컴포넌트 */
export const M_TitleBox = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 250px;
  justify-content: center;

  @media all and (min-width: 1024px) and (max-width: 1250px) {
    margin-bottom: 200px;
  }

  @media all and (min-width: 480px) and (max-width: 767px) {
    margin-bottom: 100px;
  }
  @media all and (max-width: 479px) {
    margin-bottom: 200px;
    padding: 10px;
    margin-right: 20px;
  }
`;

/** 큰 식당의 정보를 감싸는 컴포넌트 */
export const M_BigRestaurant_InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;

  margin-bottom: 3rem;
`;

/** 큰 식당의 이미지를 감싸는 컴포넌트 */
export const M_BigRestaurant_Image_Box = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: end;

  /* @media all and (min-width: 480px) and (max-width: 767px) {
    justify-content: center;
  } */
`;

/**  타이틀 박스 , 폰트바꾸는 곳 */
export const TitleBox = styled.div`
  font-family: var(--font-foodpedia);

  display: flex;
  flex-direction: column;

  .Title_Tag {
    font-weight: 500;
    font-size: 30px;
    padding-bottom: 5px;
    color: gray;
  }
  .Title_Desc {
    font-weight: 500;
    font-size: 60px;
  }
  .randomCategory {
    font-weight: 600;
    color: var(--color-score);
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    .Title_Tag {
      font-size: 20px;
    }
    .Title_Desc {
      font-size: 45px;
    }
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    .Title_Tag {
      font-size: 15px;
    }
    .Title_Desc {
      font-size: 30px;
    }
  }
  @media all and (max-width: 479px) {
    .Title_Tag {
      font-size: 20px;
    }
    .Title_Desc {
      font-size: 50px;
    }
  }
`;

/** 큰 식당의 정보(이름, 별점, 즐겨찾기, 주소)를 담은 컴포넌트 */
export const BigRestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;

  .BigRestaurant_Name {
    font-weight: 700;
    font-size: 30px;
    padding-bottom: 5px;
  }
  .BigRestaurant_Score {
    color: var(--color-score);
    font-weight: 500;
    font-size: 18px;
  }
  .BigRestaurant_Bookmark {
    color: var(--color-bookmark);
    font-weight: 500;
    font-size: 18px;
    padding-bottom: 5px;
  }
  .BigRestaurant_Address {
    padding-top: 5px;
    padding-right: 10px;
    color: var(--color-address);
  }
  /** pc */
  @media all and (min-width: 1024px) and (max-width: 1250px) {
    width: calc(1024px / 2);
  }

  /** 테블릿 가로 */
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: calc(768px / 2);
    .BigRestaurant_Name {
      font-size: 24px;
    }
    .BigRestaurant_Score {
      font-size: 16px;
      .icons {
        font-size: 14px;
      }
    }
    .BigRestaurant_Bookmark {
      font-size: 16px;
      .icons {
        font-size: 14px;
      }
    }
    .BigRestaurant_Address {
      font-size: 14px;
    }
  }

  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
    width: calc(480px / 2);
    .BigRestaurant_Name {
      font-size: 20px;
    }
    .BigRestaurant_Score {
      font-size: 14px;
      .icons {
        font-size: 10px;
      }
    }
    .BigRestaurant_Bookmark {
      font-size: 14px;
      .icons {
        font-size: 10px;
      }
    }
    .BigRestaurant_Address {
      font-size: 12px;
    }
  }

  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    width: 150px;
    .BigRestaurant_Name {
      font-size: 16px;
    }
    .BigRestaurant_Score {
      font-size: 12px;
      .icons {
        font-size: 8px;
      }
    }
    .BigRestaurant_Bookmark {
      font-size: 12px;
      .icons {
        font-size: 8px;
      }
    }
    .BigRestaurant_Address {
      font-size: 10px;
    }
  }
`;

/** 식당 컴포넌트 */
export const RestaurantBox = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  flex-direction: column;

  //식당 이미지
  .Restaurant_Image {
    height: 200px;
    @media all and (min-width: 1024px) and (max-width: 1250px) {
      height: 180px;
    }
    @media all and (min-width: 768px) and (max-width: 1023px) {
      height: 160px;
    }
    @media all and (min-width: 480px) and (max-width: 767px) {
      height: 125px;
    }
    @media all and (max-width: 479px) {
      height: 100px;
      margin-top: 50px;
    }
    img {
      border-radius: 2px;
      width: 100%;
      height: 200px;
      // 이미지가 뭉개지는 것을 방지
      object-fit: cover;
      transition: transform 0.5s;
      cursor: pointer;
      :hover {
        -ms-transform: scale(1.5); /* IE 9 */
        -webkit-transform: scale(1.5); /* Safari 3-8 */
        transform: scale(1.02);
      }
      @media all and (min-width: 1024px) and (max-width: 1250px) {
        height: 180px;
      }
      @media all and (min-width: 768px) and (max-width: 1023px) {
        height: 160px;
      }
      @media all and (min-width: 480px) and (max-width: 767px) {
        height: 125px;
      }
      @media all and (max-width: 479px) {
        height: 100px;
      }
    }
  }

  .Restaurant_Info {
    display: flex;
    flex-direction: column;
    padding: 8px;
    align-items: end;
    /* justify-content: center; */
  }
  .Restaurant_Name {
    color: #000;
    font-weight: 600;
    font-size: 18px;
    padding-bottom: 5px;
    @media all and (min-width: 1024px) and (max-width: 1250px) {
      font-size: 16px;
    }
    @media all and (min-width: 768px) and (max-width: 1023px) {
      font-size: 14px;
    }
    @media all and (min-width: 480px) and (max-width: 767px) {
      font-size: 12px;
    }
    @media all and (max-width: 479px) {
      font-size: 10px;
    }
  }
  .Restaurant_Score {
    color: var(--color-score);
    font-weight: 500;
    font-size: 14px;
    @media all and (min-width: 1024px) and (max-width: 1250px) {
      font-size: 12px;
    }
    @media all and (min-width: 768px) and (max-width: 1023px) {
      font-size: 12px;
    }
    @media all and (min-width: 480px) and (max-width: 767px) {
      font-size: 12px;
    }
    @media all and (max-width: 479px) {
      font-size: 10px;
    }
    .icons {
      font-size: 14px;
      //좌우 패딩값
      padding: 0 4px 0;
      @media all and (min-width: 1024px) and (max-width: 1250px) {
        font-size: 12px;
      }
      @media all and (min-width: 768px) and (max-width: 1023px) {
        font-size: 12px;
      }
      @media all and (min-width: 480px) and (max-width: 767px) {
        font-size: 12px;
      }
      @media all and (max-width: 479px) {
        font-size: 10px;
      }
    }
  }
  .Restaurant_Bookmark {
    color: var(--color-bookmark);
    font-weight: 500;
    font-size: 14px;
    padding-left: 5px;
    @media all and (min-width: 1024px) and (max-width: 1250px) {
      font-size: 12px;
    }
    @media all and (min-width: 768px) and (max-width: 1023px) {
      font-size: 12px;
    }
    @media all and (min-width: 480px) and (max-width: 767px) {
      font-size: 12px;
    }
    @media all and (max-width: 479px) {
      font-size: 10px;
    }
    .icons {
      font-size: 13px;
      padding-right: 2px;
      @media all and (min-width: 1024px) and (max-width: 1250px) {
        font-size: 12px;
      }
      @media all and (min-width: 768px) and (max-width: 1023px) {
        font-size: 10px;
      }
      @media all and (min-width: 480px) and (max-width: 767px) {
        font-size: 10px;
      }
      @media all and (max-width: 479px) {
        font-size: 8px;
      }
    }
  }
  .Restaurant_Address {
    font-size: 12px;
    color: var(--color-address);
    padding-top: 2px;
    @media all and (min-width: 1024px) and (max-width: 1250px) {
    }
    @media all and (min-width: 768px) and (max-width: 1023px) {
      font-size: 10px;
    }
    @media all and (min-width: 480px) and (max-width: 767px) {
      font-size: 10px;
    }
    @media all and (max-width: 479px) {
      font-size: 8px;
    }
  }
`;

/** 식당 컴포넌트를 map 돌리는 컴포넌트 */
export const RestaurantsBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 15px;
  width: 100%;
`;

// 큰 식당 이미지 컨테이너
export const BigRestaurantImageContainer = styled.div`
  padding-bottom: 30px;
  width: 100%;
  /* height: 480px; */
  height: calc(100% - 120px);

  /* PC */
  @media all and (min-width: 1024px) and (max-width: 1250px) {
    width: 100%;
    /* height: 400px; */
    height: calc(100% - 200px);
  }

  /* 테블릿 세로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    /* height: 400px; */
    height: calc(100% - 200px);
  }

  /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 95%;
    /* height: 230px; */
    height: calc(100% - 370px);
  }

  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    width: 95%;
    /* height: 100px; */
    height: calc(100% - 430px);
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
