import * as React from 'react';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

// Define the types for the component's props
interface GlowingPanelProps {
  gradient?: string;
  boxShadowSize?: string;
  boxShadowColor?: string;
  borderRadius?: string;
  borderSize?: string;// Double check this.
  children: React.ReactNode;
}

// Styled component for the glowing effect
const GlowingPanelWrapper = styled(Box)<GlowingPanelProps>(({ 
  gradient = 'linear-gradient(to right, #cc814e, #ffca87)', // Default gradient
  boxShadowSize = '15px', // Default shadow size
  boxShadowColor = 'black', // Default shadow color
  borderRadius = '20px', // Default border radius
  theme 
}) => ({
  position: 'relative',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: borderRadius,
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    background: gradient,
    borderRadius: `calc(${borderRadius} + 2px)`, // Slightly larger to create the border effect
    zIndex: 0,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 2,
    left: 2,
    right: 2,
    bottom: 2,
    borderRadius: borderRadius,
    boxShadow: `inset 0 0 ${boxShadowSize} ${boxShadowColor}`,
    zIndex: 1,
  }
}));

// Usage of GlowingPanel
export const GlowPanel: React.FC<GlowingPanelProps> = ({ children, ...props }) => {
  return (
    <GlowingPanelWrapper {...props}>
      {children}
    </GlowingPanelWrapper>
  );
};




