import styled from 'styled-components';

// 카테고리 메인 타이틀 컴포넌트
const CategoryTitle = () => {
  return (
    <C_T_Container>
      <T_Container></T_Container>
      <BigRestaurantInfo>
        <BigRestaurantName></BigRestaurantName>
        <BigRestaurantScore></BigRestaurantScore>
        <BigRestaurantAddress></BigRestaurantAddress>
      </BigRestaurantInfo>
    </C_T_Container>
  );
};

export default CategoryTitle;

//style
/** 카테고리 타이틀을 감싸는 컴포넌트 */
const C_T_Container = styled.div`
  background-color: #fff;
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
`;

const T_Container = styled.div``;
const BigRestaurantInfo = styled.div``;
const BigRestaurantName = styled.div``;
const BigRestaurantScore = styled.div``;
const BigRestaurantAddress = styled.div``;
