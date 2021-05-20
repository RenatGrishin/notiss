import {EDIT_USER} from "../actions/usersAction";

const initialState = [
	{id: 1, name: "Ренат Гришин", login:"gr@mail.ru", password:"*Qwerty1" },
	{id: 2, name: "Василий Иванов", login:"test@mail.ru", password:"!1Qwerty"  },
	{id: 3, name: "Пользователь Тестович", login:"A@", password:"!1HDFddf"  }
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