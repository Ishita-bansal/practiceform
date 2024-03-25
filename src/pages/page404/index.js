import React from 'react';
import {Button} from '@mui/material';
import "./style.css";
import {useNavigate} from "react-router-dom";

function Page404(){
    const navigate = useNavigate();
    return(
        <>
        <div className="notavailable">
            <img src="./images/oops.jpg" alt="img" />
            <h1>404 PAGE NOT FOUND</h1>
            <Button variant="contained" onClick={()=>{navigate('/Register')}}>Go To Register Page</Button>
        </div>
        </>
    )
}

export default Page404;