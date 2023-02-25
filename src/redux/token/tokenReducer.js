import { ADD_TOKEN, DELETE_TOKEN } from './tokenType';

const initialStateToken = {
	token: localStorage.getItem('token') || '',
};

export const tokenReducer = (state = initialStateToken, action) => {
	switch (action.type) {
		case ADD_TOKEN:
			return {
				...state,
				token: action.payload,
			};
		case DELETE_TOKEN:
			return {
				...state,
				token: '',
			};
		default:
			return state;
	}
};
