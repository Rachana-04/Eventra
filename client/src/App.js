import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateEvent from "./pages/CreateEvent";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Notifications from "./pages/Notifications";
import Wallet from "./pages/Wallet";
import Payment from "./pages/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Protected routes */}
        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<CreateEvent />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/payment" element={<Payment />} />
          


        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
