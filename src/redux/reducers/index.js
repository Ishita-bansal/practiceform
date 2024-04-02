import {combineReducers} from "redux";
import Reducer from "./reduce";
import Registerreduce from "./registerreduce";

const rootreducer = combineReducers( {Reducer , Registerreduce});

export default rootreducer;
