import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { T as Table } from "../../../chunks/Table.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = { courses: {} } } = $$props;
  let opts = [{ key: "code", title: "Code" }, { key: "name", title: "Name" }];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<title data-svelte-h="svelte-h16523">ITPG - Courses</title> <h6 class="center-align" data-svelte-h="svelte-11yybto">Last 100 Added Courses 📚</h6> ${`${validate_component(Table, "Table").$$render(
      $$result,
      {
        style: "stripes",
        opts,
        data: data.courses
      },
      {},
      {}
    )}`}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
