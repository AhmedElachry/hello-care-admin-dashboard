import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./scss/style.scss";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "./features/auth/authSlice";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));
const Auth = React.lazy(() => import("./views/pages/auth/Auth"));

// Pages
const LoginAdmin = React.lazy(() =>
  import("./views/pages/login-admin/LoginAdmin")
);
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));
function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return (
    <Router>
      <Suspense fallback={loading}>
        <Routes>
          <Route
            exact
            path="/login"
            name="Login Page"
            element={isAuthenticated ? <Navigate to="/" replace /> : <Login />}
          />
          <Route
            exact
            path="/login-admin"
            name="Before Login Page"
            element={
              isAuthenticated ? <Navigate to="/" replace /> : <LoginAdmin />
            }
          />
          <Route
            exact
            path="/register"
            name="Register Page"
            element={<Register />}
          />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route path="/" element={<Navigate to="dashboard" replace />} />
          <Route
            path="*"
            name="Home"
            element={
              <Auth>
                <DefaultLayout />
              </Auth>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
