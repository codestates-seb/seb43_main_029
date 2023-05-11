// import { SERVER_ADDRESS_RESTAURANTS } from '../config';

import styled from 'styled-components';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

const Title = () => {
  // useEffect(() => {
  //   axios.get(SERVER_ADDRESS_RESTAURANTS).then(res => setIsTag(res.data));
  // }, []);
  // const [isTag, setIsTag] = useState([]);

  // console.log(isTag[0].category);

  return (
    <TitleContainer>
      <div className="Title_Tag">&#35; 카테고리</div>
      <div className="Title_Desc_One">
        <span>카테고리</span> 맛집
      </div>
      <div className="Title_Desc_Two">순위별로 골라보기</div>
    </TitleContainer>
  );
};
export default Title;

//style
const TitleContainer = styled.h1`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  padding-left: 10%;

  .Title_Tag {
    font-size: 1.5rem;
    padding-bottom: 0.2rem;
    color: #6b7280;
  }
  .Title_Desc_One {
    font-size: 3rem;
    padding-bottom: 0.2rem;
  }
  .Title_Desc_Two {
    font-size: 3.5rem;
  }
  span {
    color: #3b82f6;
  }
`;
