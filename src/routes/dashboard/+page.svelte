<script>
	import api from '$lib/api';
	import PasswordMeter from '$lib/components/PasswordMeter.svelte';
	import Snackbar from '$lib/components/Snackbar.svelte';
	import { LoginStatus } from '$lib/store';
	import { useForm, validators, required, emailWithTld } from 'svelte-use-form';
	import { passwordMatch } from '$lib/passwordMatch';
	import { typeDelete } from '$lib/typeDelete';

	const changePasswordForm = useForm({oldPassword: {}, password: {} }, 'changePasswordForm');
	const deleteAccountForm = useForm({ email: {}, password: {} }, 'deleteAccountForm');

	let tabs = { changePass: true, deleteAccount: false };
	let password = '';
	let msg = '',
		type = '';

	const resetTabs = () => {
		tabs.deleteAccount = false;
		tabs.changePass = false;
	};

	const changePassword = async (oldPassword, newPassword) => {
		await api
			.changePassword(oldPassword, newPassword)
			.then(() => {
				type = 'primary';
				msg = 'password changed !';

				$changePasswordForm.reset();
			})
			.catch((e) => {
				type = 'error';
				msg = e;
			});
	};

	const deleteAccount = async (email, password) => {
		await api
			.deleteAccount(email, password)
			.then(() => {
				type = 'primary';
				msg = 'account deleted !';

				$deleteAccountForm.reset();
			})
			.catch((e) => {
				type = 'error';
				msg = e;
			});
	};
</script>

<title>ITPG - Dashboard</title>

{#if $LoginStatus}
	<div>
		<div class="tabs">
			<a
				class={tabs.changePass == true ? 'active' : ''}
				on:click={() => {
					resetTabs();
					tabs.changePass = true;
				}}>Change Password</a
			>
			<a
				class={tabs.deleteAccount == true ? 'active' : ''}
				on:click={() => {
					resetTabs();
					tabs.deleteAccount = true;
				}}>Delete Account</a
			>
		</div>

		<div class="page padding {tabs.changePass == true ? 'active' : ''}">
			<form use:changePasswordForm on:submit|preventDefault>
				<div class="field label suffix round border">
					<input
						name="oldPassword"
						type="password"
						autocomplete="current-password"
						use:validators={[required]}
					/>
					<label>current password</label>
					<i>visibility</i>
				</div>

				<div class="field label suffix round border">
					<input
						name="password"
						type="password"
						autocomplete="new-password"
						bind:value={password}
						use:validators={[required]}
					/>
					<label>new password</label>
					<i>password</i>
				</div>

				<div class="field label suffix round border">
					<input
						type="password"
						autocomplete="new-password"
						use:validators={[required, passwordMatch]}
					/>
					<label>confirm password</label>
					<i>password</i>
				</div>

				<PasswordMeter bind:password />

				<button
					class="responsive"
					disabled={!$changePasswordForm.valid}
					on:click={() => {
						changePassword(
							$changePasswordForm.oldPassword.value,
							$changePasswordForm.password.value
						);
					}}>Change</button
				>
			</form>
		</div>

		<div class="page padding {tabs.deleteAccount == true ? 'active' : ''}">
			<form use:deleteAccountForm on:submit|preventDefault>
				<div class="field label suffix round border">
					<input
						name="email"
						type="text"
						autocomplete="username"
						use:validators={[required, emailWithTld]}
					/>
					<label>email</label>
					<i>email</i>
				</div>

				<div class="field label suffix round border">
					<input
						name="password"
						type="password"
						autocomplete="current-password"
						use:validators={[required]}
					/>
					<label>password</label>
					<i>visibility</i>
				</div>

				<div class="field label suffix round border">
					<input
						name="typeDelete"
						type="text"
						autocomplete="off"
						use:validators={[required, typeDelete]}
					/>
					<label>please type: 'delete'</label>
					<i>edit_note</i>
				</div>

				<button
					class="responsive"
					disabled={!$deleteAccountForm.valid}
					on:click={() => {
						deleteAccount($deleteAccountForm.email.value, $deleteAccountForm.password.value);
					}}>Delete</button
				>
			</form>
		</div>
	</div>
{:else}
	<h1 class="error center-align">Not logged in...😔</h1>
{/if}

<Snackbar bind:type bind:msg />
