<script>
	import api from '$lib/api';
	import { useForm, validators, required, emailWithTld } from 'svelte-use-form';
	import Snackbar from './Snackbar.svelte';

	export let dialog;

	let msg = '',
		errorMsg = '';

	const resetPasswordForm = useForm({ email: {} });

	const resetPassword = async (email) => {
		errorMsg = '';

		await api
			.reset(email)
			.then(() => {
				dialog.close();
				$resetPasswordForm.reset();
				msg = 'reset link sent !';
			})
			.catch((e) => {
				errorMsg = e;
			});
	};
</script>

<dialog bind:this={dialog} class="modal center middle">
	<h5>Reset Password</h5>

	<div class="small-space"></div>

	<form use:resetPasswordForm on:submit|preventDefault>
		<div class="field label suffix round border">
			<input
				type="email"
				name="email"
				autocomplete="username"
				use:validators={[required, emailWithTld]}
			/>
			<label>email</label>
			<i>email</i>
		</div>

		{#if errorMsg != ''}
			<p class="error padding">{errorMsg}</p>
		{/if}

		<nav class="right-align no-space">
			<button
				class="transparent link"
				on:click={() => {
					errorMsg = '';
					dialog.close();
					$resetPasswordForm.reset();
				}}>Cancel</button
			>
			<button
				class="transparent link"
				type="submit"
				disabled={!$resetPasswordForm.valid}
				on:click={() => {
					resetPassword($resetPasswordForm.email.value);
				}}>Confirm</button
			>
		</nav>
	</form>
</dialog>

<Snackbar type="primary" bind:msg />
