const initialState = {
  user: null,
  token: localStorage.getItem('authToken') || '',
  isAuthenticated: false,
  isAuthInProgress: true
}

export default function User(state = initialState, action) {
	switch (action.type) {
		case "REGISTER":
		return {
			// ...state,
			// user: action.user,
			// isAuthenticated: true,
   //    isAuthInProgress: false
		};
		case 'LOGIN':
		return {
			// ...state,
			// user: action.user,
			// isAuthenticated: true,
   //    isAuthInProgress: false
		};
		case 'LOGOUT':
		return {
			// ...state,
			// user: null,
			// isAuthInProgress: true,
   //    token: '',
   //    isAuthenticated: false
		}
			default: {
				return state
			}
	}
}
