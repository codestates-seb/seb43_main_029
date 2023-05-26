import axios from 'axios';
import { useEffect, useState } from 'react';
import { FiThumbsUp } from 'react-icons/fi';
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
            <FiThumbsUp className="thumbs" />
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
  .thumbs {
    margin-bottom: -2px;
    margin-right: 4px;
    font-size: 1.125rem;
  }
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
