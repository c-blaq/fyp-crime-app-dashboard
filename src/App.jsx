import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./container/login";
import NotFound from "./container/404";
import Dashboard from "./container/dashboard";
import Reports from "./container/reports ";
import Notifications from "./container/notifications";
import NewAdmin from "./container/newAdmin";
import Map from "./container/map";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/overview" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/notification" element={<Notifications />} />
        <Route path="/add-admin" element={<NewAdmin />} />
        <Route path="/map" element={<Map />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
