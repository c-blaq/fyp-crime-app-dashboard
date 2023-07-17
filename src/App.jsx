import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./container/login";
import NotFound from "./container/404";
import Dashboard from "./container/dashboard";
import Reports from "./container/reports ";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/overview" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
