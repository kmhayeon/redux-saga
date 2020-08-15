import user from './user'
import board from "./board";
import {all, call,} from 'redux-saga/effects';
import axios from "axios";

axios.defaults.baseURL = 'http://dvnode.gabia.io/api'
axios.default.withCredentials = true;

export default function* rootSaga() {
	yield all([
		call(user),
		call(board),
		//위의 안에 미들웨어 call은 한개의 변수만 가져올수있음
	])
}
