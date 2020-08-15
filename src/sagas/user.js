import {all, fork, takeLatest, call, put} from 'redux-saga/effects';
import {
	LOGIN_REQEUST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
} from '../reducers/user';
import axios from "axios";


const token = {
	usertoken: "27feb432-7a9d-4f23-ad15-5900d4dffac0",
	userhost: "127.0.0.1:3000",
	userid: "dvisign",
}
// all : 여러 함수 실행
// take : 해당 액션이 dispatch되면 제너레이터를 next
// takeLatest : 동작은 takeEvery와 같으나 마지막 동작에서만 다음 함수 실행
// takeEvery : while(true)의 역할 과 dispatch후 작동하는 코드를 분리시킬수 있는 이펙트, cb 제너레이터 함수
// put : dispatch와 같은역할
// delay(t) : t m/s후 실행
// fork : 함수를 실행해줌 비동기호출, 순서에 상관 없는 경우 ex) 응답에 상관 없이 함수 실행
// call : 함수를 실행해줌 동기호출, 순서를 지켜야하는 경우 ex) 응답을 다 받은 후에 함수 실행


//셋스테이트 되기전에 에이피아이 실행하고 결과값을 셋스테이트해줌

//어떤 액션이 실행되었는지 확인
function* watchLogin() {
	yield takeLatest(LOGIN_REQEUST, login)
};


function* login(loginData) {
	//console.log(loginData)
	try {
		const result = yield call(loginApi, loginData.data);
		yield put({
			type: LOGIN_SUCCESS,
			data: result.data
		})
	} catch (e) {
		console.log(e)
		yield put({
			type: LOGIN_FAILURE,
			result: e
		})
	}
}

function loginApi(loginData) {
	return (
		axios.post("/login", {
			userId: loginData.id,
			password: loginData.pw,
			tokenAuth: token
		})
	)
}

export default function* usersaga() {
	yield all([
		fork(watchLogin)
	])
}