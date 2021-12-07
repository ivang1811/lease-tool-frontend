import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DashboardPage from "../components/utils/DashboardPage";
import { Typography } from "@material-ui/core";
import ManagementTable from "../components/utils/ManagementTable";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { getPropertyPost } from "../services/property";
import { useUser } from "../hooks/useUser";
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
    label: "Address Line 1",
  },
  {
    id: "Properties_AddressLine_2",
    numeric: false,
    disablePadding: false,
    label: "Address Line 2",
  },
  {
    id: "Properties_AddressLine_Borough",
    numeric: false,
    disablePadding: false,
    label: "Borough",
  },
  {
    id: "Properties_AddressLine_Postcode",
    numeric: false,
    disablePadding: false,
    label: "Post Code",
  },
  {
    id: "Properties_PropertyType",
    numeric: false,
    disablePadding: false,
    label: "Property Type",
  },
];

function createData(
  Properties_AddressLine_1,
  Properties_AddressLine_2,
  Properties_AddressLine_Borough,
  Properties_AddressLine_Postcode,
  Properties_PropertyType
) {
  return {
    Properties_AddressLine_1,
    Properties_AddressLine_2,
    Properties_AddressLine_Borough,
    Properties_AddressLine_Postcode,
    Properties_PropertyType,
  };
}

const rowsv = [
  createData(
    "James May",
    "James.May@gmail.com",
    "103 Road Road, XW2 4VW",
    "078210312",
    "430"
  ),
];

export default function Properties() {
  const [rows, setRows] = useState([]);
  const { state } = useUser();
  useEffect(async () => {
    const propertyData = await getPropertyPost({
      LandlordId: state.Id,
    });
    console.log(rowsv);
    console.log(propertyData);
    propertyData.properties.forEach((item) => {
      delete item.Properties_LandlordId;
    });
    setRows(propertyData.properties);
  }, []);
  console.log(rows);
  return (
    <DashboardPage containerSize="lg">
      <Typography component="h1" variant="h5" style={{ marginBottom: 15 }}>
        Manage Properties
      </Typography>
      <ManagementTable rows={rows} headCells={headCells}></ManagementTable>
      <Link
        to={"/dashboard/add-property"}
        style={{ textDecoration: "none", width: "100%" }}
      >
        <ColorButton
          fullWidth
          style={{ marginTop: 0, width: "100%" }}
          variant="contained"
        >
          Add New Property
        </ColorButton>
      </Link>
    </DashboardPage>
  );
}
