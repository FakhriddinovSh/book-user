import { ADD_LANGUAGE } from './languageType';

export const addLanguage = (lang) => {
	return {
		type: ADD_LANGUAGE,
		payload: lang,
	};
};
