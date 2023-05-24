//내부
import SearchInfo from './SearchInfo';
import SearchList from './SearchList';
import Paging from './Paging';

//외부 import
import styled from 'styled-components';

/** 서버주소/restaurant/search에서 데이터 불러오기 */
const RestaurantSearchDetail = ({
  searchValue,
  page,
  size,
  posts,
  totalPosts,
  totalPages,
  loading,
  handlePageChange,
}) => {
  return (
    <RestaurantSearchDetailContainer>
      <ArticleBox>
        <ContentBox>
          <SearchInfo searchValue={searchValue} />
          <SearchList posts={posts} loading={loading} />
        </ContentBox>
      </ArticleBox>
      {/* 페이지 네이션 */}
      <Paging
        page={page}
        size={size}
        totalPosts={totalPosts}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </RestaurantSearchDetailContainer>
  );
};

export default RestaurantSearchDetail;

//style
const RestaurantSearchDetailContainer = styled.main``;

const ArticleBox = styled.article`
  padding-top: 50px;
`;

const ContentBox = styled.section`
  max-width: 1000px;
  min-height: 1000px;

  border: 1px solid #000;
  margin: auto;
`;
