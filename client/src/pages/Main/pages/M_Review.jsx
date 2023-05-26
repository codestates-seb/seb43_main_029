//내부 import
import { M_RootContainer, M_TopContainer, M_BottomContainer, M_ContentBox } from '../styled';
import Review_Title from '../component/Review/Review_Title';
import ReviewPagination from '../component/Review/ReviewPagination';
//외부 import
import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
const M_Review = () => {
  const [reviews, setReviews] = useState([]);
  const firstSlice = 0;
  const lastSlice = 7;
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/reviews/mostLiked`).then(response => {
      const sortedData = response.data.slice(firstSlice, lastSlice);
      setReviews(sortedData);
    });
  }, []);

  return (
    <R_RootContainer>
      <M_TopContainer>
        <M_ContentBox>
          <Review_Title />
        </M_ContentBox>
      </M_TopContainer>
      <S_BottomContainer>
        <S_ContentBox>
          <ReviewPagination reviews={reviews} />
        </S_ContentBox>
      </S_BottomContainer>
    </R_RootContainer>
  );
};

export default M_Review;

//style
const R_RootContainer = styled(M_RootContainer)`
  background-color: #cee6eb;
`;

const S_BottomContainer = styled(M_BottomContainer)`
  /* align-items: start; */
  height: 500px;
`;

const S_ContentBox = styled(M_ContentBox)`
  align-items: start;
`;
