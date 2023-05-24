//내부 import
import Restaurant from '../main/component/Bookmark/Bookmark_Restaurant';

//외부 import
import styled from 'styled-components';

/** 검색 결과 식당 컴포넌트들을 정렬 */
const SearchList = ({ currentPosts }) => {
  return (
    <SearchListContainer>
      {currentPosts?.map(post => (
        <Restaurant
          key={post.restaurantId}
          name={post.name}
          url={post.url}
          score={post.score}
          bookmark={post.bookmark}
          location={post.location}
          restaurantId={post.restaurantId}
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
