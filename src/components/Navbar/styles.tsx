import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BlurRadiusBackground } from '../common/BlurRadiusBackground';

export const Nav = styled(BlurRadiusBackground)`
  grid-area: n;
  padding: 20px;
`;

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
