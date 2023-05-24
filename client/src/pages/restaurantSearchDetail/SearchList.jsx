//내부 import
import Restaurant from '../main/component/Bookmark/Bookmark_Restaurant';
// import { fetchSearchRestaurant } from '../../redux/search/actions';

//외부 import
import styled from 'styled-components';
// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { connect } from 'react-redux';

/** 검색 결과 식당 컴포넌트들을 정렬 */
const SearchList = () => {
  // useEffect(() => {
  //   fetchSearchRestaurant();
  // }, []);
  const restaurants = useSelector(state => state.search.restaurants.data);

  return (
    <SearchListContainer>
      {restaurants?.map(post => (
        <Restaurant
          key={post.restaurantId}
          name={post.name}
          url={post.url}
          score={post.score}
          bookmark={post.bookmark}
          location={post.location}
          // loading={loading}
          restaurantId={post.restaurantId}
        />
      ))}
    </SearchListContainer>
  );
};
// const mapStateToProps = state => {
//   return {
//     restaurants: state.search.restaurants.data,
//   };
// };
export default SearchList;

//style
const SearchListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 50px;
  column-gap: 50px;
`;
