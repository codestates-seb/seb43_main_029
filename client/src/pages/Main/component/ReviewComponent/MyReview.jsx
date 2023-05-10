import styled from 'styled-components';

const MyReview = props => {
  return (
    <MyReviewContainer>
      <div className="topContainer">{props.comment}</div>
      <div className="bottomContainer">
        <div className="info">{props.name}</div>
        <div className="info">{props.rating}</div>
        <div className="info">{props.createdAt}</div>
      </div>
    </MyReviewContainer>
  );
};

export default MyReview;

//style
const MyReviewContainer = styled.div`
  background-color: #fff;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;

  .topContainer {
    flex: 3;
    background-color: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bottomContainer {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .info {
    padding-left: 10px;
  }
`;
