import axios from 'axios';
import {
  fetchRandomRestaurantsRequest,
  fetchRandomRestaurantsSuccess,
  fetchRandomRestaurantsFailure,
} from './types';

export const fetchRandomRestaurants = () => {
  return dispatch => {
    dispatch(fetchRandomRestaurantsRequest());

    axios
      .get(`${process.env.REACT_APP_API_URL}/restaurant/today`)
      .then(response => {
        //정제 데이터
        const restaurants = response.data.data;

        //랜덤 인덱스
        const randomIndex = Math.floor(Math.random() * restaurants.length);
        //랜덤 인덱스로 랜덤 카테고리 출력
        const randomCategory = restaurants[randomIndex].categoryName;

        //랜덤 카테고리에 해당하는 식당들
        const randomCategoryRestaurants = restaurants.filter(
          restaurant => restaurant.categoryName === randomCategory
        );

        const sortedData = randomCategoryRestaurants.sort((a, b) => b.score - a.score);
        dispatch(fetchRandomRestaurantsSuccess(sortedData));
      })
      .catch(error => dispatch(fetchRandomRestaurantsFailure(error)));
  };
};
