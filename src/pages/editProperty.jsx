import React, { useState, useEffect } from "react";
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
import {
  addPropertyService,
  getPropertyPostById,
  updateProperty,
} from "../services/property";
import { useSearchParams } from "react-router-dom";
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

export default function EditProperty() {
  const [Property, setProperty] = useState("");
  const { state } = useUser();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [values, setValues] = useState({});

  useEffect(async () => {
    const propertyData = await getPropertyPostById({
      Id: searchParams.get("id"),
    });
    console.log(propertyData);

    setValues({
      Properties_AddressLine_1:
        propertyData.tenants[0].Properties_AddressLine_1,
      Properties_AddressLine_2:
        propertyData.tenants[0].Properties_AddressLine_2,
      Properties_AddressLine_Borough:
        propertyData.tenants[0].Properties_AddressLine_Borough,
      Properties_AddressLine_Postcode:
        propertyData.tenants[0].Properties_AddressLine_Postcode,
      Properties_PropertyType: propertyData.tenants[0].Properties_PropertyType,
    });
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    const propertyData = await updateProperty({
      Id: searchParams.get("id"),
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
            Edit Property
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
                  value={values.Properties_AddressLine_1}
                  onChange={(event) => {
                    setValues({
                      Properties_AddressLine_1: event.target.value,
                      Properties_AddressLine_2: values.Properties_AddressLine_2,
                      Properties_AddressLine_Borough:
                        values.Properties_AddressLine_Borough,
                      Properties_AddressLine_Postcode:
                        values.Properties_AddressLine_Postcode,
                      Properties_PropertyType: values.Properties_PropertyType,
                    });
                  }}
                  id="AddressLine_1"
                  label="Address Line 1"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  required
                  value={values.Properties_AddressLine_Postcode}
                  fullWidth
                  name="AddressLine_Postcode"
                  label="Address Line Postcode"
                  type="AddressLine_Postcode"
                  id="AddressLine_Postcode"
                  autoComplete="nConfirmpassword"
                  onChange={(event) => {
                    setValues({
                      Properties_AddressLine_1: values.Properties_AddressLine_1,
                      Properties_AddressLine_2: values.Properties_AddressLine_2,
                      Properties_AddressLine_Borough:
                        values.Properties_AddressLine_Borough,
                      Properties_AddressLine_Postcode: event.target.value,
                      Properties_PropertyType: values.Properties_PropertyType,
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  required
                  fullWidth
                  value={values.Properties_AddressLine_2}
                  id="AddressLine_2"
                  label="Address Line 2"
                  name="AddressLine_2"
                  autoComplete="AddressLine_2"
                  onChange={(event) => {
                    setValues({
                      Properties_AddressLine_1: values.Properties_AddressLine_1,
                      Properties_AddressLine_2: event.target.value,
                      Properties_AddressLine_Borough:
                        values.Properties_AddressLine_Borough,
                      Properties_AddressLine_Postcode:
                        values.Properties_AddressLine_Postcode,
                      Properties_PropertyType: values.Properties_PropertyType,
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}></Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  required
                  value={values.Properties_AddressLine_Borough}
                  fullWidth
                  name="AddressLine_Borough"
                  label="Address Line Borough"
                  type="AddressLine_Borough"
                  id="AddressLine_Borough"
                  autoComplete="AddressLine_Borough"
                  onChange={(event) => {
                    setValues({
                      Properties_AddressLine_1: values.Properties_AddressLine_1,
                      Properties_AddressLine_2: values.Properties_AddressLine_2,
                      Properties_AddressLine_Borough: event.target.value,
                      Properties_AddressLine_Postcode:
                        values.Properties_AddressLine_Postcode,
                      Properties_PropertyType: values.Properties_PropertyType,
                    });
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  required
                  fullWidth
                  onChange={(event) => {
                    setValues({
                      Properties_AddressLine_1: values.Properties_AddressLine_1,
                      Properties_AddressLine_2: values.Properties_AddressLine_2,
                      Properties_AddressLine_Borough:
                        values.Properties_AddressLine_Borough,
                      Properties_AddressLine_Postcode:
                        values.Properties_AddressLine_Postcode,
                      Properties_PropertyType: event.target.value,
                    });
                  }}
                  name="PropertyType"
                  label="Property Type"
                  value={values.Properties_PropertyType}
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
              Edit PROPERTY
            </ColorButton>
          </Box>
        </Box>
      </Container>
    </DashboardPage>
  );
}
