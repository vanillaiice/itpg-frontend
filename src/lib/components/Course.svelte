<script>
	import Table from '$lib/components/Table.svelte';
	import Grade from './Grade.svelte';
	import api from '$lib/api';

	export let data = { name: {}, code: {} };
	export let show = false;

	let dialog;

	const opts = [
		{ key: 'profName', title: 'Professor Name' },
		{ key: 'scoreTeaching', title: 'Teaching' },
		{ key: 'scoreCoursework', title: 'Coursework' },
		{ key: 'scoreLearning', title: 'Learning' },
		{ key: 'scoreAverage', title: 'Average' }
	];

	var course = {};
	var scores = [];

	let getScoresByCourseCode = async (code) => {
		await api
			.getScoresByCourse(code)
			.then((d) => {
				scores = d == null ? [] : d;
			})
			.catch((e) => {
				console.log(e);
			});
	};

	getScoresByCourseCode(data.code);
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

<h3>Professors teaching: {data.name} ({data.code})</h3>

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
