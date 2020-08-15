import React from "react";
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import index from "../../reducers";

const ListItems = () => {
	const {bo_config, bo_list} = useSelector(state => state.board)
	console.log(bo_config)
	return (
		<div>
			{ bo_list.length <= 0
				?
				<div>작성된 글이 없습니다</div>
				:
				bo_list.map((lists, i) => {
					return(
						<div key={i}>
							<Link to={`/board/view/${bo_config.bo_table}/${lists.wr_id}`}>{lists.wr_subject}</Link>
						</div>
					)
				})
			}
		</div>
	)
}

export default ListItems;