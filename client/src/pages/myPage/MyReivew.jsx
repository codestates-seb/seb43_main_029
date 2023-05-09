import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function MyReivew() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/members/${id}`).then(res => {
      setReviews(res.data.reivew);
    });
  }, []);

  return (
    <MyReivewBlock>
      <h3>작성한 리뷰 목록</h3>
      <ReivewsList>
        <Reivews>
          {reviews ? (
            reviews.map((reivew, idx) => {
              return (
                <Reivew key={idx}>
                  <div className="padding">
                    <div className="underLine">
                      <a href="/">
                        <MarginP>{reivew.name}</MarginP>
                      </a>
                      <span>{reivew.score}</span>
                    </div>
                    <div className="underLine">
                      <MarginP>{reivew.content}</MarginP>
                    </div>
                    <div>
                      <MarginP>작성날짜</MarginP>
                    </div>
                  </div>
                </Reivew>
              );
            })
          ) : (
            <p>작성하신 리뷰가 없습니다.</p>
          )}
        </Reivews>
      </ReivewsList>
    </MyReivewBlock>
  );
}

const MyReivewBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    font-size: 1.5rem;
  }
  a {
    color: #2f3134;
    text-decoration: none;
  }
`;
const ReivewsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Reivews = styled.ul`
  display: flex;
  width: 100%;
  gap: 15px;
`;

const Reivew = styled.li`
  background: #f2f2f2;
  .underLine {
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .padding {
    padding: 0 12px;
  }
  display: flex;
  width: 100%;
  overflow: auto;
  white-space: nowrap;
`;

const MarginP = styled.p`
  margin: 11px;
`;

export default MyReivew;
