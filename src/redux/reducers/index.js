import {combineReducers} from "redux";
import Reducer from "./reduce";
import Registerreduce from "./registerreduce";
console.log(Reducer);
const rootreducer = combineReducers( {Reducer , Registerreduce}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    export default rootreducer;
