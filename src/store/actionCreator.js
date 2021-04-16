import axios from "axios";
import * as actionType from "./action";

export const fetchAllData = () => {
	return async (dispatch, getState) => {
		try {
			let res = await axios.get(
				"https://bookmedia-ed59f-default-rtdb.firebaseio.com/.json"
			);
			const state = getState();
			let cloneState = { ...state };
			const newData = {
				...cloneState,
				data: res.data,
				isLoading: false,
			};
			// console.log(getState())
			dispatch({
				type: actionType.INITIAL_FETCH_SUCCES,
				payload: newData,
			});
		} catch (err) {
			let cloneState = { ...getState() };
			const newData = {
				...cloneState,
				data: {
					message: err.message,
				},
				isLoading: false,
			};
			dispatch({
				type: actionType.INITIAL_FETCH_FAIL,
				payload: newData,
			});
		}
	};
};
