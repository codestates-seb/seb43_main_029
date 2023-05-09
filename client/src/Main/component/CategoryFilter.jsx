import { useEffect, useState } from 'react';
import Restaurants from './Restaurants';

// data를 필터링해서 map돌린 컴포넌트에 넣어줌.
const CategoryFilter = () => {
  const [isRestarants, setIsRestaurants] = useState(null);
  console.log(isRestarants);
  useEffect(() => {
    fetch('http://localhost:3001/restaurant')
      .then(res => res.json())
      .then(data => setIsRestaurants(data));
  }, []);
  return <Restaurants isRestarants={isRestarants} />;
};

export default CategoryFilter;
