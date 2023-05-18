//내부 import
import { M_RootContainer, M_ContentBox } from '../styled';

//외부 import
import styled from 'styled-components';
import { FaRegHandPointDown, FaHandPointDown } from 'react-icons/fa';

/** 메인 페이지_메뉴 추천 컴포넌트 */
const M_FoodRecommend = () => {
  return (
    <S_RootContainer>
      <M_ContentBox>
        <TitleContainer>
          <Titles>
            <div className="subTitle">나만의 맛집</div>
            <div className="mainTitle">푸드 피디아</div>
          </Titles>

          <IconContainer>
            <div className="desc">원하는 카테고리별로 골라보자 &#33;</div>
            <div className="start">Let&#39;s Go&#33;</div>
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

export default M_FoodRecommend;

const S_RootContainer = styled(M_RootContainer)`
  background-color: pink;
  background: url('https://images.unsplash.com/photo-1502741224143-90386d7f8c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80')
    no-repeat center;
  background-size: cover;
  font-family: var(--font-googleNanumBrushScript);
`;

const TitleContainer = styled.section`
  width: 100%;
  height: calc(100% - 100px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 30px 0;
`;

const Titles = styled.h1`
  margin-left: 70px;
  margin-top: 160px;

  .subTitle {
    margin-left: 10px;
    padding-bottom: 5px;
    color: #fff;
    font-weight: 700;
    font-size: 40px;
  }
  .mainTitle {
    color: #fff;
    font-weight: 700;
    font-size: 100px;
  }
`;

// const Desc = styled.h2`
//   color: #fff;
//   font-weight: 700;
//   font-size: 35px;

//   display: flex;
//   flex-direction: column;
//   align-items: end;

//   margin-top: 200px;
//   margin-right: 70px;

//   .desc {
//     width: 300px;

//     text-align: end;
//   }
// `;

const IconContainer = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 18px;

  display: flex;
  align-items: center;
  flex-direction: column;

  .start {
    font-size: 20px;
    padding-bottom: 5px;
  }
`;
