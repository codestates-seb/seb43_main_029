import styled from 'styled-components';
// import { useEffect, useState } from 'react';
// import { SERVER_ADDRESS } from '../config';

// 제일 큰 식당 컴포넌트
const BigRestaurant = () => {
  // const [isBigRestaurant, setIsBigRestaurant] = useState([]);

  // useEffect(() => {
  //   fetch(`${SERVER_ADDRESS}/restaurants`)
  //     .then(res => res.json())
  //     .then(data => setIsBigRestaurant(data));
  // }, []);
  const dummyImage =
    'https://images.unsplash.com/photo-1609167830220-7164aa360951?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
  return (
    <BigR_Container>
      <img src={dummyImage} alt="" />
    </BigR_Container>
  );
};

export default BigRestaurant;

//style
const BigR_Container = styled.section`
  padding: 0 0 2rem 1rem;
  img {
    border-radius: 2px;
    width: 100%;
    height: 100%;
  }
`;
