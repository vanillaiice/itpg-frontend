<script>
	import Grade from '$lib/components/Grade.svelte';
	import Table from '$lib/components/Table.svelte';

	export let data = { courses: {} };

	let dialog;
	let course = { courseCode: '', courseName: '', profName: '', profUUID: '' };

	const opts = [
		{ key: 'courseCode', title: 'Code' },
		{ key: 'courseName', title: 'Name' },
		{ key: 'profName', title: 'Professor' },
		{ key: 'scoreTeaching', title: 'Teaching' },
		{ key: 'scoreCoursework', title: 'Coursework' },
		{ key: 'scoreLearning', title: 'Learning' },
		{ key: 'scoreAverage', title: 'Average' }
	];
</script>

<title>ITPG - Scores</title>

<h6 class="center-align">Last 100 Added Scores 📖</h6>

<Table
	style="stripes"
	{opts}
	data={data.courses}
	on:rowClicked={(d) => {
		course.courseName = d.detail.data.courseName;
		course.courseCode = d.detail.data.courseCode;
		course.profUUID = d.detail.data.profUUID;
		course.profName = d.detail.data.profName;

		dialog.showModal();
	}}
/>

<Grade bind:dialog bind:course />
