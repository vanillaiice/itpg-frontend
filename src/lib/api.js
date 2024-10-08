const API_URL = import.meta.env.VITE_API_URL || 'https://api.itpg.cc/demo';

const fetchMethods = { get: 'get', post: 'post' };

const credentialModes = { omit: 'omit', include: 'include' };

const fetchFunc = async (path, method, body, creds) => {
	let options = { method: method, credentials: creds, body: null };
	if (body != null) {
		options.body = JSON.stringify(body);
	}

	return new Promise((resolve, reject) => {
		fetch(`${API_URL}/${path}`, options)
			.then((response) => response.json())
			.then((result) => {
				if (result.code == 2000) {
					resolve(result);
				} else {
					reject(result.message);
				}
			})
			.catch((err) => {
				reject(err);
			});
	});
};

let api = {
	isLoggedIn: async () => {
		return new Promise((resolve, reject) => {
			fetch(`${API_URL}/ping`, {
				method: fetchMethods.get,
				credentials: 'include'
			})
				.then((response) => {
					if (response.status == 200) {
						resolve(true);
					} else {
						resolve(false);
					}
				})
				.catch((err) => {
					reject(err);
				});
		});
	},

	register: async (email, password) => {
		return new Promise((resolve, reject) => {
			fetch(`${API_URL}/register`, {
				method: fetchMethods.post,
				credentials: 'include',
				body: JSON.stringify({ email: email, password: password })
			})
				.then((response) => {
					resolve(response.json());
				})
				.catch((err) => {
					reject(err);
				});
		});
	},

	login: async (email, password) => {
		return fetchFunc(
			'login',
			fetchMethods.post,
			{ email: email, password: password },
			credentialModes.include
		);
	},

	logout: async () => {
		return fetchFunc('logout', fetchMethods.post, null, credentialModes.include);
	},

	confirm: async (code) => {
		return fetchFunc('confirm?code=' + code, fetchMethods.post, null, credentialModes.omit);
	},

	resendCode: async (email, password) => {
		return fetchFunc(
			'newconfirmationcode',
			fetchMethods.post,
			{ email: email, password: password },
			credentialModes.omit
		);
	},

	reset: async (email) => {
		return fetchFunc('sendresetlink?email=' + email, fetchMethods.post, null, credentialModes.omit);
	},

	changePassword: async (oldPassword, newPassword) => {
		return fetchFunc(
			'changepass',
			fetchMethods.post,
			{ old: oldPassword, new: newPassword },
			credentialModes.include
		);
	},

	changePasswordReset: async (email, password, code) => {
		return fetchFunc(
			'resetpass',
			fetchMethods.post,
			{ email: email, password: password, code: code },
			credentialModes.omit
		);
	},

	deleteAccount: async (email, password) => {
		return fetchFunc(
			'delete',
			fetchMethods.post,
			{ email: email, password: password },
			credentialModes.include
		);
	},

	refreshCookie: async () => {
		return fetchFunc('refresh', fetchMethods.post, null, credentialModes.include);
	},

	getCourses: async () => {
		return fetchFunc('course/all', fetchMethods.get, null, credentialModes.omit);
	},

	getProfessors: async () => {
		return fetchFunc('professor/all', fetchMethods.get, null, credentialModes.omit);
	},

	getScores: async () => {
		return fetchFunc('score/all', fetchMethods.get, null, credentialModes.omit);
	},

	getScoresByProfessorUUID: async (uuid) => {
		return fetchFunc('score/prof/' + uuid, fetchMethods.get, null, credentialModes.omit);
	},

	getScoresByCourse: async (code) => {
		return fetchFunc('score/coursecode/' + code, fetchMethods.get, null, credentialModes.omit);
	},

	getCoursesByCodeLike: async (code) => {
		return fetchFunc('score/coursecodelike/' + code, fetchMethods.get, null, credentialModes.omit);
	},

	getCoursesByNameLike: async (name) => {
		return fetchFunc('score/coursenamelike/' + name, fetchMethods.get, null, credentialModes.omit);
	},

	getCoursesByProfessorNameLike: async (name) => {
		return fetchFunc('score/profnamelike/' + name, fetchMethods.get, null, 'omit');
	},

	grade: async (code, uuid, teaching, coursework, learning) => {
		return fetchFunc(
			'course/grade',
			fetchMethods.post,
			{
				code: code,
				uuid: uuid,
				teaching: parseFloat(teaching),
				coursework: parseFloat(coursework),
				learning: parseFloat(learning)
			},
			credentialModes.include
		);
	}
};

export default api;
