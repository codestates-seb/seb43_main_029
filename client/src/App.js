import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import MyPage from './pages/myPage/MyPage.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
          <Route path="/users/:id" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
