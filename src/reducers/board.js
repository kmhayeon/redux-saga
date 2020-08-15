import React from "react";

const initailState = {
	// 게시판 존재여부
	bo_existence: false,
	// 게시판 옵션
	bo_config: null,
	// 리스트 접근가능여부
	bo_list_connect: false,
	// 게시글 리스트
	bo_list: [],
	// 게시글 페이저
	pagers: null,
	// 게시글 접근가능여부
	bo_view_connect: false,
	// 게시글
	bo_view: [],
	// 이전글
	prev_link: {},
	// 다음글
	next_link: {}
};

export const LIST_REQEUST = "LIST_REQEUST";
export const LIST_SUCCESS = "LIST_SUCCESS";
export const LIST_FAILURE = "LIST_FAILURE";

export const VIEW_REQEUST = "VIEW_REQEUST";
export const VIEW_SUCCESS = "VIEW_SUCCESS";
export const VIEW_FAILURE = "VIEW_FAILURE";


const Reducer = (state = initailState, action) => {
	switch (action.type) {
		case LIST_REQEUST: {
			return {
				...state
			}
		}
	}
	switch (action.type) {
		case LIST_SUCCESS: {
			return {
				...state,
				bo_existence : true,
				bo_config : action.data.bo_config,
				bo_list_connect : action.data.bo_list_connect,
				bo_list : action.data.bo_list,
				pagers : action.data.pagers
			}
		}
	}
	switch (action.type) {
		case LIST_FAILURE: {
			return {
				...state
			}
		}
	}
	switch (action.type) {
		case VIEW_REQEUST: {
			return {
				...state
			}
		}
	}
	switch (action.type) {
		case VIEW_SUCCESS: {
			return {
				...state
			}
		}
	}
	switch (action.type) {
		case VIEW_FAILURE: {
			return {
				...state
			}
		}
		default:
			return {...state}
	}
}
export default Reducer;

