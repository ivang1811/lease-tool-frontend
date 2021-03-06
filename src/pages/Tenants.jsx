import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DashboardPage from "../components/utils/DashboardPage";
import { Typography } from "@material-ui/core";
import ManagementTable from "../components/utils/ManagementTable";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { getTenantPost } from "../services/tenant";
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
    label: "Phone Number",
  },
];

function createData(
  Properties_Id,
  Properties_AddressLine_1,
  Properties_AddressLine_2,
  Properties_AddressLine_Borough,
  Properties_AddressLine_Postcode,
  Properties_PropertyType,
  lease
) {
  return {
    Properties_Id,
    Properties_AddressLine_1,
    Properties_AddressLine_2,
    Properties_AddressLine_Borough,
    Properties_AddressLine_Postcode,
    Properties_PropertyType,
    lease,
  };
}

const transformData = (data) => {
  return data.map((item) => {
    return createData(
      item.tenant.Tenants_Id,
      item.tenant.Tenants_Forename,
      item.tenant.Tenants_Surname,
      item.tenant.Tenants_Email,
      item.property.Properties_AddressLine_1,
      item.tenant.Tenants_PhoneNumber,
      item.lease.lease_DocumentLink
    );
  });
};
export default function Tenants() {
  const [rows, setRows] = useState([]);
  const { state } = useUser();
  useEffect(async () => {
    const tenantData = await getTenantPost({
      LandlordId: state.Id,
    });
    console.log(tenantData);

    tenantData.tenants.forEach((item) => {
      delete item.Tenants_LandlordId;
      delete item.Tenants_PropertyId;
      delete item.Tenant_Title;
      delete item.Tenants_PasswordHash;
    });
    const cleanedRows = transformData(tenantData.tenants);
    setRows(cleanedRows);
  }, []);
  console.log(rows);
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
