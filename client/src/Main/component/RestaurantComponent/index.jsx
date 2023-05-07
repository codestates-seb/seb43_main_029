import styled from 'styled-components';
import data from '../../data/data.json';

// 식당 컴포넌트
const RestarurantComponent = () => {
  const gambas = data.foods[3];
  const S_RestarurantComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 450px;
    height: 300px;
    border: 1px solid black;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  `;
  const S_ImageContainer = styled.div`
    width: 400px;
    display: flex;
  `;
  const S_RestarurantInfomation = styled.div`
    display: flex;
    flex: 1;
  `;
  const S_RestarutrantName = styled.div``;
  const S_RestarutrantRate = styled.div``;
  return (
    <S_RestarurantComponent>
      {/* 이미지 컨테이너 */}
      <S_ImageContainer>
        <img src={gambas.img} alt="" />
      </S_ImageContainer>
      <S_RestarurantInfomation>
        {/* 식당이름 컨테이너 */}
        <S_RestarutrantName>{gambas.name}</S_RestarutrantName>
        {/* 별점 컨테이너 */}
        <S_RestarutrantRate>4.5</S_RestarutrantRate>
      </S_RestarurantInfomation>
    </S_RestarurantComponent>
  );
};

export default RestarurantComponent;
