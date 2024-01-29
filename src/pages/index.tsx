import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../components/Link";
import ProTip from "../components/ProTip";
import Copyright from "../components/Copyright";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Studio UI : TypeScript, NextJS, MUI,StyledComponents,
        </Typography>
        <Link href="/feature" color="secondary">
          Go to the Feature Page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}