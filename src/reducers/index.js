import {combineReducers} from "redux";
import user from './user';
import board from './board';
import axios from "axios";



//객체로 여러가지 state가 있음
export default combineReducers({
	user,
	board,
});


