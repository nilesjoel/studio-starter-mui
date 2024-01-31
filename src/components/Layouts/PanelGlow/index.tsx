import * as React from 'react';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

// Define the types for the component's props if necessary
interface GradientBorderBoxProps {
  // You can define props here
  imageUrl: string;
  children: React.ReactNode;
}

const BgImage = styled(Box)(({ theme }) => ({
  padding: '2rem', 
  position: 'relative',
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(to right, rgb(2 21 24), rgba(3,95,114,1))',
}));

const BgImageBorderWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '80%',
  height: '80vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '20px', // Match this to the border-radius of .bg-image-container
  padding: '2px', // This padding effectively becomes the border
  background: 'linear-gradient(to right, #cc814e, #ffca87)', // Your gradient
  boxSizing: 'border-box',
}));

const BgImageContainer = styled('div')<GradientBorderBoxProps>(({ theme, imageUrl }) => ({
  minWidth: '100%',
    backgroundImage: `url(${imageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%', // Now it will occupy all the space, respecting the padding of the parent
  height: '100%', // Same as above
  borderRadius: '18px', // Slightly less than the wrapper to account for the padding
  boxShadow: 'inset 0 0 0 15px black, 0 8px 6px -6px black', // Shadow for depth
  overflow: 'hidden',
}));

export const GradientBorderComponent: React.FC<GradientBorderBoxProps> = ({ imageUrl, children }) => {
  return (<Box>
    <BgImage>
      <BgImageBorderWrapper>
        <BgImageContainer imageUrl={imageUrl}>
          {/* Content here */}
          {children}
        </BgImageContainer>
      </BgImageBorderWrapper>
    </BgImage>
    </Box>
  );
};
