import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import Footer from './Footer.js';

const GlobalStyle = createGlobalStyle`
${reset}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Footer />
      </div>
    </>
  );
}

export default App;
