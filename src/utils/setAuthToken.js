const axios = require('axios');

export default function setAuthToken(token) {
	token ? axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
	: axios.defaults.headers.common['Authorization'] = "";
}
