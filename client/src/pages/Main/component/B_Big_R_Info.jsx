import { SERVER_ADDRESS_RESTAURANTS, MaxScore } from '../config';
import { Big_R_Info_Container } from './C_Big_R_Info';

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Big_R_Info = () => {
  const [isBig_R_Info, setIsBig_R_Info] = useState([]);

  useEffect(() => {
    axios.get(SERVER_ADDRESS_RESTAURANTS).then(res => setIsBig_R_Info(res.data));
  }, []);

  const filteredData = isBig_R_Info.filter(data => data.score >= MaxScore);

  return (
    <>
      {filteredData.map(data => (
        <B_Big_R_Info_Container key={data.restaurantId}>
          <span className="Big_R_Name">{data.name}</span>
          <span className="Big_R_Score">예상 {data.score}</span>
          <span className="Big_R_Address">{data.address}</span>
        </B_Big_R_Info_Container>
      ))}
    </>
  );
};

export default Big_R_Info;

//style
const B_Big_R_Info_Container = styled(Big_R_Info_Container)`
  align-items: start;
  padding-left: 1rem;
`;
