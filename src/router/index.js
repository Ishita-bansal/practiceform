import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login, Register, Dashboard, Page404 } from "../pages";
import { useSelector } from "react-redux";

function Router() {
  const data = useSelector((state) => state?.Reducer);

  const PublicRouter = ({ element }) => {
    return !data?.isLoggedIn ? element : Navigate("/dashboard");
  };

  const PrivateRouter = ({ element }) => {
    return data?.isLoggedIn ? element : Navigate("/login");
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/register"
          element={<PublicRouter element={<Register />} />}
        />
        <Route path="/login" element={<PublicRouter element={<Login />} />} />
        <Route
          path="/dashboard"
          element={<PrivateRouter element={<Dashboard />} />}
        />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
