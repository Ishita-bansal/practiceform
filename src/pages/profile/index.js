import React from 'react';
import "./profile.css";
import {useSelector,useDispatch} from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import ErrorHandle from '../../components/errorHandle';
import { update } from '../../redux/action';
import {useState} from "react";
const defaultvalues = {
   name:'',
   email:'',
   password:''
}

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const validationSchema = yup.object().shape({
    name: yup
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
});
function Profile(){
   const [Editing,setEditing] = useState(false);
   const userProfile = useSelector((state)=>state?.Reducer) ;
   // console.log("user profile", userProfile);
   const dispatch = useDispatch();
    
   const onSubmit = (values) =>{
      console.log("values",values);
      dispatch(update(values));
      setEditing(false);
   }
   const formik = useFormik({
      initialValues: Editing ? defaultvalues : userProfile,
      onSubmit:onSubmit,
      validationSchema:validationSchema,
      enableReinitialize: true 
   })

   const handleUpdate = () =>{
      setEditing(true);
   }
    const {handleSubmit,setFieldValue,values,touched,errors,setTouched} = formik;
    return(
        <div>
         
          <form onSubmit={handleSubmit} className='forms'>
                <div className='formitems'>
                   <label>Name:</label>
                   <input name="name" value={values.name} onChange={(e)=>setFieldValue("name",e.target.value)} onBlur={()=>{setTouched({...touched , name: true })}}/>
                </div>
                
                <ErrorHandle touched={touched} errors={errors} fieldName="name"/>
                
                 <div className='formitems'>
                   <label>Email:</label>
                   <input name="email" value={values.email} onChange={(e)=>setFieldValue("email",e.target.value)} onBlur={()=>{setTouched({...touched,email:true})}}/>
                </div>
              
                <ErrorHandle touched={touched} errors={errors} fieldName="email" />
            
                <div className='formitems'>
                   <label>Password:</label>
                   <input name="password" value={values.password} onChange={(e)=>setFieldValue("password",e.target.value)} onBlur={()=>setTouched({...touched,password:true})}/>
                </div>
             
                <ErrorHandle touched={touched} errors={errors}  fieldName="password"/>
              
           </form>
       <div className='btns'>
           <div className='profilebtn'>
              <button type="button" onClick={handleUpdate}>Update</button>
            </div>
           <div className='profilebtn'>
              <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    </div>
       
    )
}

export default Profile;