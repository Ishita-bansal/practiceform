import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login, Register,Dashboard ,Page404} from "../pages";
function Router(){

    const PublicRouter = ({element})=>{
        const userData = JSON.parse(localStorage.getItem("loggedUser"));
        return !userData?.loggedIn ? element : Navigate('/dashboard')
    }

    const PrivateRouter = ({element})=>{
      const userData = JSON.parse(localStorage.getItem("loggedUser"));
       return userData?.loggedIn ? element : Navigate('/login')
    }
    return(
        <BrowserRouter>
           <Routes>
              <Route path="/register" element={ <PublicRouter element={<Register/>}/> } />
              <Route path="/login" element={ <PublicRouter element={<Login/>} /> } />
              <Route path="/dashboard" element={ <PrivateRouter element={<Dashboard/>}/>} />
              <Route path="/*" element={<Page404/>}/>
           </Routes>
        </BrowserRouter>
    )
}

export default Router;