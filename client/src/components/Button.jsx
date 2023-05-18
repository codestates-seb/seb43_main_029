import styled from 'styled-components';

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  padding: 5.5px 8px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
  white-space: nowrap;

  background: ${props => props.background || '#2f3134'};
  color: ${props => props.color || 'white'};
  border: 1px solid ${props => props.border || '#2f3134'};
`;

export default Button;
