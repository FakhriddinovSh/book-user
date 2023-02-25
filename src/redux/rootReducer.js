import { combineReducers } from 'redux';
import { LanguageReducer } from './Language/languageReducer';
import { ThemeReducer } from './Mode/modeReducer';
import { tokenReducer } from './token/tokenReducer';

export const RootReducers = combineReducers({
	token: tokenReducer,
	mode: ThemeReducer,
	language: LanguageReducer,
});
