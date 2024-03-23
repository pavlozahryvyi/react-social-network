import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav``;

export const NavLogo = styled.div`
  text-align: center;
`;

export const LinkBlock = styled.div`
  color: white;
`;

export const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 0;
  cursor: pointer;
  &.active {
    text-decoration: underline;
  }
`;
