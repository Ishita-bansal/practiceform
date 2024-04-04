import React from "react";
import "./profile.css";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import ErrorHandle from "../../components/errorHandle";
import { update } from "../../redux/action";
import { register } from "../../redux/action";
// import { Toast } from "react-toastify/dist/components";
// import { TOAST_MESSAGE } from "../../constant";
import {useNavigate} from 'react-router-dom';

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

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
    .required("Required*")
});
function Profile() {
  const userProfile = useSelector((state) => state?.Reducer);
  // console.log("user profile", userProfile);
   
  const navigate = useNavigate();
  const storeddata = useSelector((state) => state?.Registerreduce);
  console.log("user registered===>", storeddata);
  const dispatch = useDispatch();
  const onSubmit = (values) => {
 
    const filterdusers = storeddata.registerUser?.filter((user) => {
      return user.email !== userProfile.email;
    });
  
    filterdusers?.push(values);
    dispatch(register(filterdusers));
    dispatch(update(values));

  //  Toast.success(TOAST_MESSAGE.PROFILE);
    navigate('/tabledashboard');
  }

  const formik = useFormik({
    initialValues: {
      username: userProfile.name,
      email: userProfile.email,
      password: userProfile.password,
    },
    onSubmit: onSubmit,
    validationSchema: validationSchema,
    enableReinitialize: true,
  });

  const { handleSubmit, setFieldValue, touched, values, errors, setTouched } =
    formik;
  //  console.log("values-->",values);
  return (
    <div>
      <form onSubmit={handleSubmit} className="forms">
        <div className="formitems">
          <label>Name:</label>
          <input
            name="username"
            value={values.username}
            onChange={(e) => setFieldValue("username", e.target.value)}
            onBlur={() => {
              setTouched({ ...touched, username: true });
            }}
          />
        </div>

        <ErrorHandle touched={touched} errors={errors} fieldName="username" />

        <div className="formitems">
          <label>Email:</label>
          <input
            name="email"
            value={values.email}
            onChange={(e) => setFieldValue("email", e.target.value)}
            onBlur={() => {
              setTouched({ ...touched, email: true });
            }}
          />
        </div>

        <ErrorHandle touched={touched} errors={errors} fieldName="email" />

        <div className="formitems">
          <label>Password:</label>
          <input
            name="password"
            value={values.password}
            onChange={(e) => setFieldValue("password", e.target.value)}
            onBlur={() => setTouched({ ...touched, password: true })}
          />
        </div>

        <ErrorHandle touched={touched} errors={errors} fieldName="password" />
        <div className="profilebtn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
