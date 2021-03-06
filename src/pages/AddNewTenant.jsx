import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Select from "@mui/material/Select";
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
import Toolbar from "@mui/material/Toolbar";
import DashboardPage from "../components/utils/DashboardPage";
import { styled } from "@mui/material/styles";
import { getPropertyPost } from "../services/property";
import { useUser } from "../hooks/useUser";
import { addnewTenant } from "../services/tenant";
import { getLease } from "../services/lease";
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
  const [lease, setLease] = useState("");
  const [propertyOptions, setPropertyOptions] = useState([]);
  const [leaseOptions, setLeaseOptions] = useState([]);

  const { state } = useUser();
  useEffect(async () => {
    const propertyData = await getPropertyPost({
      LandlordId: state.Id,
    });

    propertyData.properties.forEach((item) => {
      delete item.Properties_LandlordId;
    });
    setPropertyOptions(propertyData.properties);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("YEET");
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const tenant = await addnewTenant({
      tenant_forename: data.get("tenant_forename"),
      tenant_surname: data.get("tenant_surname"),
      tenant_email: data.get("Email"),
      tenant_number: data.get("Phone_number"),
      tenant_lease: lease,
      landlord_id: state.Id,
      tenant_password: data.get("Password"),
      tenant_property: Property,
    });
    // navigate("/dashboard", { replace: true });
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
                  name="tenant_forename"
                  required
                  fullWidth
                  id="tenant_forename"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  autoComplete="given-name"
                  name="tenant_surname"
                  required
                  fullWidth
                  id="tenant_surname"
                  label="Second Name"
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
                <FormControl fullWidth style={{ backgroundColor: "white" }}>
                  <InputLabel id="demo-simple-select-label">
                    Property
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Property}
                    label="Property"
                    onChange={async (event) => {
                      const leaseData = await getLease({
                        PropertyId: event.target.value,
                      });

                      console.log(leaseData);
                      setLeaseOptions(leaseData.leases);
                      setProperty(event.target.value);
                    }}
                  >
                    {propertyOptions.map((item) => (
                      <MenuItem
                        key={item.Properties_Id}
                        value={item.Properties_Id}
                      >
                        {item.Properties_AddressLine_1}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth style={{ backgroundColor: "white" }}>
                  <InputLabel id="demo-simple-select-label">Lease</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={lease}
                    label="Property"
                    onChange={(event) => setLease(event.target.value)}
                  >
                    {leaseOptions.map((item) => (
                      <MenuItem key={item.lease_Id} value={item.lease_Id}>
                        {item.lease_DocumentName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  required
                  fullWidth
                  name="Password"
                  label="Password"
                  type="Password"
                  id="Password"
                  autoComplete="Password"
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
              ADD TENANT
            </ColorButton>
          </Box>
        </Box>
      </Container>
    </DashboardPage>
  );
}
