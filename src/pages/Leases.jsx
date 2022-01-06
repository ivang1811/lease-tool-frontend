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
import { getLeaseByLandlord } from "../services/lease";
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
    label: "Document Name",
  },
  {
    id: "Properties_AddressLine_2",
    numeric: false,
    disablePadding: false,
    label: "Property Address",
  },
  {
    id: "Properties_AddressLine_Borough",
    numeric: false,
    disablePadding: false,
    label: "Property Borough",
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
  Properties_Id,
  Properties_AddressLine_1,
  Properties_AddressLine_2,
  Properties_AddressLine_Borough,
  Properties_AddressLine_Postcode,
  Properties_PropertyType,
  lease,
  leaseTable
) {
  return {
    Properties_Id,
    Properties_AddressLine_1,
    Properties_AddressLine_2,
    Properties_AddressLine_Borough,
    Properties_AddressLine_Postcode,
    Properties_PropertyType,
    lease,
    leaseTable,
  };
}

const transformData = (data) => {
  return data.map((item) => {
    return createData(
      item.leases.lease_Id,
      item.leases.lease_DocumentName,
      item.property.Properties_AddressLine_1,
      item.property.Properties_AddressLine_Borough,
      item.property.Properties_AddressLine_Postcode,
      item.property.Properties_PropertyType,
      item.leases.lease_DocumentLink,
      true
    );
  });
};

const rowsv = [
  createData(
    "James May",
    "James.May@gmail.com",
    "103 Road Road, XW2 4VW",
    "078210312",
    "430"
  ),
];

export default function Leases() {
  const [rows, setRows] = useState([]);
  const { state } = useUser();
  useEffect(async () => {
    const leaseData = await getLeaseByLandlord({
      LandlordId: state.Id,
    });

    const cleanedRows = transformData(leaseData.leases);
    setRows(cleanedRows);
  }, []);
  console.log(rows);
  return (
    <DashboardPage containerSize="lg">
      <Typography component="h1" variant="h5" style={{ marginBottom: 15 }}>
        Manage Leases
      </Typography>
      <ManagementTable rows={rows} headCells={headCells}></ManagementTable>
      <Link
        to={"/dashboard/create-lease"}
        style={{ textDecoration: "none", width: "100%" }}
      >
        <ColorButton
          fullWidth
          style={{ marginTop: 0, width: "100%" }}
          variant="contained"
        >
          Add New Lease
        </ColorButton>
      </Link>
    </DashboardPage>
  );
}
