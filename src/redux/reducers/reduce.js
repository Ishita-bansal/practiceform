import { ACTIONTYPE } from "../action/actiontype"

const initialvalues = {
    name:"",
    email:"",
    password:"",
    isLoggedIn:false
}

const Reducer = (state=initialvalues,action)=>{
    console.log(action);

    // eslint-disable-next-line default-case
    switch(action.type){
        case ACTIONTYPE.LOGIN:return {
           ...state,
           name:action.name,
           email:action.email,
           password:action.password,
           isLoggedIn:true
        };
        case ACTIONTYPE.LOGOUT:return {
             ...state,
             name:"",
             email:"",
             password:"",
             isLoggedIn:false
        };
        default : return state ;
    }

}

export default Reducer;