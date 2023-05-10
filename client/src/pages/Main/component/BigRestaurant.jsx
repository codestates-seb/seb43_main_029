import styled from 'styled-components';
import dummy from '../dummy.json';

// 제일 큰 식당 컴포넌트
const BigRestaurant = () => {
  const filteredData = dummy.foods.filter(data => data.name === '감동식당');
  return (
    <BigR_Container>
      <BigR_Image>
        <img src={filteredData[0].img} alt={filteredData[0].name} />
      </BigR_Image>
      <BigR_Info>
        <BigR_NameAndScore>
          <span className="BigR_Name">{filteredData[0].name}</span>
          <span className="BigR_Score">{filteredData[0].rating}</span>
        </BigR_NameAndScore>
        <BigR_Address>{filteredData[0].location}</BigR_Address>
      </BigR_Info>
    </BigR_Container>
  );
};

export default BigRestaurant;

//style
const BigR_Container = styled.section`
  width: 700px;
  height: 500px;
  display: flex;
  flex-direction: column;
`;
const BigR_Image = styled.div`
  height: calc(100% - 40px);
  width: 100%;
  img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
  }
`;
const BigR_Info = styled.div`
  background-color: #fff;
  flex: 1;
  display: flex;
  align-items: center;
`;
const BigR_NameAndScore = styled.div``;
const BigR_Address = styled.div``;
