import {combineReducers} from "redux";
import Reducer from "./reduce";
console.log(Reducer);
const rootreducer = combineReducers( {Reducer},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    export default rootreducer;
