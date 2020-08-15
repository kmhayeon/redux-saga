import React from "react";
import { Route, Switch} from 'react-router-dom';
import List from "../container/board/List";
import View from "../container/board/Veiw";

const Board = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/board/:bo_table?/:pager" component={List}/>
				<Route path="/board/view/:bo_table?/:wr_id" component={View}/>
			</Switch>
		</div>
	)
}

export default Board;