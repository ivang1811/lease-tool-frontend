import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DashboardPage from "../components/utils/DashboardPage";
import { Typography } from "@material-ui/core";
import ManagementTable from "../components/utils/ManagementTable";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
const theme = createTheme();

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  padding: "1rem",
  backgroundColor: "#26b789",
  "&:hover": {
    backgroundColor: "#4acfa5",
  },
}));

const headCells = [
  {
    id: "Properties_AddressLine_1",
    numeric: false,
    disablePadding: true,
    label: "First Name",
  },
  {
    id: "Properties_AddressLine_2",
    numeric: false,
    disablePadding: false,
    label: "Second Name",
  },
  {
    id: "Properties_AddressLine_Borough",
    numeric: false,
    disablePadding: false,
    label: "Email",
  },
  {
    id: "Properties_AddressLine_Postcode",
    numeric: false,
    disablePadding: false,
    label: "Property",
  },
  {
    id: "Properties_PropertyType",
    numeric: false,
    disablePadding: false,
    label: "Lease End Date",
  },
];

function createData(
  Properties_Id,
  Properties_AddressLine_1,
  Properties_AddressLine_2,
  Properties_AddressLine_Borough,
  Properties_AddressLine_Postcode,
  Properties_PropertyType
) {
  return {
    Properties_Id,
    Properties_AddressLine_1,
    Properties_AddressLine_2,
    Properties_AddressLine_Borough,
    Properties_AddressLine_Postcode,
    Properties_PropertyType,
  };
}

const rows = [
  createData(
    "1",
    "James",
    "May",
    "James.May@gmail.com",
    "103 Road Road, XW2 4VW",
    "12/12/2022"
  ),
];
export default function Tenants() {
  return (
    <DashboardPage containerSize="lg">
      <Typography component="h1" variant="h5" style={{ marginBottom: 15 }}>
        Manage Tenant
      </Typography>

      <ManagementTable headCells={headCells} rows={rows}></ManagementTable>
      <Link
        to={"/dashboard/add-tenant"}
        style={{ textDecoration: "none", width: "100%" }}
      >
        <ColorButton
          fullWidth
          style={{ marginTop: 0, width: "100%" }}
          variant="contained"
        >
          Add New Tenant
        </ColorButton>
      </Link>
    </DashboardPage>
  );
}
