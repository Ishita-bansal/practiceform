import {ACTIONTYPE} from "./actiontype"
export const login = (payload) =>{
   console.log(payload);
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