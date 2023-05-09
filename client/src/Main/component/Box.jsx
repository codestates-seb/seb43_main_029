import styled from 'styled-components';

export const Row = props => {
  return <RBox style={{ 'flex-direction': props.direction }}></RBox>;
};

export const Column = props => {
  return <CBox style={{ 'flex-direction': props.direction }}></CBox>;
};

const RBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const CBox = styled.div`
  display: flex;
  flex-direction: column;
`;
