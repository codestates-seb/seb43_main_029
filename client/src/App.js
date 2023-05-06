import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import MyPage from './pages/myPage/MyPage.jsx';

const GlobalStyle = createGlobalStyle`
${reset}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <MyPage />
      </div>
      ;
    </>
  );
}

export default App;
