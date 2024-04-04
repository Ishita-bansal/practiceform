import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login, Register, Dashboard, Page404 ,Profile, Tabledashboard} from "../pages";
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
          //  element={<Register />}
          element={<PublicRouter element={<Register />} />}
        />
        <Route path="/login"
        //  element={<Login />}
         element={<PublicRouter element={<Login />} />} 
        />
        <Route
          path="/dashboard" 
          // element={<Dashboard />}
          element={<PrivateRouter element={<Dashboard />} />}
        />
        <Route path="/profile"  
        // element={<Profile/>}
        element={<PrivateRouter  element={<Profile/>}/> }
        />
        <Route path="/*" element={<Page404 />} />

        <Route path="/tabledashboard" 
        // element = {<Tabledashboard/>}
        element = {<PrivateRouter element={<Tabledashboard/>} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
