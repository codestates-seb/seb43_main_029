import styled, { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import MyPage from './pages/myPage/MyPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main/index';
import Search from './pages/search/Search';
import Restaurant from './pages/restaurant/Restaurant';
import Registration from './pages/registration/Registration';
import Header from './components/Header';
import Footer from './components/Footer';
const GlobalStyle = createGlobalStyle`
${reset}
`;

const GlobalLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  .App {
    flex: 1;
  }
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <GlobalLayout>
          <Header />
          <div className="App">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/mypage/:id" element={<MyPage />} />
              <Route path="/search" element={<Search />} />
              <Route path="/restaurant" element={<Restaurant />} />
              <Route path="/registration" element={<Registration />} />
            </Routes>
          </div>
          <Footer className="footer" />
        </GlobalLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
