//내부 import
import { SERVER_URL, MaxScore } from '../config';

//외부 import
import { BigRestaurantInfo } from '../styled';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Category_BigRestaurant_Info = () => {
  const [isBig_R_Info, setIsBig_R_Info] = useState([]);

  useEffect(() => {
    axios.get(`${SERVER_URL}/restaurants`).then(res => setIsBig_R_Info(res.data));
  }, []);

  const filteredData = isBig_R_Info.filter(data => data.score >= MaxScore);

  return (
    <>
      {filteredData.map(data => (
        <BigRestaurantInfo key={data.restaurantId}>
          <span className="BigRestaurant_Name">{data.name}</span>
          <span className="BigRestaurant_Score">예상 {data.score}</span>
          <span className="BigRestaurant_Address">{data.address}</span>
        </BigRestaurantInfo>
      ))}
    </>
  );
};

export default Category_BigRestaurant_Info;
