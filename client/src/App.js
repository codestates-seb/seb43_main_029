import styled, { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import MyPage from './pages/myPage/MyPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Main from './pages/main/Main';
import Search from './pages/search/Search';
import Restaurant from './pages/restaurant/Restaurant';
import Registration from './pages/registration/Registration';
import Favorites from './pages/favorites/FavoritesListPage';
import Reviews from './pages/reviews/ReviewPage';
import Header from './components/Header';
import HeaderLogged from './components/HeaderLogged';
import Footer from './components/Footer';
import Login from './pages/registration/Login';

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
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const userInfo = useSelector(state => state.userinfo.user);

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <GlobalLayout>
          {isLoggedIn ? <HeaderLogged userInfo={userInfo} /> : <Header />}
          <Routes>
            <Route exact path="/" Component={Login} />
          </Routes>
          <div className="App">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/mypage/:id" element={<MyPage />} />
              <Route path="/search" element={<Search />} />
              <Route path="/restaurant/:id" element={<Restaurant />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/mypage/:id/bookmarks" element={<Favorites />} />
              <Route path="/mypage/:id/reviews" element={<Reviews />} />
            </Routes>
          </div>
          <Footer className="footer" />
        </GlobalLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
