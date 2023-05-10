import styled from 'styled-components';
import dummy from '../dummy.json';
const Big_R_Info = () => {
  const filteredData = dummy.foods.filter(data => data.name === '감동식당');
  return (
    <Big_R_Info_Container>
      <span className="Big_R_Name">{filteredData[0].name}</span>
      <span className="Big_R_Score">예상 {filteredData[0].rating}</span>
      <span className="Big_R_Address">{filteredData[0].location}</span>
    </Big_R_Info_Container>
  );
};

export default Big_R_Info;

//style
const Big_R_Info_Container = styled.div`
  /* background-color: #fff; */
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-right: 1rem;
  .Big_R_Name {
    font-weight: 700;
    font-size: 3em;
  }
  .Big_R_Score {
    font-weight: 700;
    font-size: 1.5em;
    color: #ec4899;
    padding-bottom: 0.2rem;
  }
  .Big_R_Address {
    color: #6b7280;
  }
`;
