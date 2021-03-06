import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import SideNav from "../Dashboard/SideNav";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
const theme = createTheme();

export default function DashboardPage({
  children,
  containerSize,
  WithoutBox = false,
  tenant,
}) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", maxHeight: "93vh" }}>
        <CssBaseline />
        <SideNav tenant={tenant} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "93vh",
            overflow: "auto",
          }}
        >
          <Container maxWidth={containerSize}>
            {WithoutBox ? (
              <> {children}</>
            ) : (
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {children}
              </Box>
            )}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
