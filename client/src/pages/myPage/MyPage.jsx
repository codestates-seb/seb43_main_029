import styled from 'styled-components';
import Profile from './Profile.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MyReivew from './MyReivew.jsx';

const MyPageBlock = styled.section`
  display: flex;
  flex-direction: column;
`;

function MyPage() {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/members/${id}`).then(res => {
      setUserInfo(res.data);
    });
  }, []);
  return (
    <>
      <MyPageBlock>
        <Profile userInfo={userInfo} />
        <MyReivew />
      </MyPageBlock>
    </>
  );
}

export default MyPage;
