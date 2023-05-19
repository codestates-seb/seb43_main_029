import axios from 'axios';
import { useEffect, useState } from 'react';
import { TiPencil } from 'react-icons/ti';
import styled from 'styled-components';

function ReviewUser({ memberId }) {
  const [initialUser, setInitialUser] = useState([]);

  const user = initialUser.filter(el => el.memberId === memberId);

  const restaurantReviewApi = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/members`);
    setInitialUser(response.data);
  };

  useEffect(() => {
    restaurantReviewApi();
  }, [memberId]);

  return (
    <>
      {user.length > 0 ? (
        <User>
          <UserInfo>
            <UserImg background={user[0].url}></UserImg>
            <p>{user[0].nickname}</p>
          </UserInfo>
          <p>
            <TiPencil />
            {user[0].reviews ? user[0].reviews.length : 0}
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
