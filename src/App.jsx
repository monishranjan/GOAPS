import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AccessDenied from "./pages/AccessDenied";
import ForgotPassword from "./pages/ForgotPassword";
import SecondaryLogin from "./pages/Admissions";
import CounsellingHome from "./conselling/home";
import ProtectedRoute from "./components/ProtectedRoute";
import AdmissionsHome from "./components/Admissions/AdmissionHome"; // New Page
import { AuthProvider } from "./context/AuthContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Main login */}
          <Route path="/" element={<Login />} />

          {/* Secondary login */}
          <Route path="/admissions" element={<SecondaryLogin />} />

          {/* Admissions Home (after successful login) */}
          <Route
            path="/admissions-home"
            element={
              <ProtectedRoute>
                <AdmissionsHome />
              </ProtectedRoute>
            }
          />

          {/* Forgot password */}
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Protected Home */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          {/* Protected CCMT Admission Page */}
          <Route
            path="/ccmt-admissions"
            element={
              <ProtectedRoute>
                <CounsellingHome />
              </ProtectedRoute>
            }
          />

          {/* Access Denied */}
          <Route path="/access-denied" element={<AccessDenied />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
