import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { makeStyles, useTheme } from "@material-ui/core";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import ColorToggleButton from "../utils/ToggleButton";
import { registerService } from "../../services/register";
import { useUser } from "../../hooks/useUser";
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

const useStyles = makeStyles((theme) => ({
  submitButton: {
    color: theme.palette.primary,
  },
}));

export default function SignUpForm() {
  const { state, dispatch } = useUser();
  const navigate = useNavigate();
  const classes = useStyles();
  const theme = useTheme();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const registerData = await registerService({
      type: "Tenant",
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
      phoneNumber: data.get("phonenumber"),
    });
    dispatch({ type: "SET", data: registerData });
    console.log("yeet");
    navigate("/dashboard", { replace: true });
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{ mt: 3 }}
      style={{ textAlign: "center" }}
    >
      {/* <ColorToggleButton /> */}
      <Grid container spacing={2} style={{ marginTop: 3 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            style={{ backgroundColor: "white" }}
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            style={{ backgroundColor: "white" }}
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            style={{ backgroundColor: "white" }}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            style={{ backgroundColor: "white" }}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            style={{ backgroundColor: "white" }}
            required
            fullWidth
            name="Confirmpassword"
            label="Confirm Password"
            type="Confirmpassword"
            id="Confirmpassword"
            autoComplete="nConfirmpassword"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            style={{ backgroundColor: "white" }}
            fullWidth
            name="phonenumber"
            label="Phone"
            type="phonenumber"
            id="phonenumber"
            autoComplete="phonenumber"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I agree to the terms of service "
          />
        </Grid>
      </Grid>
      <ColorButton
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign Up
      </ColorButton>
      <div style={{ width: "100%", borderTop: "2px solid #a1a1a1" }}></div>
      <Typography
        component="h6"
        variant="h6"
        style={{ marginTop: 11, fontSize: "1rem" }}
      >
        Alreadty have an account?
      </Typography>
      <ColorButton
        type="submit"
        fullWidth
        color="success"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        // className={classes.button}
      >
        LOGIN HERE
      </ColorButton>
    </Box>
  );
}
