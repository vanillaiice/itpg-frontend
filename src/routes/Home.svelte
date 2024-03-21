<script>
  import { PowerTable } from "@muonw/powertable";
  import { formatScore } from "../utils.js";
  import { fade } from "svelte/transition";
  import { useForm, validators, required, pattern } from "svelte-use-form";
  import GradeForm from "../GradeForm.svelte";
  import api from "../api.js";
  import Dialog from "../Dialog.svelte";
	import logo from "../assets/itpg-logo.png"

  const searchTypes = { courseCode: 0, courseName: 1, profName: 2 };
  const ptOptions = {
    userFunctions: { customParse: formatScore },
  };
  const ptInstructs = [
    { key: "courseCode", title: "Course Code" },
    { key: "courseName", title: "Course Name" },
    { key: "profName", title: "Professor Name" },
    { key: "scoreTeaching", title: "Teaching" },
    { key: "scoreCoursework", title: "Coursework" },
    { key: "scoreLearning", title: "Learning" },
    { key: "scoreAverage", title: "Average" },
    { key: "count", title: "Count" },
  ];
  const courseCodeForm = useForm({}, "course"),
    courseNameForm = useForm({}, "courseName"),
    professorNameForm = useForm({}, "professor");

  let gradeDialog, messageDialog;
  let dialogMessage;
  let currentForm;
  let circleSpinner;
  let searchType = searchTypes.profName;

  let gradeData = {};
  let rows = null;

  let search = async (type) => {
    try {
      let r = null;
      switch (type) {
        case searchTypes.courseCode:
          r = await api.getCoursesByCodeLike(currentForm.courseCode._value);
          break;
        case searchTypes.profName:
          r = await api.getCoursesByProfessorNameLike(
            currentForm.profName._value,
          );
          break;
        case searchTypes.courseName:
          r = await api.getCoursesByNameLike(currentForm.courseName._value);
          break;
        default:
          return;
      }
      rows = r == null ? [] : r;
    } catch (err) {
      dialogMessage = err;
      messageDialog.showModal();
    } finally {
      circleSpinner = false;
    }
  };
</script>

<svelte:head>
  <title>ITPG 🤔</title>
  <meta name="description" content="ITPG" />
</svelte:head>

<Dialog bind:dialog={messageDialog}>
  {@html dialogMessage}
</Dialog>

<section>
  <h2>Search and Grade your Courses 🔍✍️</h2>

  <select
    name="search-type"
    bind:value={searchType}
    on:change={() => {
      rows = null;
    }}
  >
    <option value="">--Select Search Type--</option>
    <option value={searchTypes.courseCode}>Course Code</option>
    <option value={searchTypes.courseName}>Course Name</option>
    <option value={searchTypes.profName}>Professor Name</option>
  </select>

  {#if searchType == searchTypes.courseCode}
    <form use:courseCodeForm>
      <input
        type="search"
        name="courseCode"
        placeholder="course code"
        use:validators={[required, pattern("^[a-zA-z0-9]+$")]}
      />
      <button
        type="submit"
        class={circleSpinner ? "circle-spinner" : ""}
        disabled={!$courseCodeForm.valid}
        on:click|preventDefault={() => {
          circleSpinner = true;
          currentForm = $courseCodeForm;
          search(searchType);
        }}>Search</button
      >
    </form>
  {/if}

  {#if searchType == searchTypes.courseName}
    <form use:courseNameForm>
      <input
        type="search"
        name="courseName"
        placeholder="course name"
        use:validators={[required, pattern("^[a-zA-z0-9 ]+$")]}
      />
      <button
        type="submit"
        class={circleSpinner ? "circle-spinner" : ""}
        disabled={!$courseNameForm.valid}
        on:click|preventDefault={() => {
          circleSpinner = true;
          currentForm = $courseNameForm;
          search(searchType);
        }}>Search</button
      >
    </form>
  {/if}

  {#if searchType == searchTypes.profName}
    <form use:professorNameForm>
      <input
        type="search"
        name="profName"
        placeholder="professor name"
        use:validators={[required, pattern("^[a-zA-z ]+$")]}
      />
      <button
        type="submit"
        class={circleSpinner ? "circle-spinner" : ""}
        disabled={!$professorNameForm.valid}
        on:click|preventDefault={() => {
          circleSpinner = true;
          currentForm = $professorNameForm;
          search(searchType);
        }}>Search</button
      >
    </form>
  {/if}
</section>

{#if rows != null}
  <PowerTable
    ptData={rows}
    {ptInstructs}
    {ptOptions}
    on:rowClicked={(d) => {
      gradeData = d.detail.data;
      gradeDialog.showModal();
    }}
  >
    <div slot="noResults">no courses...😔</div>
  </PowerTable>
{/if}

<GradeForm
  data={gradeData}
  bind:dialog={gradeDialog}
  callbackFunc={() => search(searchType)}
/>

{#if rows == null}
	<img src={logo} alt="itpg logo" transition:fade={{ delay: 50, duration: 200 }}/>
{/if}

<style>
	img {
		padding: 30px;
	}

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  form {
    flex-direction: row;
  }

  h2 {
    transition: color 0.2s linear;
  }

  h2:hover {
    color: orangered;
    cursor: default;
  }
</style>
