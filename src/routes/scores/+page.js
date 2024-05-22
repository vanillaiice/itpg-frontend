import api from '$lib/api';

export async function load() {
	let data = await api.getScores();
	return data == null ? { courses: [] } : { courses: data };
}
