import {combineReducers} from "redux";
import Reducer from "./reduce";
import Registerreduce from "./registerreduce";
console.log(Reducer);
const rootreducer = combineReducers( {Reducer , Registerreduce});

export default rootreducer;
