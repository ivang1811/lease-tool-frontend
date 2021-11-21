import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PricingContent from "../components/Pricing";
import SignUpForm from "../components/Forms/Register";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}

        <Box
          sx={{
            height: "80vh",
            background:
              "url(" +
              "https://www.whitehorsesurveyors.co.uk/wp-content/uploads/2020/09/Buying-a-House.jpg" +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              width: "100%",
              height: "100%",
            }}
          >
            <Container
              maxWidth="lg"
              style={{ paddingTop: "27vh", color: "white" }}
            >
              <Typography
                component="h1"
                variant="h2"
                align="center"
                gutterBottom
              >
                RentBuddies
              </Typography>
              <Typography variant="h5" align="center" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                sagittis dapibus ex, nec pulvinar orci aliquam id. Suspendisse
                mattis, leo ac dictum porta, nulla magna sollicitudin tortor,
                quis ornare ligula justo sed lorem.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained">Log in</Button>
                <Button variant="outlined">Register</Button>
              </Stack>
            </Container>
          </div>
        </Box>
        <Container maxWidth="md" style={{ marginTop: 15 }}>
          <Typography component="h2" variant="h2" align="center" gutterBottom>
            Register
          </Typography>
          <SignUpForm />
        </Container>
        <PricingContent></PricingContent>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
