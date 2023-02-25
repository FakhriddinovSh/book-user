import { createStore } from 'redux';
import { RootReducers } from './rootReducer';
import { tokenReducer } from './token/tokenReducer';

export const store = createStore(RootReducers);
