import styled from 'styled-components';

// 식당 컴포넌트
const Restaurant = props => {
  return (
    <RestaurantContainer>
      <RestaurantInfo>
        <img className="R_Image" src={props.images} alt={props.name} />
        <div className="absolute">
          <div className="R_Name">{props.name}</div>
          <div className="R_Score">{props.score}</div>
        </div>
      </RestaurantInfo>
      <RestaurantAddress>{props.address}</RestaurantAddress>
    </RestaurantContainer>
  );
};

export default Restaurant;

//style
//전체를 감싸는 역할
const RestaurantContainer = styled.section`
  width: 350px;
  height: 250px;
  display: flex;
  flex-direction: column;
`;
//이미지, 이름, 별점, 주소를 감싸는 역할
const RestaurantInfo = styled.div`
  height: calc(100% - 40px);
  width: 100%;
  position: relative;

  .R_Image {
    border-radius: 2px;
    width: 100%;
    height: 100%;
  }
  .R_Name {
    font-weight: 700;
    color: #fff;
    font-size: 1.3em;
    padding: 0 0.2em;
  }
  .R_Score {
    padding: 0 0.2em 0.2em;
    font-weight: 700;
    color: #fff;
    font-size: 1.3em;
  }
  .absolute {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
const RestaurantAddress = styled.div`
  flex: 1;
  padding-left: 0.2em;
  display: flex;
  align-items: center;
  font-size: 0.8em;
  color: #1e293b;
`;
