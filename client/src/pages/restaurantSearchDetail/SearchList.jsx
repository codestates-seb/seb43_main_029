//내부 import
import Restaurant from '../main/component/Bookmark/Bookmark_Restaurant';

//외부 import
import styled from 'styled-components';

/** 검색 결과 식당 컴포넌트들을 정렬 */
const SearchList = ({ currentPosts, loading }) => {
  return (
    <SearchListContainer>
      {currentPosts?.map(currentPost => (
        <Restaurant
          key={currentPost.restaurantId}
          name={currentPost.name}
          url={currentPost.url}
          score={currentPost.score}
          bookmark={currentPost.bookmark}
          location={currentPost.location}
          loading={loading}
          restaurantId={currentPost.restaurantId}
        />
      ))}
    </SearchListContainer>
  );
};
export default SearchList;

//style
const SearchListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 50px;
  column-gap: 50px;
`;
