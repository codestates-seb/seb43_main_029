import styled from 'styled-components';
import data from '../../data/data.json';

const SubRestarurantComponent = () => {
  const chicken = data.foods[0].img;
  const S_SubRestarurantComponent = styled.div`
    width: 300px;
    height: 200px;
    border: 1px solid black;
    img {
      width: 100%;
      height: 100%;
    }
  `;
  return (
    <S_SubRestarurantComponent>
      <img src={chicken} alt="치킨" />
    </S_SubRestarurantComponent>
  );
};

export default SubRestarurantComponent;
