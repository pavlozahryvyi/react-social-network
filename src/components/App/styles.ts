import styled from 'styled-components';
import { BlurRadiusBackground } from '../common/BlurRadiusBackground';

export const AppWrapper = styled.div`
  display: grid;
  max-width: 1000px;
  height: 700px;
  margin: 0 auto;
  grid-template-columns: 2fr 10fr;
  /*header - is 2 columns*/
  /*nav и content - are by 1 column*/
  gap: 10px;
  grid-template-areas: 'n c';
`;

export const ContentWrapper = styled(BlurRadiusBackground)`
  grid-area: c;
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

export const NavWrapper = styled(BlurRadiusBackground)`
  grid-area: n;
  padding: 20px;
`;
