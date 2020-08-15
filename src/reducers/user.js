const initData = {
	isLogedIn: false,
	userInfo: null,
	loginfalseReasen: null,
};

//기본 스테이트, 결과값
//action은 전부 대문자로 작성
//로그인 요청
export const LOGIN_REQEUST = 'LOGIN_REQEUST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


const reducer = (state = initData, action) => {
		switch (action.type) {
			case LOGIN_REQEUST: {
				return {
					...state
				}
			}
			case LOGIN_SUCCESS: {
				//console.log(action)
				return {
					...state,
					isLogedIn: true,
					userInfo: action.data.user
				}
			}
			case
			LOGIN_FAILURE: {
				return {
					...state,
					loginfalseReasen: action.result
				}
			}
			default:
				return {...state}
		}
	}
;

export default reducer;