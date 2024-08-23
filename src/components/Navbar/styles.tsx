import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  justify-items: center;
  gap: 10px;
`;

export const NavItem = styled.div`
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

  p {
    @media (max-width: 600px) {
      display: none;
    }
  }
`;
