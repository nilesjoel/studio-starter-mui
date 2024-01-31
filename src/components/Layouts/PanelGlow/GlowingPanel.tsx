import * as React from 'react';
import { styled } from '@mui/system';
import { Box } from '@mui/material';



//     boxShadow: boxShadow || `
//     inset 0 15px 15px -15px black, /* Top inset shadow */
//     inset 0 -15px 15px -15px black, /* Bottom inset shadow */
//     inset 0 0 0 15px black, /* Inset shadow all around */
//     0 8px 6px -6px black /* Outer shadow */
//   `,
// boxShadow: boxShadow || 'inset 0 0 0 15px black, 0 8px 15px -15px black',
const boxShadowDefault : string = `inset 0 2rem 2rem -2rem black, inset 0 -4rem 4rem -3rem black, inset 0 0 0 4rem black, 0 0.5rem 0.4rem -0.4rem black`;

const defaultBackgroundColor: string = 'white';

// const defaultGradientBorder = 'linear-gradient(to right, #cc814e, #ffca87)'
const defaultGradientBorderDirection : string = 'to right';
const defaultGradientBorderColors = ["green", "#ffca87"];

const defaultGradientBorder = `linear-gradient(${defaultGradientBorderDirection},
    ${defaultGradientBorderColors[0]}, ${defaultGradientBorderColors[1]})`;


interface GlowingPanelProps {
    gradientBorder?: string; // Gradient Border for the GlowingPanelWrapper
    borderRadius?: string; // Border Radius for the GlowingPanelWrapper
    boxShadow?: string; // Box Shadow for the GlowingPanelBackground
    boxShadowColor?: string; // Box Shadow Color for the GlowingPanelBackground
    backgroundColor?: string; // Background Color for the ContentWrapper
    imageUrl?: string; // Image URL for the ContentWrapper
    contentPadding?: string; // Padding for the ContentWrapper
    children?: React.ReactNode; // Content for the ContentWrapper
}

const GlowingPanelWrapper = styled('div')<GlowingPanelProps>(
    ({ gradientBorder, borderRadius }) => ({
        margin: '1rem',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: borderRadius || '20px', // 
        padding: '1rem .2rem', // This padding effectively becomes the border
        background: gradientBorder || defaultGradientBorder,
        boxSizing: 'border-box', // 
        width: '100%',
        height: '100%',
        overflow: 'hidden' // 
    })
);

const GlowingPanelBackground = styled('div')<GlowingPanelProps>(
    ({ boxShadow, boxShadowColor, borderRadius }) => {
        console.log({ boxShadow, boxShadowColor, borderRadius })
        let panelBoxShadow = undefined;

        const insetColor = boxShadowColor || 'silver';

        if (boxShadow && boxShadowColor) {
            console.log("boxShadow and boxShadowColor are both defined");
            panelBoxShadow = boxShadow;
        }
        else if (!boxShadow && boxShadowColor) {
            console.log("boxShadowColor is defined but boxShadow is not");
            panelBoxShadow = `inset 0 2rem 2rem -2rem ${insetColor}, inset 0 -4rem 4rem -3rem ${insetColor}, inset 0 0 0 4rem ${insetColor}, 0 0.5rem 0.4rem -0.4rem ${insetColor}`;
        }
        else {
            console.log("boxShadow and boxShadowColor are both undefined");
            panelBoxShadow = boxShadowDefault;
        }


        // const boxShadowCustomInset = `inset 0 2rem 2rem -2rem ${insetColor}, inset 0 -4rem 4rem -3rem ${insetColor}, inset 0 0 0 4rem ${insetColor}, 0 0.5rem 0.4rem -0.4rem ${insetColor}`;

        return ({
            backgroundColor: 'white',
            boxShadow: panelBoxShadow, // Default box shadow
            borderRadius: borderRadius || '18px',
            width: '100%',
            height: '100%',
        })
    });

const ContentWrapper = styled('div')<GlowingPanelProps>(
    ({ imageUrl, borderRadius, contentPadding, backgroundColor }) => ({
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        zIndex: 2, // Higher z-index ensures content is above the background elements
        background: imageUrl ? undefined : backgroundColor ? backgroundColor : defaultBackgroundColor, // Solid white background for the content
        borderRadius: borderRadius || 'inherit', // Inherits the border-radius from the parent or uses the provided value
        padding: contentPadding || '1rem', // Padding inside the ContentWrapper
        margin: '2rem 3.5rem .5rem 2rem',
        maxWidth: 'calc(100% - 2rem)', // Adjust the width based on the padding/margin
        maxHeight: 'calc(100% - 2rem)', // Adjust the height based on the padding/margin
        boxSizing: 'border-box', // Include padding in the element's total width and height
        // overflow    : 'hidden',
        // overflowY   : 'scroll',
        //  // custom scrollbar
        // '&::-webkit-scrollbar': {
        //     width: '1rem'
        // },
        // '&::-webkit-scrollbar-track': {
        //     background: 'black'
        // },
        // '&::-webkit-scrollbar-thumb': {
        //     background: '#888',
        //     borderRadius: '1rem',
        //     border: '3px solid #555'
        // },
    })
);

export const GlowingPanel: React.FC<GlowingPanelProps> = ({
    gradientBorder,
    borderRadius,
    boxShadow,
    boxShadowColor,
    imageUrl,
    contentPadding,
    backgroundColor,
    children
}) => {
    return (
        <GlowingPanelWrapper gradientBorder={gradientBorder} borderRadius={borderRadius}>
            <GlowingPanelBackground boxShadow={boxShadow} boxShadowColor={boxShadowColor} borderRadius={borderRadius}>
                <ContentWrapper backgroundColor={backgroundColor} imageUrl={imageUrl} borderRadius={borderRadius} contentPadding={contentPadding}>
                    {children}{imageUrl}
                </ContentWrapper>
            </GlowingPanelBackground>
        </GlowingPanelWrapper>
    );
};


GlowingPanel.displayName = 'GlowingPanel';
export default GlowingPanel;
