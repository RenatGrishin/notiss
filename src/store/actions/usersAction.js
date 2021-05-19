export const EDIT_USER = "EDIT_USER";

export function editUser (name){
	return{
		type: EDIT_USER,
		name: name
	}
}