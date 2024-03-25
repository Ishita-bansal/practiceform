import React from 'react';
import './style.css';
import { TextField ,Button} from '@mui/material';
import {useFormik} from 'formik';
import *as yup from 'yup'; 
import ErrorHandle from '../../components/errorHandle/index';
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";
import {TOAST_MESSAGE} from "../../toastify"

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const defaultvalues = {
  email:'',
  password:''
}

const validationSchema = yup.object().shape({
  email: yup
  .string()
  .matches(emailRegExp, "Email is not valid")
  .required("Required*"),
password: yup
  .string()
  .min(4, "password must be 4 character")
  .required("Required*")
})
function Login(){
   
   const navigate = useNavigate();
    const onSubmit = ((values)=>{
      console.log(values);
     let allusers =  JSON.parse(localStorage.getItem("userData"));

   const userData = allusers?.find((users)=>{
         return users.email===values.email && users.password===values.password 
      })

      if(userData === undefined){
         toast.error(TOAST_MESSAGE.Logincheck);
      }
      else{
        toast.success(TOAST_MESSAGE.Login);
        localStorage.setItem("loggedUser",JSON.stringify({...userData,loggedIn:true})) 
        navigate('/dashboard');
      }
    })

    const formik = useFormik({
      initialValues:defaultvalues,
      validationSchema:validationSchema,
      onSubmit:onSubmit
    })  
 
    const {values , handleSubmit ,touched, errors , setTouched,setFieldValue} = formik;
    console.log("touched data" ,touched)
    return(
        <>
        <div class="row maincontainer2">
          <div class="col-lg-6"   style={{
            maxWidth: "500px",
            maxHeight: "500px",
            borderRadius: "30px",
          }}>
             <img src="/images/formbg.jpg"  alt="image" />
          </div>
          <div class="col-lg-6 formcontainer"   style={{ maxWidth: "500px", maxHeight: "500px" ,padding:"30px"}}>
            <form onSubmit={handleSubmit}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
              value={values.email}
              onChange={(e) => {
                setFieldValue("email", e.target.value);
              }}
              onBlur={() => {
                setTouched({ ...touched, email: true });
              }}
                />
            <ErrorHandle touched={touched} errors={errors} fieldName="email" />
             <TextField 
               label="Password"
               variant='outlined'
               fullWidth
                margin="normal"
              value={values.password}
              onChange={(e) => {
                setFieldValue("password", e.target.value);
              }}
              onBlur={() => {
                setTouched({ ...touched, password: true });
              }}
             />
             <ErrorHandle touched={touched} errors={errors} fieldName="password" />
              <Button variant="contained" color="primary" type="submit">Login</Button>
            </form>
          </div>
        </div>
        </>
    )
}

export default Login;