<script>
	import { useForm, validators, required, emailWithTld } from 'svelte-use-form';
	import api from '$lib/api';
	import { LoginStatus } from '$lib/store';
	import ResetPassword from './ResetPassword.svelte';

	export let dialog;

	const loginForm = useForm({ email: {}, password: {} });

	let resetPasswordDialog;
	let errorMsg = '';
	let loading;

	const login = async (email, password) => {
		loading = true;
		errorMsg = '';

		await api
			.login(email, password)
			.then(() => {
				$LoginStatus = !$LoginStatus;
				dialog.close();
			})
			.catch((e) => {
				errorMsg = e;
			})
			.finally(() => {
				loading = false;
			});
	};
</script>

<dialog bind:this={dialog} class="modal center middle">
	<h5>Login</h5>

	<div class="small-space"></div>

	<form use:loginForm on:submit|preventDefault>
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

		<div class="field label suffix round border">
			<input
				type="password"
				name="password"
				autocomplete="current-password"
				use:validators={[required]}
			/>
			<label>password</label>
			<i>visibility</i>
		</div>

		<button
			class="small secondary transparent underline"
			on:click={() => {
				dialog.close();
				resetPasswordDialog.showModal();
			}}>Forgot password ?</button
		>

		{#if errorMsg != ''}
			<p class="error padding">{errorMsg}</p>
		{/if}

		<nav class="right-align no-space">
			<button
				class="transparent link"
				on:click={() => {
					errorMsg = '';
					dialog.close();
					$loginForm.reset();
				}}>Cancel</button
			>
			<button
				class="transparent link"
				disabled={!$loginForm.valid}
				type="submit"
				on:click|preventDefault={() => {
					login($loginForm.email.value, $loginForm.password.value);
				}}
			>
				{#if !loading}
					Confirm
				{:else}
					<progress class="circle small"></progress>
				{/if}
			</button>
		</nav>
	</form>
</dialog>

<ResetPassword bind:dialog={resetPasswordDialog} />
