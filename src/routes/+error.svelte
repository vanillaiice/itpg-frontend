<script>
	import { page } from '$app/stores';
</script>

<div class="error">
	<h3 class="center-align">{$page.status}: {$page.error.message}</h3>
</div>
