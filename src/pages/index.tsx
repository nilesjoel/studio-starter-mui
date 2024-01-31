import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../components/Link";
import ProTip from "../components/ProTip";
import Copyright from "../components/Copyright";
import { GradientBorderComponent } from "../components/Layouts/PanelGlow";
import { GlowPanel } from "../components/Layouts/PanelGlow/GridGlow";
import GlowingPanel from "../components/Layouts/PanelGlow/GlowingPanel";

export default function Splash() {
  return (<GlowingPanel contentPadding="16px">
    <Container maxWidth="lg" sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
      
        <GlowingPanel
          // gradientBorder="linear-gradient(to right, #cc814e, #ffca87)"
          gradientBorder="linear-gradient(to left, #f06, #aaf)"
          borderRadius="10px"
          //  borderSize="44px"
          backgroundColor="#f06"
          // boxShadow="inset 0 0 0 15px black, 0 8px 6px -6px black"
          boxShadowColor="#f06"
        // imageUrl="background1.png"
        >
          <Container maxWidth="lg" sx={{ margin: '3rem' }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Studio UI : TypeScript, NextJS, MUI,StyledComponents,
            </Typography>
            <Link href="/feature" color="secondary">
              Go to the Feature Page
            </Link>
          </Container>
        </GlowingPanel>

        {/* Default Glowing Panel with added content padding */}
        <GlowingPanel contentPadding="16px">
          <p>Default Glowing Panel with Padding</p>
        </GlowingPanel>

        {/* Glowing Panel with customized gradient border and content padding */}
        <GlowingPanel
          gradientBorder="linear-gradient(to right, #f06, #aaf)"
          contentPadding="32px"
        >
          <p>Custom Gradient Border with Padding</p>
        </GlowingPanel>

        {/* Glowing Panel with custom box shadow, border radius, and content padding */}
        <GlowingPanel
          boxShadow="inset 0 0 20px rgba(255, 105, 180, 0.8), 0 8px 6px -6px rgba(255, 105, 180, 0.8)"
          borderRadius="10px"
          contentPadding="24px"
          imageUrl="background1.png"
        >
          <p>Custom Box Shadow, sBorder Radius, and Padding</p>
        </GlowingPanel>

        {/* Glowing Panel with all properties customized including content padding */}
        <GlowingPanel
          gradientBorder="linear-gradient(to left, #33ccff, #ff99cc)"
          boxShadow="inset 0 0 10px rgba(0, 0, 255, 0.5), 0 8px 6px -6px rgba(0, 0, 255, 0.5)"
          borderRadius="2rem"
          contentPadding="40px"
        >
          <p>All Properties Customized with Padding</p>
        </GlowingPanel>


        <ProTip />
        <Copyright />
    </Container>
  </GlowingPanel>);
}
