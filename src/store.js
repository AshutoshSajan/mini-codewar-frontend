import { createStore, combineReducers } from 'redux';
import user  from './reducer/user';
import { questions } from './reducer/questions';


const rootReducer = combineReducers({
	user,
	questions,
})

export const store = createStore(rootReducer);
