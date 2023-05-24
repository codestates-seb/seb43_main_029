import styled from 'styled-components';
import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { ReviewComponent } from '../../components/Review';
import Paging from '../favorites/Pagination';

function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 12;

  const [indexOfLastItem, setIndexOfLastItem] = useState(0);
  const [indexOfFirstItem, setIndexOfFirstItem] = useState(0);
  const [currentItems, setCurrentItems] = useState(0);

  const userInfo = useSelector(state => state.userinfo.user);
  const memberId = userInfo.memberId;

  const accessToken = useSelector(state => state.Auth.token);
  const config = {
    headers: {
      Authorization: `${accessToken}`,
    },
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/members/${memberId}`, config).then(res => {
      setReviews(res.data.reviews);
    });
  }, [memberId]);

  useEffect(() => {
    setCount(reviews.length);
    setIndexOfLastItem(currentPage * itemPerPage);
    setIndexOfFirstItem(indexOfLastItem - itemPerPage);
    setCurrentItems(reviews.slice(indexOfFirstItem, indexOfLastItem));
  }, [currentPage, indexOfFirstItem, indexOfLastItem, reviews]);

  const setPage = useCallback(event => {
    setCurrentPage(event);
  });

  return (
    <ReviewListBox>
      <ReviewListContent>
        <ReviewListElements>
          {currentItems && currentItems.length > 0 ? (
            currentItems.map((review, idx) => {
              return <ReviewComponent key={idx} review={review} idx={idx} />;
            })
          ) : (
            <p>작성하신 리뷰가 없습니다.</p>
          )}
        </ReviewListElements>
        <Paging page={currentPage} count={count} setPage={setPage} itemPerPage={itemPerPage} />
      </ReviewListContent>
    </ReviewListBox>
  );
}

const ReviewListBox = styled.section`
  display: flex;
  justify-content: center;
`;

const ReviewListContent = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReviewListElements = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  li {
    margin-bottom: 30px;
  }
`;

export default ReviewList;
