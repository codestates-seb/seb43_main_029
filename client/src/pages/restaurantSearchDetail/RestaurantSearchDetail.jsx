//내부
import SearchInfo from './SearchInfo';
import SearchList from './SearchList';
import Paging from './Paging';

//외부 import
import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

/** 서버주소/restaurant/search에서 데이터 불러오기 */
const RestaurantSearchDetail = ({ searchValue, page, size }) => {
  const [loading, setLoading] = useState(false); //로딩

  const [posts, setPosts] = useState([]); //검색 결과 식당들
  // const [page, setPage] = useState(1); //현재 페이지
  // const [size, setSize] = useState(0); // 한 페이지에 들어가는 식당 개수

  const [totalPosts, setTotalPosts] = useState(0); //검색해서 나온 식당의 총 개수
  const [totalPages, setTotalPages] = useState(0); // 페이지네이션 페이지 수

  useEffect(() => {
    //검색한 키워드의 api에서 데이터를 받아옴

    axios
      .get(
        `${process.env.REACT_APP_API_URL}/restaurant/search/?page=${page}&size=${size}&keyword=${searchValue}`
      )
      .then(response => {
        setLoading(true); //로딩중

        /* <-- api의 식당 데이터 --> */
        const searchedData = response.data;
        setPosts(searchedData.data);
        console.log(response.data);
        /* <-- api의 페이지 수, 식당 수 데이터 -->*/
        const pageInfoData = response.data.pageInfo;
        // setPage(pageInfoData.page); //현재 페이지
        // setSize(pageInfoData.size); //페이지에 들어갈 식당 개수
        setTotalPosts(pageInfoData.totalElements); //검색 결과 총 식당 개수
        setTotalPages(pageInfoData.totalPages); // 페이지가 총 몇개 만들어져야 하는지

        setLoading(false); //로딩끝
      })
      .catch(error => error);
  }, [page, size]);
  console.log(size);
  /* <-- 현재 페이지 가져오기 --> */
  const indexOfLastPost = page * size; // 1 * 15 = 15
  const indexOfFirstPost = indexOfLastPost - size; // 15 - 15 = 0
  /** 현재 페이지의 식당 정보 */
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // 0 ~ 15번까지 포스트

  /** 클릭 이벤트 - 페이지 바꾸기 */

  return (
    <RestaurantSearchDetailContainer>
      <ArticleBox>
        <ContentBox>
          <SearchInfo searchValue={searchValue} />
          <SearchList currentPosts={currentPosts} loading={loading} />
        </ContentBox>
      </ArticleBox>
      {/* 페이지 네이션 */}
      <Paging
        page={page}
        size={size}
        totalPosts={totalPosts}
        totalPages={totalPages}
        // handlePageChange={handlePageChange}
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
