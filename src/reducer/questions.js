export function Questions(state = [], action) {
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

// export function userFormData(state = [], action) {
// 	switch (action.type) {
// 		case "ADD_COUNTRY" :
// 		return {
// 			// ...state,
// 			// countaryAndTrip: action.data,
// 		};
// 		default: {
// 			return state
// 		}
// 	}
// }