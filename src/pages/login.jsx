import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import ColorToggleButton from "../components/utils/ToggleButton";
import { loginService, tenantService } from "../services/login";
import { styled } from "@mui/material/styles";
import { useUser } from "../hooks/useUser";
const theme = createTheme();

const useStyles = makeStyles({
  flexGrow: {
    flex: "1",
  },
  button: {
    backgroundColor: "#26b789",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#4acfa5",
      color: "#fff",
    },
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  borderRadius: "2rem",
  backgroundColor: "#26b789",
  "&:hover": {
    backgroundColor: "#4acfa5",
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [message, setMessage] = useState(false);
  const [accountType, setAccountType] = useState("Tenant");
  const { state, dispatch } = useUser();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    let userData;
    console.log(accountType);
    if (accountType === "Tenant") {
      userData = await tenantService({
        email: data.get("email"),
        password: data.get("password"),
      });
      userData.accountType = accountType;
      if (userData?.Id) {
        dispatch({ type: "SET", data: userData });
        navigate("/tenant-dashboard", { replace: true });
      } else {
        setMessage(true);
      }
    } else {
      userData = await loginService({
        email: data.get("email"),
        password: data.get("password"),
      });
      userData.accountType = accountType;
      if (userData?.Id) {
        dispatch({ type: "SET", data: userData });
        navigate("/dashboard", { replace: true });
      } else {
        setMessage(true);
      }
    }
  };

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
          style={{
            backgroundColor: "#f0f0f0",
            borderRadius: "2rem",
            zIndex: 11,
          }}
          maxWidth="sm"
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              padding: "3rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h3">
              Sign In
            </Typography>
            {message && (
              <Typography style={{ color: "red" }}>
                * Email and Password do not match
              </Typography>
            )}
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
              style={{ textAlign: "center" }}
            >
              <ColorToggleButton setAccountType={setAccountType} />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                style={{ backgroundColor: "white" }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                style={{ backgroundColor: "white", borderRadius: "10px" }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Grid container>
                <Grid item xs>
                  <a href="#" variant="body2"></a>
                </Grid>
                <Grid item>
                  <a href="/register" variant="body2">
                    Forgot password?
                  </a>
                </Grid>
              </Grid>
              <ColorButton
                type="submit"
                fullWidth
                color="success"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                // className={classes.button}
              >
                LOG IN
              </ColorButton>
            </Box>
            <div
              style={{ width: "100%", borderTop: "2px solid #a1a1a1" }}
            ></div>
            <Typography
              component="h6"
              variant="h6"
              style={{ marginTop: 11, fontSize: "1rem" }}
            >
              Dont have an account?
            </Typography>
            <ColorButton
              type="submit"
              fullWidth
              color="success"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // className={classes.button}
            >
              <Link
                to="/register"
                style={{ color: "white", textDecoration: "none" }}
              >
                REGISTER HERE
              </Link>
            </ColorButton>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
