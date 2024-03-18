<script>
  import "@muonw/powertable/styles/power-table.scss";
  import { formatScore } from "./utils.js";
  import { PowerTable } from "@muonw/powertable";
  import GradeForm from "./GradeForm.svelte";
  import api from "./api.js";
  import message from "./message.js";

  export let data;
  export let toggleShowFunc;

  const ptOptions = {
    userFunctions: { customParse: formatScore },
  };
  const ptInstructs = [
    { key: "courseCode", title: "Code" },
    { key: "courseName", title: "Name" },
    { key: "scoreTeaching", title: "Teaching" },
    { key: "scoreCoursework", title: "Coursework" },
    { key: "scoreLearning", title: "Learning" },
    { key: "scoreAverage", title: "Average" },
    { key: "count", title: "Count" },
  ];

  let loading;
  let gradeDialog;
  let msg = message.error(["no courses...😔"]);

  var courseData = {};
  var rows = [];

  let getScoresByProfessorUUID = async (uuid) => {
    loading = true;
    api
      .getScoresByProfessorUUID(uuid)
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
  getScoresByProfessorUUID(data.uuid);
</script>

<section class="tbl-nav">
  <h3>
    Courses by <strong class="title-info">{data.name}</strong>
  </h3>
  <button on:click={toggleShowFunc}>Back</button>
</section>
<PowerTable
  ptData={rows}
  {ptInstructs}
  {ptOptions}
  on:rowClicked={(d) => {
    courseData = d.detail.data;
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

<GradeForm
  data={courseData}
  bind:dialog={gradeDialog}
  on:close={() => {
    getScoresByProfessorUUID(data.uuid);
  }}
/>
