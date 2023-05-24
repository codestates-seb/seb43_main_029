//내부
import SearchInfo from './SearchInfo';
import SearchList from './SearchList';
import Paging from './Paging';

//외부 import
import styled from 'styled-components';
import { connect } from 'react-redux';
import axios from 'axios';
import { useEffect, useState } from 'react';

/** 서버주소/restaurant/search에서 데이터 불러오기 */
const RestaurantSearchDetail = ({ searchValue }) => {
  //api로 받아온 검색 조회 식당데이터값
  const [currentPosts, setCurrentPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(12);
  const [totalPosts, setTotalPosts] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  //검색값
  const isSearchValue = searchValue.searchValue;

  const handlePageChange = page => {
    setPage(page);
  };
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/restaurant/search/?page=1&size=12&keyword=${isSearchValue}`
      )
      .then(response => {
        setCurrentPosts(response.data.data);
        setPage(response.data.pageInfo.page);
        setSize(response.data.pageInfo.size);
        setTotalPosts(response.data.pageInfo.totalElements);
        setTotalPages(response.data.pageInfo.totalPages);
      });
  }, [isSearchValue, page]);

  return (
    <RestaurantSearchDetailContainer>
      <ArticleBox>
        <ContentBox>
          <SearchInfo isSearchValue={isSearchValue} />
          <SearchList currentPosts={currentPosts} />
          <Paging
            page={page}
            size={size}
            totalPosts={totalPosts}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        </ContentBox>
      </ArticleBox>
    </RestaurantSearchDetailContainer>
  );
};
const mapStateToProps = state => ({
  searchValue: state.searchValue,
});

export default connect(mapStateToProps)(RestaurantSearchDetail);

//style
const RestaurantSearchDetailContainer = styled.main``;

const ArticleBox = styled.article`
  padding-top: 50px;
`;

const ContentBox = styled.section`
  max-width: 1000px;
  min-height: 1000px;
  margin: auto;
`;
