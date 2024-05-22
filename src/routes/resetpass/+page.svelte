<script>
	import { page } from '$app/stores';
	import api from '$lib/api';
	import PasswordMeter from '$lib/components/PasswordMeter.svelte';
	import Snackbar from '$lib/components/Snackbar.svelte';
	import { useForm } from 'svelte-use-form';

	const url = new URLSearchParams($page.url.search);
	const resetForm = useForm({ code: {}, email: {}, password: {}, newPassword: {} });

	let code = url.get('code') || 'no code provided...';
	let password = '';
	let type = '',
		msg = '';

	const changePasswordReset = async (email, password, code) => {
		await api
			.changePasswordReset(email, password, code)
			.then(() => {
				type = 'primary';
				msg = 'password reset !';
				$resetForm.reset();
			})
			.catch((e) => {
				type = 'error';
				msg = e;
			});
	};
</script>

<title>ITPG - Reset Password</title>

<form use:resetForm>
	<h6 class="padding">Reset Your Password</h6>

	<div class="field label suffix round border">
		<input name="code" type="text" autocomplete="off" bind:value={code} />
		<label>confirmation code</label>
		<i>code</i>
	</div>

	<div class="field label suffix round border">
		<input name="email" type="text" autocomplete="username" />
		<label>email</label>
		<i>email</i>
	</div>

	<div class="field label suffix round border">
		<input name="password" type="password" autocomplete="new-password" bind:value={password} />
		<label>new password</label>
		<i>visibility</i>
	</div>

	<div class="field label suffix round border">
		<input name="newPassword" type="password" autocomplete="new-password" />
		<label>confirm password</label>
		<i>visibility</i>
	</div>

	<PasswordMeter bind:password />

	<button
		class="responsive margin"
		type="submit"
		on:click={() => {
			changePasswordReset($resetForm.email.value, $resetForm.password.value, $resetForm.code.value);
		}}>Reset</button
	>
</form>

<Snackbar bind:type bind:msg timeout={3000} />
