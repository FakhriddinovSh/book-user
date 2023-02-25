import { ADD_THEME } from './modeType';

const initialStateTheme = {
	theme: localStorage.getItem('mode') || 'light',
};

export const ThemeReducer = (state = initialStateTheme, action) => {
	switch (action.type) {
		case ADD_THEME:
			return {
				...state,
				theme: action.payload,
			};
		default:
			return state;
	}
};
