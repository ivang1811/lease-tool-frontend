import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SideNav from "../components/Dashboard/SideNav";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Toolbar from "@mui/material/Toolbar";
import DashboardPage from "../components/utils/DashboardPage";
import { styled } from "@mui/material/styles";
const theme = createTheme();

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  borderRadius: "2rem",
  backgroundColor: "#26b789",
  "&:hover": {
    backgroundColor: "#4acfa5",
  },
}));

export default function AddNewTenant() {
  const [Property, setProperty] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <DashboardPage containerSize="xl">
      <Container
        style={{
          backgroundColor: "#f0f0f0",
          borderRadius: "2rem",
          zIndex: 11,
        }}
        maxWidth="xl"
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            padding: "3rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#26b789" }}>
            <HomeIcon />
          </Avatar>
          <Typography color={"#26b789"} component="h1" variant="h3">
            Add New Tenant
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
            style={{ textAlign: "center" }}
          >
            <Grid container spacing={2} style={{ marginTop: 3 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  required
                  fullWidth
                  name="Email"
                  label="Email"
                  type="Email"
                  id="Email"
                  autoComplete="Email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  required
                  fullWidth
                  id="Phone_number"
                  label="Phone Number"
                  name="Phone_number"
                  autoComplete="Phone_number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  required
                  fullWidth
                  name="Selectlease"
                  label="Select Lease"
                  type="Selectlease"
                  id="Selectlease"
                  autoComplete="Selectlease"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  required
                  fullWidth
                  name="Deposit"
                  label="Deposit"
                  type="Deposit"
                  id="Deposit"
                  autoComplete="Deposit"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  required
                  fullWidth
                  name="Duration"
                  label="Duration"
                  type="Duration"
                  id="Duration"
                  autoComplete="Duration"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <ColorButton
        type="submit"
        fullWidth
        color="success"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        style={{ padding: "1rem", fontSize: "1rem" }}
        // className={classes.button}
      >
        ADD PROPERTY
      </ColorButton>
    </DashboardPage>
  );
}
