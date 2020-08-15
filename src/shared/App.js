import React from 'react';
import '../App.css';
import { Route, Switch} from 'react-router-dom';
import {Main, Login, Board} from "../routers";

const App = () => {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Main}/>
				<Route path="/login" component={Login}/>
				<Route path="/board" component={Board}/>
			</Switch>
		</div>
	);
}

export default App;
