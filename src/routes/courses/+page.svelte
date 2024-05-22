<script>
	import Course from '$lib/components/Course.svelte';
	import Table from '$lib/components/Table.svelte';

	export let data = { courses: {} };

	let courseData = { name: {}, code: {} };
	let show = true;

	let opts = [
		{ key: 'code', title: 'Code' },
		{ key: 'name', title: 'Name' }
	];
</script>

<title>ITPG - Courses</title>

<h6 class="center-align">Last 100 Added Courses 📚</h6>

{#if show}
	<Table
		style="stripes"
		{opts}
		data={data.courses}
		on:rowClicked={(d) => {
			courseData = d.detail.data;
			show = false;
		}}
	/>
{:else}
	<Course bind:data={courseData} bind:show />
{/if}
