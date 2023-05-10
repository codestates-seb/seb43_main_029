import styled from 'styled-components';

// 식당 컴포넌트
const Restaurant = props => {
  return (
    <R_Container>
      <R_Image>
        <img src={props.images} alt={props.name} />
      </R_Image>
      <R_Info>
        <R_NameAndScore>
          <span className="R_Name">{props.name}</span>
          <span className="R_Score">{props.score}</span>
        </R_NameAndScore>
        <R_Address>{props.address}</R_Address>
      </R_Info>
    </R_Container>
  );
};

export default Restaurant;

//style
//전체를 감싸는 역할
const R_Container = styled.section`
  width: 350px;
  height: 250px;
  display: flex;
  flex-direction: column;
`;
//이미지 감싸는 역할
const R_Image = styled.div`
  height: calc(100% - 40px);
  width: 100%;
  position: relative;

  img {
    border-radius: 2px;
    width: 100%;
    height: 100%;
  }
`;
// 이름, 별점, 주소 감싸는 역할
const R_Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  align-items: center;
`;

const R_NameAndScore = styled.div`
  font-weight: 700;
  font-size: 1.2em;
  .R_Score {
    padding-left: 0.5em;
    color: #ec4899;
  }
`;
const R_Address = styled.div`
  font-size: 0.8em;
  color: #6b7280;
  padding-left: 0.2em;
`;
