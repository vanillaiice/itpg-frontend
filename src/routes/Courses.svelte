<script>
  import { PowerTable } from "@muonw/powertable";
  import { slide } from "svelte/transition";
  import Course from "../Course.svelte";
  import api from "../api.js";
  import message from "../message.js";

  const ptInstructs = [
    { key: "code", title: "Course Code", sortable: true },
    { key: "name", title: "Course Name", sortable: true },
  ];

  let show, blur, loading;
  let msg = message.error(["no courses...😔"]);

  var data = {};
  var rows = [];

  let getCourses = async () => {
    loading = true;
    api
      .getCourses()
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
  getCourses();

  let toggleShow = () => {
    show = !show;
    blur = !blur;
  };
</script>

<svelte:head>
  <title>ITPG - Courses</title>
  <meta name="description" content="Courses" />
</svelte:head>

<h1>Last 100 Added Courses 📚</h1>
{#if !show}
  <div transition:slide={{}}>
    <PowerTable
      ptData={rows}
      {ptInstructs}
      on:rowClicked={(d) => {
        data = d.detail.data;
        toggleShow();
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
{:else}
  <Course {data} toggleShowFunc={toggleShow} />
{/if}
