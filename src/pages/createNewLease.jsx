import React, { useState, useEffect } from "react";
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
import { addLeaseAgreement, upload } from "../services/lease";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { getPropertyPost } from "../services/property";
import Select from "@mui/material/Select";
import { useUser } from "../hooks/useUser";
import DashboardPage from "../components/utils/DashboardPage";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
const theme = createTheme();

export default function CreateNewLease() {
  const [Property, setProperty] = useState("");
  const [leaseName, setLeaseName] = useState("");
  const [leaseType, setLeaseType] = useState("");
  const [valueDateOne, setValueDateOne] = useState("");
  const [valueDateTwo, setValueDateTwo] = useState("");
  const [files, setFiles] = useState([]);
  const [propertyOptions, setPropertyOptions] = useState([]);

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

  const onLoad = async ({ file, name }) => {
    console.log(file);
    const block = `${state.Id}/${Property}/${leaseName}`;
    console.log({
      propertyID: state.Id,
      documentName: leaseName,
      fileUrl: file,
    });
    const signedUrl = await upload({
      file: file,
    });
    console.log(signedUrl);

    const leaseAgreement = await addLeaseAgreement({
      propertyID: Property,
      documentName: leaseName,
      leaseType: leaseType,
      documentLink: signedUrl,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    const leaseAgreement = await addLeaseAgreement({
      propertyID: Property,
      documentName: leaseName,
      leaseType: leaseType,
      documentLink:
        "https://lease-tool.s3.amazonaws.com/dxf/leaseAgreement.docx?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVD55LNST6IHBCI4H%2F20220104%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20220104T102211Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=501ba9e210856d0784da296af4fcb524c45c99bc1ee5caa97c68b06544aee2a5",
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
            label="Property"
            onChange={(event) => setProperty(event.target.value)}
          >
            {propertyOptions.map((item) => (
              <MenuItem key={item.Properties_Id} value={item.Properties_Id}>
                {item.Properties_AddressLine_1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* <DropzoneArea onChange={(files) => setFiles(files)} /> */}
        <TextField
          margin="normal"
          required
          fullWidth
          id="LeaseName"
          label="Lease Name"
          name="LeaseName"
          autoComplete="LeaseName"
          onChange={(event) => setLeaseName(event.target.value)}
          autoFocus
        />
        <FormControl fullWidth style={{ marginBottom: "15px" }}>
          <LocalizationProvider
            style={{ marginLeft: "5px" }}
            dateAdapter={AdapterDateFns}
          >
            <DatePicker
              style={{ marginLeft: "5px" }}
              label="Start Date"
              value={valueDateOne}
              onChange={(newValue) => {
                setValueDateOne(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </FormControl>
        <FormControl fullWidth>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="End Date"
              value={valueDateTwo}
              onChange={(newValue) => {
                setValueDateTwo(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </FormControl>
        <TextField
          margin="normal"
          required
          fullWidth
          id="LeaseName"
          label="Monthly Rent"
          name="LeaseName"
          autoComplete="LeaseName"
          // onChange={(event) => setLeaseName(event.target.value)}
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="LeaseName"
          label="Deposit Amount"
          name="LeaseName"
          autoComplete="LeaseName"
          // onChange={(event) => setLeaseName(event.target.value)}
          autoFocus
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Lease Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={leaseType}
            label="Property"
            onChange={(event) => setLeaseType(event.target.value)}
          >
            <MenuItem key="multi" value="multi">
              Multi-Tenant
            </MenuItem>
            <MenuItem key="single" value="single">
              Single-Tenant
            </MenuItem>
          </Select>
        </FormControl>
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
