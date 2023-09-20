import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./container/login";
import NotFound from "./container/404";
import Dashboard from "./container/dashboard";
import Reports from "./container/reports ";
import Notifications from "./container/notifications";
import NewAdmin from "./container/newAdmin";
import Map from "./container/map";
import { Protected } from "./context/AuthProvider";
import AdminSignup from "./container/newAdmin/adminSignup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/overview"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
        <Route
          path="/reports"
          element={
            <Protected>
              <Reports />
            </Protected>
          }
        />
        <Route
          path="/notification"
          element={
            <Protected>
              <Notifications />
            </Protected>
          }
        />
        <Route
          path="/add-admin"
          element={
            <Protected>
              <NewAdmin />
            </Protected>
          }
        />
        <Route
          path="/invitation/:invitationToken"
          element={
            <Protected>
              <AdminSignup />
            </Protected>
          }
        />
        <Route
          path="/reports/map"
          element={
            <Protected>
              <Map />
            </Protected>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
