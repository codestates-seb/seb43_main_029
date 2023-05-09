import { useEffect, useState } from 'react';
import Restaurants from './Restaurants';
import { URL_RESTAURANTS } from '../../api/urls';
import { api } from '../../api';

// data를 필터링해서 map돌린 컴포넌트에 넣어줌.
const CategoryFilter = () => {
  const [isRestarants, setIsRestaurants] = useState(null);
  console.log(isRestarants);
  useEffect(() => {
    api.get(URL_RESTAURANTS).then(data => setIsRestaurants(data));
  }, []);
  return <Restaurants isRestarants={isRestarants} />;
};

export default CategoryFilter;
