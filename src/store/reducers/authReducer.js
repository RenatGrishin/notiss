import {LOGIN, LOGOUT} from "../actions/authAction";

const initialState = {
	isAuth: false,
	userID: 0
}

export default function auth (state=initialState, action) {
	let copyState;

	switch (action.type) {
		case LOGIN:
			copyState = {...state};
			copyState.isAuth = true;
			return copyState;
		case LOGOUT:
			copyState = {...state};
			copyState.isAuth = false;
			copyState.userID = 0;
			return copyState;
		default: return state;
	}
}