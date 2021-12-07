import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import ColorToggleButton from "../components/utils/ToggleButton";
import SignUpForm from "../components/Forms/Register";
const theme = createTheme();

export default function SignUp() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        style={{ position: "absolute" }}
        sx={{
          height: "93.36vh",
          background: "url(/background.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          zIndex: 10,
        }}
      >
        <Container
          component="main"
          maxWidth="sm"
          style={{
            backgroundColor: "#f0f0f0",
            borderRadius: "2rem",
            // padding: "1rem",
            zIndex: 11,
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "2rem",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h3">
              Sign up
            </Typography>
            <SignUpForm />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
