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
/** 식당 컴포넌트를 감싸는 역할 */
export const R_Container = styled.section`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
`;

/** 식당 이미지 컴포넌트 */
const R_Image = styled.div`
  height: 200px;
  img {
    border-radius: 2px 2px 0 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    // 이미지가 뭉개지는 것을 방지
  }
`;
/**  이름, 별점, 주소 감싸는 역할  */
const R_Info = styled.div`
  background-color: #fff;
  display: flex;
  flex: 1;
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
