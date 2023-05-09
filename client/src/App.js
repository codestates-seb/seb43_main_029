import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import MyPage from './pages/myPage/MyPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main/index';
import Search from './pages/search/Search';
import Restaurant from './pages/restaurant/Restaurant';
import Registration from './pages/registration/Registration';

const GlobalStyle = createGlobalStyle`
${reset}
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <div className="App"></div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage/:id" element={<MyPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
