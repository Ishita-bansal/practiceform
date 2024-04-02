import { ACTIONTYPE } from "../action/actiontype";

const initialvalues = {
  name: "",
  email: "",
  password: "",
  isLoggedIn: false,
};

const Reducer = (state = initialvalues, action) => {
  switch (action.type) {
    case ACTIONTYPE.LOGIN:
      return {
        ...state,
        name: action.payload.username,
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
    case ACTIONTYPE.UPDATE:
      return {
        ...state,
        name: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default Reducer;
