import React from "react";
import {all, fork, takeLatest, call, put} from 'redux-saga/effects';
import axios from "axios";
import {
	LIST_REQEUST,
	LIST_SUCCESS,
	LIST_FAILURE,
	VIEW_REQEUST,
	VIEW_SUCCESS,
	VIEW_FAILURE
} from '../reducers/board'

const token = {
	usertoken: "27feb432-7a9d-4f23-ad15-5900d4dffac0",
	userhost: "127.0.0.1:3000",
	userid: "dvisign",
}

function* watchList() {
	//한번만 실행
	yield takeLatest(LIST_REQEUST, listLoad)
};

function* listLoad(action) {
	try {
		const result = yield call(listApi, action.data);
		yield put({
			type: LIST_SUCCESS,
			data: result.data
		})
	} catch (e) {
		console.log(e)
		yield put({
			type: LIST_FAILURE,
			result: e
		})
	}
}

function listApi(bo_data) {
	//console.log(bo_data)
	return (
		axios.post(`/board/list/${bo_data.bo_table}/${bo_data.pager}`,{
			tokenAuth: token
		})
	)
}


//액션이 멈춰있음
export default function* board() {
	yield all([
		fork(watchList)
	])
}
