import styled from '@emotion/styled';
import { Link } from 'gatsby';

const NoStyleLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.black};
`;

export default NoStyleLink;
