import styled from '@emotion/styled';

const Button = styled.button`
  outline: none;
  margin: 1rem 0;
  border: none;
  padding: 0.7rem 1rem;
  border: 3px solid ${props => props.theme.colors.primary};
  background: transparent;
  cursor: pointer;
  border-radius: 1rem;
  &:hover {
    font-weight: bold;
  }
`;

export default Button;
