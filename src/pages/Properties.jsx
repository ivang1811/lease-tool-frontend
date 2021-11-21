import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DashboardPage from "../components/utils/DashboardPage";
import { Typography } from "@material-ui/core";
import ManagementTable from "../components/utils/ManagementTable";
import Button from "@mui/material/Button";
const theme = createTheme();

export default function Properties() {
  return (
    <DashboardPage containerSize="lg">
      <Typography component="h1" variant="h5" style={{ marginBottom: 15 }}>
        Manage Properties - table to be designed currently copied from tenants
      </Typography>
      <Button variant="contained" sx={{ mt: 3, mb: 2 }}>
        Add New Property
      </Button>
      <ManagementTable></ManagementTable>
    </DashboardPage>
  );
}
