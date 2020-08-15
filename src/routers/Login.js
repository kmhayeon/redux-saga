import React from "react";
import {useInput} from '../utils/lib'
import {LOGIN_REQEUST} from "../reducers/user";
import {useDispatch, useSelector} from "react-redux";
import Main from  '../routers/Main'

const Login = () => {
	const {isLogedIn} = useSelector(state => state.user)
	return (
		<div>
			{
				isLogedIn
					?
					<UserInfo/>
					:
					<LoginForm/>
			}
		</div>
	)
};

const UserInfo = () => {
	const {userInfo} = useSelector(state => state.user)
	return (
		<div>
			아이디는 {userInfo.userid}
			레벨은 {userInfo.userlevel}
			닉네임은 {userInfo.nickname}
		</div>
	)
};

const LoginForm = () => {
	const [id, setId] = useInput('');
	const [pw, setPw] = useInput('');
	const dispatch = useDispatch();
	const loginSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: LOGIN_REQEUST,
			data: {
				id,
				pw
			}
		})
	};
	//console.log(`${Id}/${Pw}`)
	return (
		<form onSubmit={loginSubmit}>
			<div>
				아이디<input type="text" name="id" id="id" placeholder="아이디를 입력하여 주세요."
				          onChange={setId}/>
			</div>
			<div>
				비밀번호<input type="password" name="password" id="password"
				           placeholder="비밀번호를 입력하여 주세요." autoComplete="off"
				           onChange={setPw}/>
			</div>
			<div>
				<button>로그인</button>
			</div>
		</form>
	)
};


export default Login;
