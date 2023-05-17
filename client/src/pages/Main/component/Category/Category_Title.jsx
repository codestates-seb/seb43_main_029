//내부 import
import { SERVER_URL } from '../../config';
import { TitleBox } from '../../styled';

//외부 import
import { useEffect, useState } from 'react';
import axios from 'axios';

/** 랜덤 카테고리 타이틀 */
const Category_Title = () => {
  const [isCategoy, setIsCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/restaurants`);
        const { data } = response;
        //랜덤 카테고리를 가져옴
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
    <TitleBox>
      <div className="Title_Tag">&#35; 푸드피디아 pick!</div>
      <div className="Title_Desc_First">
        <span className="point">{isCategoy}</span> 맛집
      </div>
      <div className="Title_Desc_Second">순위별로 골라보기</div>
    </TitleBox>
  );
};
export default Category_Title;
