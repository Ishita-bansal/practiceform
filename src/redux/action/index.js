import {ACTIONTYPE} from "./actiontype"
export const login = (payload) =>{
     return {
        type: ACTIONTYPE.LOGIN,
        payload:payload
     }
}

export const logout = () =>{
     return {
        type: ACTIONTYPE.LOGOUT
     }
}

export const register = (payload) =>{
   console.log("payload=",payload);
   return{
      type: ACTIONTYPE.REGISTER,
      payload:payload
   }
}