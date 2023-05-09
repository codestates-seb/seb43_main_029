import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Login from './Login';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header onLoginClick={handleModalOpen} />
      <Switch>
        <Route exact path="/" />
      </Switch>
      {isModalOpen && <Login onClose={handleModalClose} />}
    </BrowserRouter>
  );
}

export default App;
