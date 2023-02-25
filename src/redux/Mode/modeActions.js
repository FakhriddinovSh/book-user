import { ADD_THEME } from '../../redux/Mode/modeType';

export const addTheme = (theme) => {
	return {
		type: ADD_THEME,
		payload: theme,
	};
};
