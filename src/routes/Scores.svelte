<script>
  import "@muonw/powertable/styles/power-table.scss";
  import { formatScore } from "../utils.js";
  import { PowerTable } from "@muonw/powertable";
  import GradeForm from "../GradeForm.svelte";
  import api from "../api.js";
  import message from "../message.js";

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

  let gradeDialog;
  let loading;
  let msg = message.error(["no scores...😔"]);

  var data = {};
  var rows = [];

  let getScores = async () => {
    loading = true;
    api
      .getScores()
      .then((message) => {
        rows = message == null ? rows : message;
      })
      .catch((err) => {
        msg = err;
      })
      .finally(() => {
        loading = false;
      });
  };
  getScores();
</script>

<svelte:head>
  <title>ITPG - Scores</title>
  <meta name="description" content="Scores" />
</svelte:head>

<h1>Last 100 Added Scores 📖</h1>
<PowerTable
  ptData={rows}
  {ptInstructs}
  {ptOptions}
  on:rowClicked={(d) => {
    data = d.detail.data;
    gradeDialog.showModal();
  }}
>
  <div class="spinner" slot="noResults">
    {#if loading}
      <p class={loading ? "circle-spinner" : ""}></p>
    {:else}
      {@html msg}
    {/if}
  </div>
</PowerTable>

<GradeForm {data} bind:dialog={gradeDialog} on:close={getScores} />
