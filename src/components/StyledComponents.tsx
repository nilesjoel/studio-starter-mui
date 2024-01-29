import { styled, keyframes } from '@mui/system';

// Define keyframes for the float animation
const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

// Styled component for the SplashPage (equivalent to html and body)
export const SplashPage = styled('div')`
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: url('splash1.png') no-repeat center center fixed; 
  background-size: cover;
  background-color: #003366;
`;

// Styled component for the Logo (equivalent to .logo)
export const Logo = styled('div')`
  margin-top: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${float} 3s ease-in-out infinite;
`;

// Styled component for the LogoImage (equivalent to img inside .logo)
export const LogoImage = styled('img')`
  max-width: 100px; // Adjust as needed
`;

// Styled component for the LogoTitle (equivalent to h1 inside .logo)
export const LogoTitle = styled('h1')(({ theme }) => `
  font-family: 'social-gothic', sans-serif; // Choose your font
  color: #003366; // Adjust color
  ${theme.breakpoints.up('sm')} {
    // Responsive font size or other styles
  }
`);
