import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/home";
import SignIn from "./pages/login";
import SignUp from "./pages/register";
import Faq from "./pages/faq";
import DashboardPage from "./pages/dashboard";
import CreateNewLease from "./pages/createNewLease";
import Tenants from "./pages/Tenants";
import Properties from "./pages/Properties";
import ChangeRequest from "./pages/changeRequests";
import AddNewTenant from "./pages/AddNewTenant";
import ChatPage from "./pages/ChatPage";
import EditTenant from "./pages/editTenant";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import AddNewProperty from "./pages/AddnewProperty";
import EditProperty from "./pages/editProperty";
import leaseAgreementView from "./pages/lease-agreement";
import TenantDashboard from "./pages/tenantDashboard";
import Leases from "./pages/Leases";
import EditLease from "./pages/EditLease";
const theme = createTheme({
  palette: {
    primary: {
      light: "#67ead1",
      main: "#26b7a0",
      dark: "#008672",
      contrastText: "#fff",
    },
    secondary: {
      light: "#686a78",
      main: "#3d3f2c",
      dark: "#171924",
      contrastText: "#000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/dashboard" element={<DashboardPage />}></Route>
            <Route
              path="/dashboard/add-property"
              element={<AddNewProperty />}
            ></Route>
            <Route
              path="/dashboard/create-lease"
              element={<CreateNewLease />}
            ></Route>
            <Route
              path="/dashboard/change-requests"
              element={<ChangeRequest />}
            ></Route>
            <Route path="dashboard/tenants" element={<Tenants />}></Route>
            <Route path="dashboard/properties" element={<Properties />}></Route>
            <Route
              path="dashboard/edit-tenant"
              element={<EditTenant />}
            ></Route>
            <Route
              path="/dashboard/add-tenant"
              element={<AddNewTenant />}
            ></Route>
            <Route path="/dashboard/chat" element={<ChatPage />}></Route>
            <Route
              path="/dashboad/template-lease"
              element={<leaseAgreementView />}
            ></Route>
            <Route
              path="/tenant-dashboard"
              element={<TenantDashboard />}
            ></Route>
            <Route
              path="/dashboard/edit-property"
              element={<EditProperty />}
            ></Route>
            <Route path="/dashboard/leases" element={<Leases />}></Route>
            <Route path="/dashboard/edit-lease" element={<EditLease />}></Route>
          </Routes>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}
export default App;
