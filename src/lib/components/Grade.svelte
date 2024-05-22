<script>
	import api from '$lib/api';
	import { useForm, validators, required } from 'svelte-use-form';
	import { validGrade } from '$lib/validGrade';
	import Snackbar from './Snackbar.svelte';

	export let dialog;
	export let course = { courseCode: '', courseName: '', profName: '', profUUID: '' };

	const gradeForm = useForm({ g1: {}, g2: {}, g3: {} });

	let errorMsg = '',
		type = '',
		msg = '';
	let loading;

	const grade = async (g1, g2, g3) => {
		loading = true;

		await api
			.grade(course.courseCode, course.profUUID, g1, g2, g3)
			.then(() => {
				type = 'primary';
				msg = 'graded course !';
				$gradeForm.reset();
				dialog.close();
			})
			.catch((e) => {
				type = 'error';
				errorMsg = e;
			})
			.finally(() => {
				loading = false;
			});
	};
</script>

<dialog bind:this={dialog} class="modal center middle" on:submit|preventDefault>
	<form use:gradeForm>
		<h6>Grade course: {course.courseName} ({course.courseCode}), by {course.profName}</h6>

		<div class="field label suffix round border">
			<input type="number" name="g1" autocomplete="off" use:validators={[required, validGrade]} />
			<label>grade teaching</label>
			<i>grade</i>
		</div>

		<div class="field label suffix round border">
			<input type="number" name="g2" autocomplete="off" use:validators={[required, validGrade]} />
			<label>grade coursework</label>
			<i>grade</i>
		</div>

		<div class="field label suffix round border">
			<input type="number" name="g3" autocomplete="off" use:validators={[required, validGrade]} />
			<label>grade learning</label>
			<i>grade</i>
		</div>

		{#if errorMsg != ''}
			<p class="error padding">{errorMsg}</p>
		{/if}

		<nav class="right-align no-space">
			<button
				class="transparent link"
				on:click={() => {
					dialog.close();
				}}>Cancel</button
			>
			<button
				class="transparent link"
				type="submit"
				disabled={!$gradeForm.valid}
				on:click={() => {
					grade($gradeForm.g1.value, $gradeForm.g2.value, $gradeForm.g3.value);
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

<Snackbar bind:type bind:msg />
