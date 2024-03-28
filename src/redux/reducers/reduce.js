import { ACTIONTYPE } from "../action/actiontype";

const initialvalues = {
  name: "",
  email: "",
  password: "",
  isLoggedIn: false,
};

const Reducer = (state = initialvalues, action) => {
  console.log("actions",action);
  switch (action.type) {
    case ACTIONTYPE.LOGIN:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        isLoggedIn: true,
      };
    case ACTIONTYPE.LOGOUT:
      return {
        ...state,
        name: "",
        email: "",
        password: "",
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default Reducer;
