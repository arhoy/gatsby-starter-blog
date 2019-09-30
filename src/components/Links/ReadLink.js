import styled from '@emotion/styled';
import { Link } from 'gatsby';

const ReadLink = styled(Link)`
  text-decoration: underline;
  color: ${props => props.theme.colors.black};
  &:visited {
    color: ${props => props.theme.colors.darkgrey};
  }
`;

export default ReadLink;
