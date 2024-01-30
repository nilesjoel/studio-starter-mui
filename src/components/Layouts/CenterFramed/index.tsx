import React from "react";
import Head from "next/head";
import { styled } from "@mui/system";

// Styled components
const BgImage = styled("div")({
  position: "relative",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(to right, rgb(2 21 24), rgba(3,95,114,1))",
});

const BgImageBorderWrapper = styled("div")({
  position: "relative",
  width: "80%",
  height: "80vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "20px",
  padding: "2px",
  background: "linear-gradient(to right, #cc814e, #ffca87)",
  boxSizing: "border-box",
});

const BgImageContainer = styled("div")({
  backgroundImage: 'url("background1.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100%",
  borderRadius: "18px",
  boxShadow: "inset 0 0 0 15px black, 0 8px 6px -6px black",
  overflow: "hidden",
});

const Menu = styled("ul")({
  position: "absolute",
  top: 0,
  left: 0,
  fontSize: "3rem",
  padding: "20px",
  listStyleType: "none",
  fontFamily: "westgate, sans-serif",
  fontWeight: 700,
  fontStyle: "normal",
  zIndex: 2,
});

const MenuItem = styled("li")({
  display: "inline",
  marginRight: "10px",
});

const MenuLink = styled("a")({
  textDecoration: "none",
  color: "white",
});

const CenterCircle = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "200px",
  height: "200px",
  background: "black",
  borderRadius: "50%",
  border: "2px solid #b59f80", // Peach border for the circle
  boxShadow: "3px 6px 8px 2px #7f5833", // Shadow for the circle
  // boxShadow: "0 8px 6px -6px black", // Shadow for the circle
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  zIndex: 1, // Ensure it's above other elements if needed

  "&:hover": {
    // backgroundColor: "#555", // Slightly lighter background on hover
    borderColor: "#9d8a6f", // Lighter peach border on hover
  },
});

const Logo = styled("img")({
  width: "100px",
  height: "auto",
});

const Button = styled("button")({
  display: "inline-block",
  marginTop: "20px",
  padding: "10px 20px",
  backgroundColor: "#2f2216", // Dark background for the button
  color: "#fff", // White text color for contrast
  textDecoration: "none",
  border: "1.5px solid #8e7358", // Peach border for the button
  borderRadius: "25px", // Rounded corners for the button
  cursor: "pointer",
  transition: "all 0.3s ease", // Smooth transition for hover effects

  "&:hover": {
    backgroundColor: "#2f2216", // Slightly lighter background on hover
    borderColor: "#8e7358", // Lighter peach border on hover
  },
});

// TypeScript component
const CenterFramed: React.FC = () => {
  return (
    <>
      <Head>
        <title>Studio Symmetries</title>
        <link rel="stylesheet" href="https://use.typekit.net/lan5nnc.css" />
      </Head>
      <BgImage>
        <BgImageBorderWrapper>
          <BgImageContainer>
            <Menu>
              <MenuItem>
                <MenuLink href="#home">HOME</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink href="#about">FEATURES</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink href="#contact">CONTACT</MenuLink>
              </MenuItem>
              {/* Additional menu items would go here */}
            </Menu>
            <CenterCircle>
              <Logo src="logo.png" alt="Studio Symmetries Logo" />
              <Button>Click Here</Button>
            </CenterCircle>
          </BgImageContainer>
        </BgImageBorderWrapper>
      </BgImage>
    </>
  );
};

export default CenterFramed;
