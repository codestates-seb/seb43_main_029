import styled, { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import MyPage from './pages/myPage/MyPage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from './pages/main/Main';
// import Search from './pages/search/Search';
import Restaurant from './pages/restaurant/Restaurant';
import Registration from './pages/registration/Registration';
import Favorites from './pages/favorites/FavoritesListPage';
import Reviews from './pages/reviews/ReviewPage';
import Header from './components/Header';
import HeaderLogged from './components/HeaderLogged';
import Footer from './components/Footer';
// import Login from './pages/registration/Login';
import RestaurantSearchDetail from './pages/restaurantSearchDetail/RestaurantSearchDetail';

import { useState, useEffect } from 'react';

import axios from 'axios';

const GlobalStyle = createGlobalStyle`
${reset}
`;

const GlobalLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  .App {
    flex: 1;
  }
`;

function App() {
  /* <--검색 조회 로직--> */
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); //로딩

  const [page, setPage] = useState(1); //현재 페이지
  const [size, setSize] = useState(12); // 한 페이지에 들어가는 식당 개수
  const [posts, setPosts] = useState([]); //검색 결과 식당들

  const [totalPosts, setTotalPosts] = useState(0); //검색해서 나온 식당의 총 개수
  const [totalPages, setTotalPages] = useState(0); // 페이지네이션 페이지 수
  const [searchValue, setSearchValue] = useState(''); //검색 값

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/restaurant/search/?keyword=${searchValue}`)
      .then(response => {
        setLoading(true); //로딩중

        const searchData = response.data;
        setPosts(searchData.data); // 해당 페이지에 보여줄 식당들

        const pageInfoData = response.data.pageInfo;
        setPage(pageInfoData.page); //현재 페이지
        setSize(pageInfoData.size); //페이지에 들어갈 식당 개수
        setTotalPosts(pageInfoData.totalElements); //검색 결과 총 식당 개수
        setTotalPages(pageInfoData.totalPages); // 페이지가 총 몇개 만들어져야 하는지

        setLoading(false); //로딩끝
      })
      .catch(error => error);
  }, [page, size, searchValue]);

  console.log(page, '페이지');
  console.log(posts, '포스트');
  console.log(searchValue, '입력값');

  //페이지 네이션 이벤트
  const handlePageChange = page => {
    setPage(page);
    navigate(`/restaurant/search/page=${page}&size=${size}&keyword=${searchValue}`);
  };

  //서치창 검색 결과 change 이벤트
  const onSearchValueChange = event => {
    setSearchValue(event.target.value);
  };

  //엔터 이벤트
  const handleOnKeyPress = event => {
    if (event.key === 'Enter') {
      setPage(1);
      navigate(`/restaurant/search/page=${page}&size=${size}&keyword=${searchValue}`);
    }
  };

  //로그인 관련 로직
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsUserLoggedIn(true);
  };

  const handleLogout = () => {
    setIsUserLoggedIn(false);
  };

  return (
    <>
      {/* <BrowserRouter> */}
      <GlobalStyle />
      <GlobalLayout>
        {isUserLoggedIn ? (
          <HeaderLogged
            onLogout={handleLogout}
            searchValue={searchValue}
            onSearchValueChange={onSearchValueChange}
            onKeyDown={handleOnKeyPress}
            page={page}
            size={size}
          />
        ) : (
          <Header
            onLogin={handleLogin}
            searchValue={searchValue}
            onSearchValueChange={onSearchValueChange}
            onKeyDown={handleOnKeyPress}
            page={page}
            size={size}
          />
        )}
        <Routes>{/* <Route exact path="/" Component={Login} /> */}</Routes>
        <div className="App">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/mypage/:id" element={<MyPage />} />
            {/* <Route path="/search" element={<Search />} /> */}
            <Route path="/restaurant/:id" element={<Restaurant />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/mypage/:id/bookmarks" element={<Favorites />} />
            <Route path="/mypage/:id/reviews" element={<Reviews />} />
            <Route
              path="/restaurant/search"
              element={
                <RestaurantSearchDetail
                  searchValue={searchValue}
                  page={page}
                  size={size}
                  posts={posts}
                  totalPosts={totalPosts}
                  totalPages={totalPages}
                  loading={loading}
                  handlePageChange={handlePageChange}
                />
              }
            />
          </Routes>
        </div>
        <Footer className="footer" />
      </GlobalLayout>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
