import React from "react";
import Loadable from 'react-loadable';


const Loading = () => {
	return (
		<div>
			loading...
		</div>
	)
}
export const Main = Loadable({
	loader: () => import('./Main'),
	loading: Loading,
});

export const Login = Loadable({
	loader:()=> import('./Login'),
	loading: Loading,
})

export const Board = Loadable({
	loader:()=> import('./Board'),
	loading: Loading,
})




