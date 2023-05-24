//내부 import
import M_FoodPedia from './pages/M_FoodPedia';
import M_Category from './pages/M_Category';
import M_Bookmark from './pages/M_Bookmark';
import M_Review from './pages/M_Review';

//외부 import
import styled from 'styled-components';

// 메인 페이지를 감싸는 컴포 넌트
const Main = () => {
  return (
    <M_Container>
      <M_FoodPedia />

      <M_Category />

      <M_Bookmark />

      <M_Review />
    </M_Container>
  );
};

export default Main;

//style
const M_Container = styled.main`
  background-color: #ffe4e6;
`;
