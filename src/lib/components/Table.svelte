<script>
	import { createEventDispatcher } from 'svelte';

	export let style;
	export let opts = [{ key: '', title: '' }];
	export let data = [];

	$: noData = data.length == 0 ? true : false;

	const dispatch = createEventDispatcher();

	const handleRowClicked = (data) => {
		dispatch('rowClicked', { data });
	};
</script>

<table class={style}>
	{#if !noData}
		<thead>
			{#each Object.values(opts) as o}
				<th>{o.title || o.key}</th>
			{/each}
		</thead>

		<tbody>
			{#each data as d}
				<tr>
					{#each Object.values(opts) as o}
						<td
							on:click={() => {
								handleRowClicked(d);
							}}>{d[o.key]}</td
						>
					{/each}
				</tr>
			{/each}
		</tbody>
	{:else}
		<slot name="noData">
			<tbody>
				<tr>
					<td class="error">
						<h6 class="center-align">No data...</h6>
					</td>
				</tr>
			</tbody>
		</slot>
	{/if}
</table>

<style>
	td:hover {
		color: var(--primary);
		cursor: pointer;
		font-weight: bold;
	}
</style>
