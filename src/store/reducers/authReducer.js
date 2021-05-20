import {EDIT_ENTERED_LOGIN, EDIT_ENTERED_PASSWORD, LOGIN, LOGOUT} from "../actions/authAction";

const initialState = {
	isAuth: false,
	userID: 0,
	enteredLogin: "",
	enteredPassword: ""
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
		case EDIT_ENTERED_LOGIN:
			copyState = {...state};
			copyState.enteredLogin = action.login;
			return copyState;
		case EDIT_ENTERED_PASSWORD:
			copyState = {...state};
			copyState.enteredPassword = action.password;
			return copyState;
		default: return state;
	}
}