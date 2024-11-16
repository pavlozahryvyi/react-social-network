import styled from 'styled-components';
import { BlurRadiusBackground } from '../common/BlurRadiusBackground';

export const AppStyled = styled.div`
  max-width: 1000px;
  max-height: 1000px;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;

  display: grid;
  grid-template-rows: [content] 92% [nav] 8%;
  grid-template-columns: auto;
  gap: 10px;
  grid-template-areas:
    'content'
    'nav';
`;

export const ContentStyled = styled(BlurRadiusBackground)`
  grid-area: content;
  overflow: hidden;
  height: 100%;
  border-top-left-radius: 20px;
  overflow: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 20px;
`;

export const NavStyled = styled(BlurRadiusBackground)`
  grid-area: nav;
  padding: 20px;
`;
