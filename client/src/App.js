import styled, { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import MyPage from './pages/myPage/MyPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ScrollToTop from './components/ScrollToTop';
import Main from './pages/main/Main';
import Restaurant from './pages/restaurant/Restaurant';
import Favorites from './pages/favorites/FavoritesListPage';
import Reviews from './pages/reviews/ReviewPage';
import Header from './components/Header';
import HeaderLogged from './components/HeaderLogged';
import Footer from './components/Footer';
import Registration_restaurant from './pages/registration_restaurant/RegistrationPage_restr';
import RestaurantSearchDetail from './pages/restaurantSearchDetail/RestaurantSearchDetail';

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
          <ScrollToTop />
          {isLoggedIn ? <HeaderLogged userInfo={userInfo} /> : <Header />}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/mypage/:id" element={<MyPage />} />
            <Route path="/restaurant/:id" element={<Restaurant />} />
            <Route path="/mypage/:id/bookmarks" element={<Favorites />} />
            <Route path="/mypage/:id/reviews" element={<Reviews />} />
            <Route path="/restaurant/search" element={<RestaurantSearchDetail />} />
            <Route path="/restaurant" element={<Registration_restaurant />} />
          </Routes>
          <Footer className="footer" />
        </GlobalLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
