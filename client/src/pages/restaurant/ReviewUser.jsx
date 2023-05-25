import axios from 'axios';
import { useEffect, useState } from 'react';
import { TiPencil } from 'react-icons/ti';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function ReviewUser({ memberId, likeCount }) {
  const [reviewAuthor, setReviewAuthor] = useState([]);
  const accessToken = useSelector(state => state.Auth.token);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/members/${memberId}`).then(response => {
      axios.defaults.headers.common['Authorization'] = `${accessToken}`;
      setReviewAuthor(response.data.data);
    });
  }, []);

  return (
    <>
      {reviewAuthor ? (
        <User>
          <UserInfo>
            <UserImg background={reviewAuthor.url}></UserImg>
            <p>{reviewAuthor.nickname}</p>
          </UserInfo>
          <p>
            <TiPencil />
            {likeCount}
          </p>
        </User>
      ) : null}
    </>
  );
}

const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 1rem 2rem 1rem 0;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  p {
    font-size: 1.125rem;
  }
`;

const UserImg = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: ${props => `url(${props.background}) no-repeat center`};
  background-size: 65px;
  cursor: pointer;
`;
export default ReviewUser;
