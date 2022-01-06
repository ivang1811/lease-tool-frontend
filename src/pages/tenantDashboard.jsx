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
import { getLeaseByTenant } from "../services/lease";
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
    label: "Property Address",
  },
  {
    id: "Properties_AddressLine_2",
    numeric: false,
    disablePadding: false,
    label: "Start Date",
  },
  {
    id: "Properties_AddressLine_Borough",
    numeric: false,
    disablePadding: false,
    label: "End Date",
  },
  {
    id: "Properties_AddressLine_Postcode",
    numeric: false,
    disablePadding: false,
    label: "Monthly Rent",
  },
  {
    id: "Properties_PropertyType",
    numeric: false,
    disablePadding: false,
    label: "Deposit",
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
  console.log(data);
  return data.map((item) => {
    return createData(
      item.leases.lease_Id,
      item.property.Properties_AddressLine_1,
      "20/12/2022",
      "20/12/2023",
      "£1,600",
      "£3,000",
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

export default function TenantDashboard() {
  const [rows, setRows] = useState([]);
  const { state } = useUser();
  useEffect(async () => {
    const leaseData = await getLeaseByTenant({
      Id: state.Id,
    });

    const cleanedRows = transformData(leaseData.leases);
    setRows(cleanedRows);
  }, []);
  console.log(rows);
  return (
    <DashboardPage containerSize="lg" tenant={true}>
      <Typography component="h1" variant="h5" style={{ marginBottom: 15 }}>
        Your Lease
      </Typography>
      <ManagementTable rows={rows} headCells={headCells}></ManagementTable>
    </DashboardPage>
  );
}
