import * as actionType from "./action";

const initialState = {
	data: {},
	isLoading: true,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.INITIAL_FETCH_SUCCES:
			return action.payload;
		case actionType.INITIAL_FETCH_FAIL:
			return action.payload;
		default:
			return state;
	}
};

export default reducer;
