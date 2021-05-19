import {EDIT_USER} from "../actions/usersAction";

const initialState = [
	{id: 1, name: "Renat Grishin", login:"gr@mail.ru", password:"*Qwerty1" },
	{id: 2, name: "Vasily Ivanov", login:"iv@gmail.com", password:"123"  }
]

export default function users(state=initialState, action){
	let copyState;
	switch (action.type) {
		case EDIT_USER:
			copyState = {...state};
			copyState.name = "qqq";
			return copyState;
		default: return state;
	}
}