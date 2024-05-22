<script>
	import Grade from './Grade.svelte';
	import api from '$lib/api';
	import Table from './Table.svelte';

	export let data = { name: {}, uuid: {} };
	export let show = false;

	let dialog;

	const opts = [
		{ key: 'courseCode', title: 'Code' },
		{ key: 'courseName', title: 'Name' },
		{ key: 'scoreTeaching', title: 'Teaching' },
		{ key: 'scoreCoursework', title: 'Coursework' },
		{ key: 'scoreLearning', title: 'Learning' },
		{ key: 'scoreAverage', title: 'Average' }
	];

	var scores = [];
	var course = {};

	let getScoresByProfessorUUID = async (uuid) => {
		await api
			.getScoresByProfessorUUID(uuid)
			.then((d) => {
				scores = d == null ? [] : d;
			})
			.catch((e) => {
				console.log(e);
			});
	};

	getScoresByProfessorUUID(data.uuid);
</script>

<nav>
	<button
		class="circle transparent"
		on:click={() => {
			show = true;
		}}
	>
		<i>arrow_back</i>
	</button>
	<h6 class="max">Back</h6>
</nav>

<h3>Courses by: {data.name}</h3>

<Table
	style="stripes scroll"
	{opts}
	bind:data={scores}
	on:rowClicked={(d) => {
		course = d.detail.data;
		dialog.showModal();
	}}
/>

<Grade bind:dialog bind:course />
