import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { SERVER_ADDRESS_RESTAURANTS, MaxScore } from '../config';
import axios from 'axios';

// 제일 큰 식당 컴포넌트
const BigRestaurant = () => {
  const [isBigRestaurant, setIsBigRestaurant] = useState([]);
  useEffect(() => {
    axios.get(SERVER_ADDRESS_RESTAURANTS).then(res => setIsBigRestaurant(res.data));
  }, []);

  const filteredData = isBigRestaurant.filter(data => data.score >= MaxScore);

  return (
    <>
      {filteredData.map(data => (
        <BigR_Container key={data.restaurantId}>
          <img src={data.images} alt={data.name} />
        </BigR_Container>
      ))}
    </>
  );
};

export default BigRestaurant;

//style
const BigR_Container = styled.section`
  padding-bottom: 2rem;
  width: calc(100% - 20px);
  height: calc(100% - 210px);
  img {
    border-radius: 2px;
    width: 100%;
    height: 100%;
    // 이미지가 뭉개지는 것을 방지
    object-fit: cover;
  }
`;
