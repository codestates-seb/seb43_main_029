import { SERVER_URL, MaxScore } from '../config';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Big_R_Info = () => {
  const [isBig_R_Info, setIsBig_R_Info] = useState([]);

  useEffect(() => {
    axios.get(`${SERVER_URL}/restaurants`).then(res => setIsBig_R_Info(res.data));
  }, []);

  const filteredData = isBig_R_Info.filter(data => data.score >= MaxScore);

  return (
    <>
      {filteredData.map(data => (
        <Big_R_Info_Container key={data.restaurantId}>
          <span className="Big_R_Name">{data.name}</span>
          <span className="Big_R_Score">예상 {data.score}</span>
          <span className="Big_R_Address">{data.address}</span>
        </Big_R_Info_Container>
      ))}
    </>
  );
};

export default Big_R_Info;

//style
export const Big_R_Info_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-right: 1rem;
  .Big_R_Name {
    font-weight: 700;
    font-size: 2.2rem;
    padding-bottom: 0.2rem;
  }
  .Big_R_Score {
    font-weight: 700;
    font-size: 1.2rem;
    color: #ec4899;
    padding-bottom: 0.3rem;
  }
  .Big_R_Address {
    color: #6b7280;
  }
`;
