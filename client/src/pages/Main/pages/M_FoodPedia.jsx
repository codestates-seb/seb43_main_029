//내부 import
import { M_RootContainer, M_ContentBox } from '../styled';

//외부 import
import styled from 'styled-components';
import { FaRegHandPointDown, FaHandPointDown } from 'react-icons/fa';

/** 메인페이지 - 푸드피디아 컴포넌트 */
const M_FoodPedia = () => {
  return (
    <S_RootContainer>
      <M_ContentBox>
        <TitleContainer>
          <Titles>
            <h3 className="subTitle">나만의 맛집</h3>
            <h1 className="mainTitle">푸드 피디아&#44;</h1>
            <h2 className="desc">원하는 카테고리별로 골라먹자 &#33;</h2>
          </Titles>

          <IconContainer>
            <span className="guideText">Let&#39;s Go&#33;</span>
            <div>
              <FaRegHandPointDown className="handPoint_icons" />
              <FaHandPointDown className="handPoint_fil_icons" />
            </div>
          </IconContainer>
        </TitleContainer>
      </M_ContentBox>
    </S_RootContainer>
  );
};

export default M_FoodPedia;

/** 배경이미지, 폰트스타일 추가 */
const S_RootContainer = styled(M_RootContainer)`
  background-color: pink;
  background: url('https://images.unsplash.com/photo-1502741224143-90386d7f8c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80')
    no-repeat center;
  background-size: cover;
  font-family: var(--font-googleNanumBrushScript);
  color: #fff;
`;

/** 높이, 패딩, space-between으로 간격 조절 */
const TitleContainer = styled.div`
  width: 100%;
  height: calc(100% - 100px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 30px 30px 0;
`;

/** FoodPedia 소개 타이틀을 담는 스타일 */
const Titles = styled.div`
  margin-left: 70px;
  margin-top: 160px;
  font-weight: 700;
  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    margin-left: 0;
  }

  .subTitle {
    font-size: 40px;
    margin-left: 10px;
    padding-bottom: 5px;
    /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
    @media all and (min-width: 480px) and (max-width: 767px) {
      font-size: 30px;
    }
    /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
    @media all and (max-width: 479px) {
      font-size: 25px;
    }
  }
  .mainTitle {
    font-size: 100px;
    color: #fbcfe8;
    /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
    @media all and (min-width: 480px) and (max-width: 767px) {
      font-size: 65px;
    }
    /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
    @media all and (max-width: 479px) {
      font-size: 55px;
    }
  }
  .desc {
    font-size: 110px;
    color: #fdf2f8;
    /* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
    @media all and (min-width: 480px) and (max-width: 767px) {
      font-size: 75px;
    }
    /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
    @media all and (max-width: 479px) {
      font-size: 65px;
    }
  }
`;

/** 손가락 아이콘과 안내 텍스트를 감싸는 스타일 */
const IconContainer = styled.div`
  font-weight: 600;
  font-size: 18px;

  display: flex;
  align-items: center;
  flex-direction: column;

  .guideText {
    font-size: 20px;
    padding-bottom: 5px;
    //텍스트 커지는 효과
    :hover {
      -ms-transform: scale(1.5); /* IE 9 */
      -webkit-transform: scale(1.5); /* Safari 3-8 */
      transform: scale(1.02);
    }
  }
`;
