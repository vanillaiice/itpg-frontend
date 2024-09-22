import api from '$lib/api';

export async function load() {
	let data = await api.getScores();
	return data.message == null ? { courses: [] } : { courses: data.message };
}
