import React, {useEffect} from 'react';
import {LIST_REQEUST} from "../../reducers/board";
import {useDispatch, useSelector} from "react-redux";
import ListItems from "../../components/board/ListItems";

const List = (props) => {
	//console.log(props)
	const {bo_table, pager} = props.match.params
	const {bo_list_connect} = useSelector(state => state.board)
	const {userInfo} = useSelector(state => state.user)
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({
				type: LIST_REQEUST,
				data: {
					bo_table,
					pager
				}
			}
		)
	},[userInfo])
	return (
		<div>
			{
				bo_list_connect
					?
					<div>
						<ListItems/>
					</div>
					:
					<div>접근이 불가능합니다.</div>
			}
		</div>
	)
}

export default List;