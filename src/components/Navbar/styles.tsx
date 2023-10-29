import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkBlock = styled.div`
  color: white;
`;

export const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
  &.active {
    text-decoration: underline;
  }
`;
