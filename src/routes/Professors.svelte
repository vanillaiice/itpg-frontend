<script>
  import "@muonw/powertable/styles/power-table.scss";
  import { PowerTable } from "@muonw/powertable";
  import Professor from "../Professor.svelte";
  import api from "../api.js";
  import message from "../message";

  const ptInstructs = [{ key: "name", title: "Professor Name" }];

  let show, loading;
  let msg = message.error(["no professors...😔"]);

  var data = {};
  var rows = [];

  let getProfessors = async () => {
    loading = true;
    api
      .getProfessors()
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
  getProfessors();
</script>

<svelte:head>
  <title>ITPG - Professors</title>
  <meta name="description" content="Professors" />
</svelte:head>

<h1>Last 100 Added Professors 🧑‍🏫</h1>
{#if !show}
  <PowerTable
    ptData={rows}
    {ptInstructs}
    on:rowClicked={(d) => {
      data = d.detail.data;
      show = !show;
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
{:else}
  <Professor
    {data}
    toggleShowFunc={() => {
      show = !show;
    }}
  />
{/if}
