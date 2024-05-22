<script>
	import 'beercss';
	import api from '$lib/api';
	import { LoginStatus } from '$lib/store';
	import Login from '$lib/components/Login.svelte';
	import Signup from '$lib/components/Signup.svelte';
	import Snackbar from '$lib/components/Snackbar.svelte';

	let loginDialog, signupDialog;
	let showLogout;
	let type = '',
		msg = '';

	let themeDark = localStorage.getItem('theme') == 'dark' ? true : false;

	const setTheme = (theme) => {
		localStorage.setItem('theme', theme);
		document.body.className = theme;
	};

	const toggleTheme = () => {
		let current_theme = document.body.className;
		const theme = current_theme === 'light' ? 'dark' : 'light';
		themeDark = theme == 'dark' ? true : false;
		setTheme(theme);
	};

	const isLoggedIn = async () => {
		api
			.isLoggedIn()
			.then((r) => {
				if (r) {
					$LoginStatus = true;
					type = 'primary';
					msg = 'logged in';
				} else {
					$LoginStatus = false;
				}
			})
			.catch(() => {
				$LoginStatus = false;
			});
	};

	const logout = async () => {
		api
			.logout()
			.then(async () => {
				await isLoggedIn();
				type = 'primary';
				msg = 'logged out';
			})
			.catch((e) => {
				type = 'error';
				msg = e;
			});
	};

	isLoggedIn();
</script>

<div class="max">
	<header class="fill">
		<nav>
			<button class="circle transparent">
				<i>menu</i>
				<menu class="no-wrap">
					<a href="/">Home</a>
					<a href="/courses">Courses</a>
					<a href="/professors">Professors</a>
					<a href="/scores">Scores</a>
					{#if $LoginStatus}
						<a href="/dashboard">Dashboard</a>
					{/if}
				</menu>
			</button>

			<div class="max"></div>

			{#if !$LoginStatus}
				<nav class="no-space">
					<button
						class="border left-round small max"
						on:click={() => {
							signupDialog.showModal();
						}}
					>
						<span>Signup</span>
						<i>person_add</i>
					</button>

					<button
						class="border right-round small max"
						on:click={() => {
							loginDialog.showModal();
						}}
					>
						<span>Login</span>
						<i>login</i>
					</button>
				</nav>
			{:else}
				<button
					class="border small"
					on:click={() => {
						logout();
					}}
					on:mouseleave={() => {
						showLogout = false;
					}}
					on:mouseenter={() => {
						showLogout = true;
					}}
				>
					{#if showLogout}
						<span>Logout</span>
						<i>logout</i>
					{:else}
						Signed in
						<i>sync_saved_locally</i>
					{/if}
				</button>
			{/if}

			<button class="transparent small circle" on:click={toggleTheme}>
				{#if themeDark}
					<i>light_mode</i>
				{:else}
					<i>dark_mode</i>
				{/if}
			</button>
		</nav>

		<div class="small-space"></div>

		<h5 class="small-padding"><a href="/" id="home">Is this professor good ?</a></h5>
	</header>

	<Login bind:dialog={loginDialog} />

	<Signup bind:dialog={signupDialog} />

	<main class="responsive max padding">
		<slot />
	</main>

	<Snackbar bind:type bind:msg />

	<footer class="fill fixed padding">
		<section class="center-align">
			<a class="no-margin center-align" href="/about">about</a>
			~
			<a class="no-margin center-align" href="/contact">contact</a>
			~
			<a class="no-margin center-align" href="/privacy">privacy</a>
			~
			<a class="no-margin center-align" href="/disclaimer">disclaimer</a>
		</section>

		<section class="center-align">
			<a class="no-margin center-align link" href="https://github.com/vanillaiice" target="_blank"
				>&copy; 2024 🍦 vanillaiice</a
			>
			~ made with
			<a class="no-margin center-align link" href="https://beercss.com" target="_blank">
				beercss
			</a>
			&amp;
			<a class="button circle transparent no-margin" href="https://kit.svelte.dev/" target="_blank">
				<img class="tiny" src="/svelte-logo.svg" alt="sveltejs Logo" />
			</a>
		</section>

		<section class="center-align">
			<a
				class="button circle transparent"
				href="https://github.com/vanillaiice/itpg"
				target="_blank"
			>
				<i>
					<img src="/github.svg" alt="github" />
				</i>
			</a>
			<a class="button circle transparent" href="https://twitter.com/vanillaiiceee" target="_blank">
				<i>
					<img src="/x.svg" alt="twitter" />
				</i>
			</a>
		</section>
	</footer>
</div>

<style>
	#home:hover {
		color: var(--primary);
		cursor: pointer;
		transition: linear 0.2s color;
	}
</style>
