import { ACTIONTYPE } from "./actiontype";
export const login = (payload) => {
  return {
    type: ACTIONTYPE.LOGIN,
    payload: payload,
  };
};

export const logout = () => {
  return {
    type: ACTIONTYPE.LOGOUT,
  };
};

export const update = (payload) => {
   return {
     type: ACTIONTYPE.UPDATE,
     payload: payload,
   };
 };
 
export const register = (payload) => {
  return {
    type: ACTIONTYPE.REGISTER,
    payload: payload,
  };
};

