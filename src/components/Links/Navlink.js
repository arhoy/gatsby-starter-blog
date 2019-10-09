// styled navlink with emotion

import styled from '@emotion/styled';
import { Link } from 'gatsby';
const Navlink = styled(Link)`
  color: ${props => props.theme.colors.primary};
  font-size: 1.8rem;
  text-decoration: none;
  margin-right: 1rem;

  &:hover {
    color: ${props => props.theme.colors.primaryDark};
    font-weight: bolder;
  }
  &.currentPage {
    color: ${props => props.theme.colors.primaryDark};
  }
`;

export default Navlink;
