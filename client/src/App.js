import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import Header from './Header.js';
import HeaderLogged from './HeaderLogged.js';

const GlobalStyle = createGlobalStyle`
${reset}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <HeaderLogged />
      </div>
    </>
  );
}

export default App;
