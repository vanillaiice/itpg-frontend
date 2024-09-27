<script>
	import api from '$lib/api';
	import PasswordMeter from './PasswordMeter.svelte';
	import Snackbar from './Snackbar.svelte';
	import { LoginStatus } from '$lib/store';
	import { passwordMatch } from '$lib/passwordMatch';
	import {
		useForm,
		validators,
		required,
		emailWithTld,
		minLength,
		maxLength
	} from 'svelte-use-form';

	export let dialog;

	const signupForm = useForm({ email: {}, password: {} }, 'signup');
	const confirmForm = useForm({ code: {} }, 'confirm');

	let confirmDialog;
	let password = '',
		score = 0;
	let errorMsg = '';
	let snackbarType = '',
		snackbarMsg = '';
	let loading;

	const signup = async (email, password) => {
		loading = true;
		errorMsg = '';

		await api
			.register(email, password)
			.then((res) => {
				if (res.code == 4006) {
					dialog.close();
					confirmDialog.showModal();
				} else if (res.code == 5004) {
					dialog.close();

					api
						.login(email, password)
						.then(() => {
							snackbarMsg = 'logged in';
							$LoginStatus = true;
						})
						.catch((e) => {
							snackbarType = 'error';
							snackbarMsg = e;
						})
						.finally(() => {
							dialog.close();
						});
				} else if (res.code != 2000) {
					throw new Error(`${res.code}: ${res.message}`);
				}
			})
			.catch((e) => {
				errorMsg = e;
			})
			.finally(() => {
				loading = false;
			});
	};

	const confirm = async (code) => {
		loading = true;
		errorMsg = '';

		await api
			.confirm(code)
			.then(() => {
				snackbarType = 'primary';
				snackbarMsg = 'confirmed';
				confirmDialog.close();

				api
					.login($signupForm.email.value, $signupForm.password.value)
					.then(() => {
						$signupForm.reset();
						$confirmForm.reset();
						snackbarMsg = 'logged in';
						$LoginStatus = true;
					})
					.catch((e) => {
						snackbarType = 'error';
						snackbarMsg = e;
					})
					.finally(() => {
						loading = false;
					});
			})
			.catch((e) => {
				errorMsg = e;
			})
			.finally(() => {
				loading = false;
			});
	};

	const resendCode = async () => {
		loading = true;
		errorMsg = '';

		await api
			.resendCode($signupForm.email.value, $signupForm.password.value)
			.then(() => {
				snackbarType = 'primary';
				snackbarMsg = 'code resent';
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
	<h5>Signup</h5>

	<div class="small-space"></div>

	<form use:signupForm on:submit|preventDefault>
		<div class="field label suffix round border">
			<input
				type="email"
				name="email"
				autocomplete="email"
				use:validators={[required, emailWithTld]}
			/>
			<label>email</label>
			<i>email</i>
		</div>

		<div class="field label suffix round border">
			<input
				type="password"
				name="password"
				autocomplete="new-password"
				bind:value={password}
				use:validators={[required]}
			/>
			<label>password</label>
			<i>visibility</i>
		</div>

		<div class="field label suffix round border">
			<input
				type="password"
				name="confirmPassword"
				autocomplete="new-password"
				use:validators={[required, passwordMatch]}
			/>
			<label> confirm password</label>
			<i>visibility</i>
		</div>

		<PasswordMeter bind:password bind:score />

		{#if errorMsg != ''}
			<p class="error padding">{errorMsg}</p>
		{/if}

		<nav class="right-align no-space">
			<button
				class="transparent link"
				on:click={() => {
					errorMsg = '';
					score = 0;
					dialog.close();
					$signupForm.reset();
				}}>Cancel</button
			>
			<button
				class="transparent link"
				disabled={!$signupForm.valid || !(score >= 3)}
				on:click={() => {
					signup($signupForm.email.value, $signupForm.password.value);
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

<dialog bind:this={confirmDialog} class="modal center middle">
	<h5>Confirm</h5>

	<div class="small-space"></div>

	<form use:confirmForm on:submit|preventDefault>
		<div class="field label suffix round border">
			<input
				type="text"
				name="code"
				autocomplete="off"
				use:validators={[required, minLength(10), maxLength(10)]}
			/>
			<label>confirmation code</label>
			<i>code</i>
		</div>

		<button class="responsive" on:click={resendCode}> Resend </button>

		{#if errorMsg != ''}
			<p class="error padding">{errorMsg}</p>
		{/if}

		<nav class="right-align no-space">
			<button
				class="transparent link"
				on:click={() => {
					errorMsg = '';
					confirmDialog.close();
					$confirmForm.reset();
					$signupForm.reset();
				}}>Cancel</button
			>
			<button
				type="submit"
				class="transparent link"
				disabled={!$confirmForm.valid}
				on:click={() => {
					confirm($confirmForm.code.value);
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

<Snackbar bind:type={snackbarType} bind:msg={snackbarMsg} />
