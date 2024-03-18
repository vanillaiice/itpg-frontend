<script>
  import "@muonw/powertable/styles/power-table.scss";
  import { formatScore } from "./utils.js";
  import { PowerTable } from "@muonw/powertable";
  import GradeForm from "./GradeForm.svelte";
  import { slide } from "svelte/transition";
  import api from "./api.js";
  import message from "./message.js";

  export let data;
  export let toggleShowFunc;

  const ptOptions = {
    userFunctions: { customParse: formatScore },
  };
  const ptInstructs = [
    { key: "profName", title: "Professor Name" },
    { key: "scoreTeaching", title: "Teaching" },
    { key: "scoreCoursework", title: "Coursework" },
    { key: "scoreLearning", title: "Learning" },
    { key: "scoreAverage", title: "Average" },
    { key: "count", title: "Count" },
  ];

  let loading;
  let gradeDialog;
  let msg = message.error(["no professors...😔"]);

  var profData = {};
  var rows = [];

  let getScoresByCourse = async (code) => {
    loading = true;
    api
      .getScoresByCourse(code)
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
  getScoresByCourse(data.code);
</script>

<section class="tbl-nav">
  <h3>
    Professors teaching <strong class="title-info"
      >{data.name} ({data.code})</strong
    >
  </h3>
  <button on:click={toggleShowFunc}>Back</button>
</section>
<div transition:slide={{}}>
  <PowerTable
    ptData={rows}
    {ptInstructs}
    {ptOptions}
    on:rowClicked={(d) => {
      profData = d.detail.data;
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
</div>

<GradeForm
  data={profData}
  bind:dialog={gradeDialog}
  on:close={() => {
    getScoresByCourse(data.code);
  }}
/>
