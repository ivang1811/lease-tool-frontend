import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/home";
import SignIn from "./pages/login";
import SignUp from "./pages/register";
import Faq from "./pages/faq";
import DashboardPage from "./pages/dashboard";

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
      </Routes>
    </Router>
  );
}
export default App;
