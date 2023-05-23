import styled, { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import MyPage from './pages/myPage/MyPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
  const [page, setPage] = useState(1); //현재 페이지
  const [size, setSize] = useState(0); // 한 페이지에 들어가는 식당 개수
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/restaurant/search/?page=${page}&size=${size}&keyword=${searchValue}`
      )
      .then(response => {
        const pageInfoData = response.data.pageInfo;
        setPage(pageInfoData.page); //현재 페이지
        setSize(pageInfoData.size); //페이지에 들어갈 식당 개수
        console.log(pageInfoData);
        console.log(size);
      })
      .catch(error => error);
  }, [page, size]);

  //서치창 검색 결과 change 이벤트
  const onSearchValueChange = event => {
    setSearchValue(event.target.value);
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
      <BrowserRouter>
        <GlobalStyle />
        <GlobalLayout>
          {isUserLoggedIn ? (
            <HeaderLogged onLogout={handleLogout} />
          ) : (
            <Header
              onLogin={handleLogin}
              searchValue={searchValue}
              onSearchValueChange={onSearchValueChange}
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
                path={`/restaurant/search/page=${page}&size=${size}&keyword=${searchValue}`}
                element={
                  <RestaurantSearchDetail searchValue={searchValue} page={page} size={size} />
                }
              />
            </Routes>
          </div>
          <Footer className="footer" />
        </GlobalLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
