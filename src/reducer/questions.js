export function questions(state = [], action) {
	switch (action.type) {
		case "ADD_QUESTIONS":
		return {
			...state,
			data: action.data,
		};
		case "ADD_USER_DATA":
			state.push(action.data)
		return {
			...state,
		};
		default: {
			return state
		}
	}
}