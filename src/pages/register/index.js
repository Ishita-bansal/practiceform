import React from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useFormik } from "formik";
import * as yup from "yup";
import {useNavigate} from 'react-router-dom';
import ErrorHandle from "../../components/errorHandle/index";
import {toast} from "react-toastify";
import {TOAST_MESSAGE} from "../../toastify";
import {useDispatch, useSelector} from "react-redux";
import { register } from "../../redux/action";

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const defaultvalues = {
  username: "",
  email: "",
  password: "",
  confirmpass: "",
  checked: false,
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .max(20, "name must be less than 20 characters")
    .required("Required*"),
  email: yup
    .string()
    .matches(emailRegExp, "Email is not valid")
    .required("Required*"),
  password: yup
    .string()
    .min(4, "password must be 4 character")
    .required("Required*"),
  confirmpass: yup
    .string()
    .oneOf([yup.ref("password")], "Password must match")
    .required("Required*"),
  checked: yup
    .boolean()
    .oneOf([true], "You must agree to the terms and conditions")
    .required("Required*"),
});

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

const storeddata = useSelector((state)=>state?.Registerreduce)
console.log("data stored",storeddata);

  const onSubmit = (values) => {
  //  console.log("values = ", values);
   
     
  //     if (!Array.isArray(storeddata.registerUser)) {
  //       storeddata.registerUser = [];
  //       storeddata.registerUser.push(values); 
  //   }
  //   else{
  //     storeddata.registerUser = [{...storeddata , values}]
  //     dispatch(register(storeddata));
  //     }


    const registerUser = Array.isArray(storeddata.registerUser) ?
     [storeddata.registerUser.push(values)] : [];
    console.log("register user",storeddata.registerUser); 
       dispatch(register(storeddata.registerUser));
    navigate('/login');
  };
  
    // else
    //      storeddata.registerUser.push(values);
         
    //         //  dispatch(register(values))
    //  }
    //  else{

    //   storeddata.registerUser = [...storeddata ,values]
    //  }
    // console.log(values);
    // let storeddata = JSON.parse(localStorage.getItem("userData"))?? [];
    // console.log("data=",storeddata);

    // if (!Array.isArray(storeddata)) {
    //   storeddata = [];
    // }

    // let emailarray = storeddata?.map((obj) => {
    //   return obj.email;
    // });

    // console.log("email array",emailarray);

    // if(emailarray?.includes(values.email)) {
    //    return  toast.error(TOAST_MESSAGE. Emailcheck)
    // }

    //  else {
    //   let arr = [];
    //   if (storeddata === null) {
    //     arr.push(values);
    //   } else {
    //     arr = [...storeddata, values];
    //   }
    // console.log("arr",arr);
    // dispatch(register(arr));
    //   navigate('/login');
    //   toast.success(TOAST_MESSAGE.Register);
    // }

      // dispatch(register(arr));
  // };
  const formik = useFormik({
    initialValues: defaultvalues,
    onSubmit: onSubmit,
    validationSchema: validationSchema,
    enableReinitialize: true,
  });

  const {
    handleSubmit,
    values,
    setFieldValue,
    setTouched,
    touched,
    errors,
    handleBlur,
  } = formik;

  return (
    <>
      <div class="row" className="maincontainer">
        <div
          class="col-lg-6 col-md-12 col-sm-12"
          style={{
            maxWidth: "650px",
            maxHeight: "650px",
            borderRadius: "30px",
          }}
        >
          <img src="./images/formbg.jpg" alt="img" />
        </div>
        <div
          class="col-lg-6 col-md-12 col-sm-12 formcontainer"
          style={{ maxWidth: "650px", maxHeight: "650px" }}
        >
          <form onSubmit={handleSubmit} style={{ padding: "15px" }}>
            <TextField
              label="Name"
              type="text"
              variant="outlined"
              fullWidth
              margin="normal"
              value={values.username}
              onChange={(e) => {
                setFieldValue("username", e.target.value);
              }}
              onBlur={() => {
                setTouched({ ...touched, username: true });
              }}
            />
            <ErrorHandle touched={touched} errors={errors} fieldName="username"/>
            <TextField
              label="Email"
              type="email"
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
              type="password"
              variant="outlined"
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
           <ErrorHandle touched={touched} errors={errors}  fieldName="password"/>
            <TextField
              label="Confirm password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
            
              value={values.confirmpass}
              onChange={(e) => {
                setFieldValue("confirmpass", e.target.value);
              }}
              onBlur={() => {
                setFieldValue({ ...touched, confirmpass: true });
              }}
            />
          <ErrorHandle touched={touched} errors={errors}   fieldName="confirmpass" /> 
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    name="checked"
                    checked={values.checked}
                    onBlur={handleBlur}
                    onChange={() => {
                      setFieldValue("checked", !values.checked);
                    }}
                  />
                }
                label="I agree to the terms and conditions"
              />
            </FormGroup>
            <ErrorHandle touched={touched} errors={errors} fieldName="checked"/>
            <Button variant="contained" color="primary" type="submit">
              Register
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
