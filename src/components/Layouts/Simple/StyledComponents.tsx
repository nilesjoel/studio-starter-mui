import { styled } from '@mui/system';

export const StyledBody = styled('div')`
  color: #eadbba4d;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "social-gothic", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 2rem;
  background: url('background1.png') no-repeat center center fixed; 
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

export const GridContainer = styled('div')`
  display: grid;
  grid-template-areas:
    'header header header'
    'sidebar main main'
    'footer footer footer';
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100%;
`;

export const GridCard = styled('div')`
  display: flex;
  margin: .5rem;
  background: linear-gradient(to right, rgba(18, 22, 25, 0.75), rgba(58, 146, 157, 0.15));
  padding: 1rem;
`;

export const Header = styled('header')`
  grid-area: header;
  background: linear-gradient(to right, rgba(24, 25, 22, 0.15), rgba(58, 146, 157, 0.85));
  color: #eadbba4d;
  padding: 1rem;
  text-align: center;
`;

export const Sidebar = styled('nav')`
  grid-area: sidebar;
  background: linear-gradient(to bottom, rgba(207, 175, 131, 0.25), rgba(58, 146, 157, 0.85));
  padding: 1rem;
`;

export const MainContent = styled('main')`
  grid-area: main;
  background: linear-gradient(to bottom, rgba(18, 22, 25, 0.85), rgba(58, 146, 157, 0.85));
  padding: 1rem;
`;

export const Footer = styled('footer')`
  grid-area: footer;
  background: linear-gradient(to right, rgba(18, 22, 25, 0.15), rgba(58, 146, 157, 0.85));
  color: #eadbba4d;
  padding: 1rem;
  text-align: center;
`;
