<script>
	import api from '$lib/api';
	import { fade } from 'svelte/transition';
	import { useForm, validators, required, pattern } from 'svelte-use-form';
	import Snackbar from '$lib/components/Snackbar.svelte';
	import Grade from '$lib/components/Grade.svelte';
	import Table from '$lib/components/Table.svelte';

	const searchForm = useForm({ searchOption: {}, searchTerm: {} });
	const searchOptions = {
		courseCode: 'course code',
		courseName: 'course name',
		profName: 'professor name'
	};

	let course = { courseCode: '', courseName: '', profName: '', profUUID: '' };
	let searchOption = searchOptions.profName,
		searchTerm = '',
		msg = '';
	let dialog;
	let loading;

	var data = [];

	const getData = async function () {
		loading = true;

		try {
			msg = '';
			let d = null;
			switch (searchOption) {
				case searchOptions.courseCode:
					d = await api.getCoursesByCodeLike(searchTerm);
					break;
				case searchOptions.profName:
					d = await api.getCoursesByProfessorNameLike(searchTerm);
					break;
				case searchOptions.courseName:
					d = await api.getCoursesByNameLike(searchTerm);
					break;
				default:
					throw 'please select a search type';
			}

			data = d.message == null ? [] : d.message;

			if (data.length == 0) {
				msg = 'no results';
			}
		} catch (e) {
			msg = e;
		} finally {
			loading = false;
		}
	};

	const opts = [
		{ key: 'courseCode', title: 'Code' },
		{ key: 'courseName', title: 'Name' },
		{ key: 'profName', title: 'Professor' },
		{ key: 'scoreTeaching', title: 'Teaching' },
		{ key: 'scoreCoursework', title: 'Coursework' },
		{ key: 'scoreLearning', title: 'Learning' },
		{ key: 'scoreAverage', title: 'Average' }
	];

	$searchForm.searchOption.value = searchOptions.profName;
</script>

<title>ITPG - Home</title>

<h6 class="center-align">Search and Grade your Courses 🔍✍️</h6>

<form use:searchForm on:submit|preventDefault>
	<div class="field suffix round fill border small">
		<select name="searchOption" bind:value={searchOption} use:validators={[required]}>
			<option value="">--Select Search Type--</option>
			<option value={searchOptions.courseCode}>Course Code</option>
			<option value={searchOptions.courseName}>Course Name</option>
			<option value={searchOptions.profName}>Professor Name</option>
		</select>
		<i>arrow_drop_down</i>
	</div>

	<div class="grid">
		<div class="field label border round fill small s8 m10 l10">
			<input
				name="searchTerm"
				type="search"
				bind:value={searchTerm}
				autocomplete="off"
				use:validators={[required, pattern('^[a-zA-z0-9 ]+$')]}
			/>
			<label>{searchOption}</label>
		</div>

		<div class="s4 m2 l2">
			<button
				type="submit"
				class="transparent round fill"
				disabled={!$searchForm.valid}
				on:click={getData}
			>
				{#if !loading}
					<i>search</i>
				{:else}
					<progress class="circle small"></progress>
				{/if}
			</button>
		</div>
	</div>
</form>

{#if data.length != 0 && searchOption != ''}
	<Table
		style="stripes"
		{opts}
		{data}
		on:rowClicked={(d) => {
			course.courseName = d.detail.data.courseName;
			course.courseCode = d.detail.data.courseCode;
			course.profUUID = d.detail.data.profUUID;
			course.profName = d.detail.data.profName;

			dialog.showModal();
		}}
	/>

	<Grade bind:dialog bind:course />
{:else}
	<div class="center-align middle-align padding">
		<img src={'/itpg-logo.png'} alt="itpg logo" transition:fade={{ delay: 50, duration: 200 }} />
	</div>
{/if}

<Snackbar type="error" bind:msg timeout={3000} />
