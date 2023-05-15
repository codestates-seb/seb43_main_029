import { SERVER_URL } from '../config';

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Res_Title = () => {
  const [isCategoy, setIsCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/restaurants`);
        const { data } = response;
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomCategory = data[randomIndex].category;
        setIsCategory(randomCategory);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <TitleContainer>
      <div className="Title_Tag">&#35; {isCategoy}</div>
      <div className="Title_Desc_One">
        <span>{isCategoy}</span> 맛집
      </div>
      <div className="Title_Desc_Two">순위별로 골라보기</div>
    </TitleContainer>
  );
};
export default Res_Title;

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
