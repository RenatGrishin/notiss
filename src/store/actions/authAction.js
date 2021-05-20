export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const EDIT_ENTERED_LOGIN = "EDIT_ENTERED_LOGIN";
export const EDIT_ENTERED_PASSWORD = "EDIT_ENTERED_PASSWORD";

export function login(id) {
	return{
		type: LOGIN,
		id: id
	}
}
export function logout(){
	return{
		type: LOGOUT
	}
}
export function editEnteredLogin(login) {
	return{
		type: EDIT_ENTERED_LOGIN,
		login: login
	}
}
export function editEnteredPassword(password) {
	return{
		type: EDIT_ENTERED_PASSWORD,
		password: password
	}
}