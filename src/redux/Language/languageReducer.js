import { ADD_LANGUAGE } from './languageType';

const initialStateLanguage = {
	language: localStorage.getItem('language') || 'en',
};

export const LanguageReducer = (state = initialStateLanguage, action) => {
	switch (action.type) {
		case ADD_LANGUAGE:
			return {
				...state,
				language: action.payload,
			};
		default:
			return state;
	}
};
