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
import { updateTenant, getTenantPostById } from "../services/tenant";
import { getLease } from "../services/lease";
import { useSearchParams } from "react-router-dom";
const theme = createTheme();

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  borderRadius: "2rem",
  backgroundColor: "#26b789",
  "&:hover": {
    backgroundColor: "#4acfa5",
  },
}));

export default function EditTenant() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [Property, setProperty] = useState("");
  const [lease, setLease] = useState("");
  const [propertyOptions, setPropertyOptions] = useState([]);
  const [leaseOptions, setLeaseOptions] = useState([]);
  const [values, setValues] = useState({});

  const { state } = useUser();
  useEffect(async () => {
    const propertyData = await getPropertyPost({
      LandlordId: state.Id,
    });

    const tenantData = await getTenantPostById({
      Id: searchParams.get("id"),
    });
    let propertyLeaseId = 0;
    propertyData.properties.forEach((item) => {
      if (item.Properties_Id === tenantData.tenants[0].Tenants_PropertyId) {
        propertyLeaseId = item.Properties_Id;
      }
    });
    console.log({
      tenant_forename: tenantData.tenants[0].Tenants_Forename,
      tenant_surname: tenantData.tenants[0].Tenants_Surname,
      tenant_email: tenantData.tenants[0].Tenants_Email,
      tenant_number: tenantData.tenants[0].Tenants_PhoneNumber,
      tenant_lease: tenantData.tenants[0].Tenants_leaseId.toString(),
      tenant_property: tenantData.tenants[0].Tenants_PropertyId.toString(),
    });
    setValues({
      tenant_forename: tenantData.tenants[0].Tenants_Forename,
      tenant_surname: tenantData.tenants[0].Tenants_Surname,
      tenant_email: tenantData.tenants[0].Tenants_Email,
      tenant_number: tenantData.tenants[0].Tenants_PhoneNumber,
      tenant_lease: tenantData.tenants[0].Tenants_leaseId.toString(),
      tenant_property: tenantData.tenants[0].Tenants_PropertyId.toString(),
    });
    setLease(tenantData.tenants[0].Tenants_leaseId.toString());
    setProperty(tenantData.tenants[0].Tenants_PropertyId.toString());
    const leaseData = await getLease({
      PropertyId: propertyLeaseId,
    });

    setLeaseOptions(leaseData.leases);

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
    const tenant = await updateTenant({
      tenant_id: searchParams.get("id"),
      tenant_forename: data.get("tenant_forename"),
      tenant_surname: data.get("tenant_surname"),
      tenant_email: data.get("Email"),
      tenant_number: data.get("Phone_number"),
      tenant_lease: lease,
      tenant_password: data.get("Password"),
      tenant_property: Property,
    });
    // navigate("/dashboard", { replace: true });
  };
  console.log(values.tenant_lease);
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
            Edit Tenant
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
                  name="tenant_forename"
                  required
                  fullWidth
                  id="tenant_forename"
                  value={values.tenant_forename}
                  onChange={(event) => {
                    setValues({
                      tenant_forename: event.target.value,
                      tenant_surname: values.tenant_surname,
                      tenant_email: values.tenant_email,
                      tenant_number: values.tenant_number,
                      tenant_lease: values.tenant_lease,
                      tenant_property: values.tenant_property,
                    });
                  }}
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  name="tenant_surname"
                  required
                  value={values.tenant_surname}
                  fullWidth
                  onChange={(event) => {
                    setValues({
                      tenant_forename: values.tenant_forename,
                      tenant_surname: event.target.value,
                      tenant_email: values.tenant_email,
                      tenant_number: values.tenant_number,
                      tenant_lease: values.tenant_lease,
                      tenant_property: values.tenant_property,
                    });
                  }}
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
                  onChange={(event) => {
                    setValues({
                      tenant_forename: values.tenant_forename,
                      tenant_surname: values.tenant_surname,
                      tenant_email: event.target.value,
                      tenant_number: values.tenant_number,
                      tenant_lease: values.tenant_lease,
                      tenant_property: values.tenant_property,
                    });
                  }}
                  name="Email"
                  label="Email"
                  value={values.tenant_email}
                  type="Email"
                  id="Email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  required
                  onChange={(event) => {
                    setValues({
                      tenant_forename: values.tenant_forename,
                      tenant_surname: values.tenant_surname,
                      tenant_email: values.tenant_email,
                      tenant_number: event.target.value,
                      tenant_lease: values.tenant_lease,
                      tenant_property: values.tenant_property,
                    });
                  }}
                  fullWidth
                  id="Phone_number"
                  value={values.tenant_number}
                  label="Phone Number"
                  name="Phone_number"
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
                    // defaultValue={p}
                    label="Property"
                    onChange={async (event) => {
                      const leaseData = await getLease({
                        PropertyId: event.target.value,
                      });

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
                    // value={lease}
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
              UPDATE TENANT
            </ColorButton>
          </Box>
        </Box>
      </Container>
    </DashboardPage>
  );
}
