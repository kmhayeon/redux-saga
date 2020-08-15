import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './client/Root';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import rootSaga from './sagas';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';


// 리덕스 개발자도구 적용
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const enhancer = process.env.NODE_ENV === 'production'
	? compose(applyMiddleware(...middlewares))
	: compose(
		applyMiddleware(...middlewares),
		typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
	);
const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);


ReactDOM.render(
	<Provider store={store}>
		<Root />
	</Provider>,
document.getElementById('root')
)
;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
