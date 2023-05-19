//외부 import
import styled from 'styled-components';
import PacmanLoader from 'react-spinners/PacmanLoader';
const Loading = () => {
  return (
    <Background>
      <PacmanLoader color="#fad1d9" size={16} />
      <span className="loading-message">Loading...</span>
    </Background>
  );
};

export default Loading;

const Background = styled.div`
  color: gray;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
