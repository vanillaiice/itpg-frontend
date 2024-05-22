import { c as create_ssr_component, f as createEventDispatcher, b as add_attribute, h as each, e as escape } from "./ssr.js";
const css = {
  code: "td.svelte-1tmy1nv:hover{color:var(--primary);cursor:pointer;font-weight:bold}",
  map: `{"version":3,"file":"Table.svelte","sources":["Table.svelte"],"sourcesContent":["<script>\\n\\timport { createEventDispatcher } from 'svelte';\\n\\n\\texport let style;\\n\\texport let opts = [{ key: '', title: '' }];\\n\\texport let data = [];\\n\\n\\t$: noData = data.length == 0 ? true : false;\\n\\n\\tconst dispatch = createEventDispatcher();\\n\\n\\tconst handleRowClicked = (data) => {\\n\\t\\tdispatch('rowClicked', { data });\\n\\t};\\n<\/script>\\n\\n<table class={style}>\\n\\t{#if !noData}\\n\\t\\t<thead>\\n\\t\\t\\t{#each Object.values(opts) as o}\\n\\t\\t\\t\\t<th>{o.title || o.key}</th>\\n\\t\\t\\t{/each}\\n\\t\\t</thead>\\n\\n\\t\\t<tbody>\\n\\t\\t\\t{#each data as d}\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t{#each Object.values(opts) as o}\\n\\t\\t\\t\\t\\t\\t<td\\n\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\thandleRowClicked(d);\\n\\t\\t\\t\\t\\t\\t\\t}}>{d[o.key]}</td\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</tr>\\n\\t\\t\\t{/each}\\n\\t\\t</tbody>\\n\\t{:else}\\n\\t\\t<slot name=\\"noData\\">\\n\\t\\t\\t<tbody>\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<td class=\\"error\\">\\n\\t\\t\\t\\t\\t\\t<h6 class=\\"center-align\\">No data...</h6>\\n\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t</tr>\\n\\t\\t\\t</tbody>\\n\\t\\t</slot>\\n\\t{/if}\\n</table>\\n\\n<style>\\n\\ttd:hover {\\n\\t\\tcolor: var(--primary);\\n\\t\\tcursor: pointer;\\n\\t\\tfont-weight: bold;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAmDC,iBAAE,MAAO,CACR,KAAK,CAAE,IAAI,SAAS,CAAC,CACrB,MAAM,CAAE,OAAO,CACf,WAAW,CAAE,IACd"}`
};
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let noData;
  let { style } = $$props;
  let { opts = [{ key: "", title: "" }] } = $$props;
  let { data = [] } = $$props;
  createEventDispatcher();
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.opts === void 0 && $$bindings.opts && opts !== void 0)
    $$bindings.opts(opts);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  noData = data.length == 0 ? true : false;
  return `<table${add_attribute("class", style, 0)}>${!noData ? `<thead>${each(Object.values(opts), (o) => {
    return `<th>${escape(o.title || o.key)}</th>`;
  })}</thead> <tbody>${each(data, (d) => {
    return `<tr>${each(Object.values(opts), (o) => {
      return `<td class="svelte-1tmy1nv">${escape(d[o.key])}</td>`;
    })} </tr>`;
  })}</tbody>` : `${slots.noData ? slots.noData({}) : ` <tbody data-svelte-h="svelte-m6pyo0"><tr><td class="error svelte-1tmy1nv"><h6 class="center-align">No data...</h6></td></tr></tbody> `}`} </table>`;
});
export {
  Table as T
};
