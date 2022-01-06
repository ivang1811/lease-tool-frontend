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
import { useForm } from "react-hook-form";

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
  helperText: {
    color: theme.palette.error.main,
    fontSize: "0.8rem",
  },
}));

export default function SignUpForm() {
  const { state, dispatch } = useUser();
  const [formError, setFormError] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const classes = useStyles();
  const theme = useTheme();

  const onSubmit = async (data) => {
    if (data["password"] !== data["Confirmpassword"]) {
      setFormError("Passwords do not match");
    } else {
      setFormError("");
      const registerData = await registerService({
        type: "Tenant",
        firstName: data["firstName"],
        lastName: data["lastName"],
        email: data["email"],
        password: data["password"],
        phoneNumber: data["phonenumber"],
      });
      dispatch({ type: "SET", data: registerData });
      navigate("/dashboard", { replace: true });
    }
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={(e) => e.preventDefault()}
      sx={{ mt: 3 }}
      style={{ textAlign: "center" }}
    >
      {/* <ColorToggleButton /> */}
      <h3 className={classes.helperText}>{formError}</h3>
      <Grid container spacing={2} style={{ marginTop: 3 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            style={{ backgroundColor: "white" }}
            autoComplete="given-name"
            name="firstName"
            required
            error={errors.firstName}
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
            {...register("firstName", { required: true, maxLength: 20 })}
          />
          {errors.firstName && (
            <span className={classes.helperText}>This field is required</span>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            style={{ backgroundColor: "white" }}
            required
            fullWidth
            error={errors.lastName}
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            {...register("lastName", { required: true, maxLength: 30 })}
          />
          {errors.lastName && (
            <span className={classes.helperText}>This field is required</span>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            style={{ backgroundColor: "white" }}
            required
            fullWidth
            id="email"
            label="Email Address"
            error={errors.email}
            name="email"
            autoComplete="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && (
            <span className={classes.helperText}>{errors.email.message}</span>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            style={{ backgroundColor: "white" }}
            required
            fullWidth
            error={errors.password}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            {...register("password", {
              required: true,
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <span className={classes.helperText}>
              The password must be at least 8 characters long
            </span>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            style={{ backgroundColor: "white" }}
            required
            fullWidth
            error={errors.Confirmpassword}
            name="Confirmpassword"
            label="Confirm Password"
            type="password"
            id="Confirmpassword"
            autoComplete="nConfirmpassword"
            {...register("Confirmpassword", { required: true })}
          />
          {errors.Confirmpassword && (
            <span className={classes.helperText}>This field is required</span>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            style={{ backgroundColor: "white" }}
            fullWidth
            error={errors.phonenumber}
            name="phonenumber"
            label="Phone"
            type="phonenumber"
            id="phonenumber"
            autoComplete="phonenumber"
            {...register("phonenumber", { required: true })}
          />
          {errors.phonenumber && (
            <span className={classes.helperText}>This field is required</span>
          )}
        </Grid>
        <Grid item xs={12}>
          <a
            href={
              "https://lease-tool.s3.eu-west-1.amazonaws.com/Rental+Buddy+Terms+and+Conditions+of+use+(1).docx"
            }
          >
            Download Terms of service
          </a>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I agree to the terms of service "
            {...register("checkbox", { required: true })}
            error={errors.checkbox}
          />

          {errors.checkbox && (
            <span className={classes.helperText}>This field is required</span>
          )}
        </Grid>
      </Grid>
      <ColorButton
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleSubmit(onSubmit)}
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
