import { ACTIONTYPE } from "../action/actiontype";

const defaultvalues = {
  registerUser: [],
};

const Registerreduce = (state = defaultvalues, action) => {
   
  switch (action.type) {
    case ACTIONTYPE.REGISTER:
      return {
        ...state,
        registerUser:action.payload,
      };
    default:
      return state;
  }
};

export default Registerreduce;
