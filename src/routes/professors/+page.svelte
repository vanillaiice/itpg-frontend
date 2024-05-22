<script>
	import Professor from '$lib/components/Professor.svelte';
	import Table from '$lib/components/Table.svelte';

	export let data = { courses: {} };

	let show = true;
	var profData = { name: {}, uuid: {} };

	const opts = [{ key: 'name', title: 'Name' }];
</script>

<title>ITPG - Professors</title>

<h6 class="center-align">Last 100 Added Professors 🧑‍🏫</h6>

{#if show}
	<Table
		style="stripes"
		{opts}
		data={data.courses}
		on:rowClicked={(d) => {
			profData.uuid = d.detail.data.uuid;
			profData.name = d.detail.data.name;
			show = false;
		}}
	/>
{:else}
	<Professor bind:data={profData} bind:show />
{/if}
