<script>
	export let type = '';
	export let msg = '';
	export let timeout = 1000;

	$: {
		msg;
		setTimeout(() => {
			msg = '';
		}, timeout);
	}
</script>

<div
	class="snackbar {type} {msg == '' ? '' : 'active'}"
	on:click={() => {
		msg = '';
	}}
>
	{msg}
</div>
