import { createStore, combineReducers } from 'redux';
// import User  from './reducers/User';
// import { Questions, userFormData } from './reducers/Questions';


const rootReducer = combineReducers({
	// User,
	// Questions,
	// userFormData,
	// Crowdsourced,
	// Country,
})

export const store = createStore(rootReducer);
