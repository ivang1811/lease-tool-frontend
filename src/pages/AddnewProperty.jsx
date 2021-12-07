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
import { useUser } from "../hooks/useUser";
import { addPropertyService } from "../services/property";
import { useNavigate } from "react-router-dom";
const theme = createTheme();

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  borderRadius: "2rem",
  backgroundColor: "#26b789",
  "&:hover": {
    backgroundColor: "#4acfa5",
  },
}));

export default function AddNewProperty() {
  const [Property, setProperty] = useState("");
  const { state } = useUser();
  const navigate = useNavigate();
  console.log(state);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    const propertyData = await addPropertyService({
      AddressLine_1: data.get("AddressLine_1"),
      AddressLine_2: data.get("AddressLine_2"),
      AddressLine_Borough: data.get("AddressLine_Borough"),
      AddressLine_Postcode: data.get("AddressLine_Postcode"),
      PropertyType: data.get("PropertyType"),
      LandlordId: state.Id,
    });
    navigate("/dashboard", { replace: true });
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
            Add New Property
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
                  name="AddressLine_1"
                  required
                  fullWidth
                  id="AddressLine_1"
                  label="Address Line 1"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  required
                  fullWidth
                  name="AddressLine_Postcode"
                  label="Address Line Postcode"
                  type="AddressLine_Postcode"
                  id="AddressLine_Postcode"
                  autoComplete="nConfirmpassword"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  required
                  fullWidth
                  id="AddressLine_2"
                  label="Address Line 2"
                  name="AddressLine_2"
                  autoComplete="AddressLine_2"
                />
              </Grid>
              <Grid item xs={12} sm={6}></Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  required
                  fullWidth
                  name="AddressLine_Borough"
                  label="Address Line Borough"
                  type="AddressLine_Borough"
                  id="AddressLine_Borough"
                  autoComplete="AddressLine_Borough"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  required
                  fullWidth
                  name="PropertyType"
                  label="Property Type"
                  type="PropertyType"
                  id="PropertyType"
                  autoComplete="PropertyType"
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I agree to the terms of service "
                />
              </Grid>
            </Grid>
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
          </Box>
        </Box>
      </Container>
    </DashboardPage>
  );
}
