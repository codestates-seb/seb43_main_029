import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { TiThumbsUp } from 'react-icons/ti';

function MyReivew() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const recentReview = reviews.slice(-9);
  useEffect(() => {
    axios.get(`http://localhost:3001/members/${id}`).then(res => {
      setReviews(res.data.reviews);
    });
  }, []);

  return (
    <MyReivewBlock>
      <h3>작성한 리뷰 목록</h3>
      <ReivewsList>
        <Reivews>
          {reviews ? (
            recentReview.map((reivew, idx) => {
              return (
                <Reivew key={idx}>
                  <div className="padding">
                    <ReivewTitle className="underLine">
                      <a href="/">
                        <MarginP>{reivew.name}</MarginP>
                      </a>
                      <p>{reivew.score}</p>
                    </ReivewTitle>
                    <ReivewContent className="underLine">
                      <MarginP>{reivew.content}</MarginP>
                    </ReivewContent>
                    <ReivewDate>
                      <ReivewThumbsUp>
                        <TiThumbsUp className="thumbsUp" />
                        {reivew.vote_count}
                      </ReivewThumbsUp>
                      <MarginP>작성날짜</MarginP>
                    </ReivewDate>
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

const MyReivewBlock = styled.section`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 1.5rem;
  }
  a {
    color: #2f3134;
    text-decoration: none;
  }
`;
const ReivewsList = styled.div`
  margin-top: 2rem;
  overflow: auto;
  overflow-x: auto;
  overflow-y: hidden;
  touch-action: pan-x;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Reivews = styled.ul`
  white-space: nowrap;
`;

const Reivew = styled.li`
  border-radius: 10px;
  background: #f2f2f2;
  .underLine {
    border-bottom: 1px solid #e5e5e5;
  }
  .padding {
    padding: 5px 15px;
    width: 100%;
  }
  display: inline-flex;
  margin-right: 1rem;
  width: 22%;
  @media screen and (max-width: 1023px) {
    width: 30%;
  }
  @media screen and (max-width: 768px) {
    width: 45%;
  }
`;
const ReivewTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ReivewContent = styled.div`
  p {
    height: 120px;
    position: relative;
    line-height: 1.5rem;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    word-break: keep-all;
    margin: 12px 0 15px;
  }
`;
const ReivewDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ReivewThumbsUp = styled.p`
  .thumbsUp {
    font-size: 1.125rem;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const MarginP = styled.p`
  margin: 11px 0;
`;

export default MyReivew;
