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
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/dashboard" element={<DashboardPage />}></Route>
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
      </Routes>
    </Router>
  );
}
export default App;
