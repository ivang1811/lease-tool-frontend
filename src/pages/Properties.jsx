import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DashboardPage from "../components/utils/DashboardPage";
import { Typography } from "@material-ui/core";

const theme = createTheme();

export default function Properties() {
  return (
    <DashboardPage containerSize="sm">
      <Typography component="h1" variant="h5">
        Manage Properties
      </Typography>
    </DashboardPage>
  );
}
