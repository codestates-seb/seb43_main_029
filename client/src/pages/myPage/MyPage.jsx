import styled from 'styled-components';
import Profile from './Profile.jsx';

const MyPageBlock = styled.section`
  display: flex;
  flex-direction: column;
`;

function MyPage() {
  return (
    <MyPageBlock>
      <Profile />
    </MyPageBlock>
  );
}

export default MyPage;
