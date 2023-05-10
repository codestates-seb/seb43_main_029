import styled from 'styled-components';
import dummy from '../dummy.json';

const Title = () => {
  const filteredData = dummy.foods.filter(data => data.name === '감동식당');
  return <TitleContainer>{filteredData[0].category}</TitleContainer>;
};
export default Title;

//style
const TitleContainer = styled.div`
  height: 100%;
  font-size: 14rem;
  padding: 1rem;
`;
