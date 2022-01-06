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
// import { Link } from "react-router-dom";
import Select from "@mui/material/Select";
import { useUser } from "../hooks/useUser";
import DashboardPage from "../components/utils/DashboardPage";
import { DropzoneArea } from "material-ui-dropzone";
import { getLeaseByid, updateLease } from "../services/lease";
import { useSearchParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
const theme = createTheme();

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "#26b789",
  "&:hover": {
    backgroundColor: "#4acfa5",
  },
}));

export default function EditLease() {
  const [leaseName, setLeaseName] = useState("");
  const [leaseType, setLeaseType] = useState("");
  const [valueDateOne, setValueDateOne] = useState("");
  const [valueDateTwo, setValueDateTwo] = useState("");
  const [values, setValues] = useState({});
  const [files, setFiles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const { state } = useUser();
  useEffect(async () => {
    const leaseData = await getLeaseByid({
      Id: searchParams.get("id"),
    });
    console.log(leaseData);

    setValues({
      document_link: leaseData.leases[0].lease_DocumentLink,
      leaseType: leaseData.leases[0].lease_LeaseType,
      DocumentName: leaseData.leases[0].lease_DocumentName,
    });
  }, []);

  const onLoad = async ({ file, name }) => {
    console.log(file);
    const block = `${state.Id}/${leaseName}`;
    console.log({
      propertyID: state.Id,
      documentName: leaseName,
      fileUrl: file,
    });
    const signedUrl = await upload({
      file: file,
    });
    console.log(signedUrl);

    const leaseAgreement = await updateLease({
      Id: searchParams.get("id"),
      DocumentName: values.DocumentName,
      LeaseType: values.leaseType,
      DocumentLink: signedUrl,
    });
  };

  const handleSubmit = async (event) => {
    const leaseAgreement = await updateLease({
      Id: searchParams.get("id"),
      DocumentName: values.DocumentName,
      LeaseType: values.leaseType,
      DocumentLink:
        "https://lease-tool.s3.amazonaws.com/dxf/leaseAgreement.docx?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVD55LNST6IHBCI4H%2F20220104%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20220104T102211Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=501ba9e210856d0784da296af4fcb524c45c99bc1ee5caa97c68b06544aee2a5",
    });
  };

  return (
    <DashboardPage containerSize="sm">
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <HomeIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Edit Lease {values.DocumentName}
      </Typography>
      <a style={{ textDecoration: "none" }} href={values.document_link}>
        <ColorButton>Download lease</ColorButton>
      </a>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        {/* <DropzoneArea onChange={(files) => setFiles(files)} /> */}
        <TextField
          margin="normal"
          required
          fullWidth
          id="LeaseName"
          value={values.DocumentName}
          label="Lease Name"
          name="LeaseName"
          autoComplete="LeaseName"
          onChange={(event) =>
            setValues({
              document_link: values.lease_DocumentLink,
              leaseType: values.lease_LeaseType,
              DocumentName: event.target.value,
            })
          }
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="LeaseName"
          value={"20/12/2022"}
          label="Start Date"
          name="LeaseName"
          autoComplete="LeaseName"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="LeaseName"
          value={"20/12/2023"}
          label="End Date"
          name="LeaseName"
          autoComplete="LeaseName"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="LeaseName"
          value={"1600"}
          label="Monthly Rent"
          name="LeaseName"
          autoComplete="LeaseName"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="LeaseName"
          value={"3000"}
          label="Deposit"
          name="LeaseName"
          autoComplete="LeaseName"
          autoFocus
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Lease Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={values.leaseType}
            label="Property"
            onChange={(event) =>
              setValues({
                document_link: values.lease_DocumentLink,
                leaseType: event.target.value,
                DocumentName: values.DocumentName,
              })
            }
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
          Edit lease
        </Button>
      </Box>
    </DashboardPage>
  );
}
