import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
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
const theme = createTheme();

export default function CreateNewLease() {
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
    <DashboardPage containerSize="sm">
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <HomeIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Create New Lease For Property
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Property</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Property}
            label="Age"
            onChange={(event) => setProperty(event.target.value)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <TextField
          margin="normal"
          required
          fullWidth
          id="TenantName"
          label="Tenant Name"
          name="TenantName"
          autoComplete="TenantName"
          autoFocus
        />

        <TextField
          margin="normal"
          required
          fullWidth
          id="TenantEmail"
          label="Tenant Email"
          name="TenantEmail"
          autoComplete="TenantEmail"
          autoFocus
        />

        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Do you agree to this lease as the landlord?"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Create New lease
        </Button>
      </Box>
    </DashboardPage>
  );
}
