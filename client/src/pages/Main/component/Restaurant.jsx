import styled from 'styled-components';

// 식당 컴포넌트
const Restaurant = props => {
  return (
    <R_Container>
      <div className="R_Image">
        <img src={props.images} alt={props.name} />
      </div>
      <div className="R_Info">
        <div className="R_NameAndScore">
          <span className="R_Name">{props.name}</span>
          <span className="R_Score">{props.score}</span>
        </div>
        <span className="R_Address">{props.address}</span>
      </div>
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

  //식당 이미지
  .R_Image {
    height: 200px;
    img {
      border-radius: 2px 2px 0 0;
      width: 100%;
      height: 100%;
      // 이미지가 뭉개지는 것을 방지
      object-fit: cover;
    }
  }

  .R_Info {
    /* background-color: #fff; */
    display: flex;
    flex-direction: column;
    padding: 0.5em;
    align-items: end;
  }
  .R_NameAndScore {
    font-weight: 700;
    font-size: 1.2em;
    margin-bottom: 0.2em;
  }
  .R_Score {
    padding-left: 0.5em;
    color: #ec4899;
  }
  .R_Address {
    font-size: 0.8em;
    color: #6b7280;
    padding-left: 0.2em;
  }
`;
