<script>
	import z from 'zxcvbn';

	export let password = '';
	export let score = 0;

	let color = '';

	$: {
		score = z(password).score;

		switch (true) {
			case score <= 1:
				color = 'red-text';
				break;
			case score <= 2:
				color = 'orange-text';
				break;
			case score <= 3:
				color = 'light-green-text';
				break;
			default:
				color = 'green-text';
		}
	}
</script>

<small>Password strength</small>

<progress class={color} value={score} max="4"></progress>
