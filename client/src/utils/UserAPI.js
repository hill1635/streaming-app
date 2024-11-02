import axios from 'axios';

export default {
	get: function (id) {
		return axios.get('/api/users/' + id);
	},
	create: function (userData) {
		return axios.post('/api/users/', userData);
	},
	update: function (id, userData) {
		return axios.put('/api/users/' + id, userData);
	},
	delete: function (id) {
		return axios.delete('/api/users/' + id);
	},
	login: function (userData) {
		return axios.post('/api/users/login', userData);
	},
	logout: function () {
		return axios.post('/api/users/logout');
	}
};
