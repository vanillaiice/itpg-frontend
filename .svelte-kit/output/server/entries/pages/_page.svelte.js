import { c as create_ssr_component, a as subscribe, d as set_store_value, b as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { u as useForm, S as Snackbar } from "../../chunks/Snackbar.js";
import { G as Grade } from "../../chunks/Grade.js";
import { T as Table } from "../../chunks/Table.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $searchForm, $$unsubscribe_searchForm;
  const searchForm = useForm({ searchOption: {}, searchTerm: {} });
  $$unsubscribe_searchForm = subscribe(searchForm, (value) => $searchForm = value);
  const searchOptions = {
    courseCode: "course code",
    courseName: "course name",
    profName: "professor name"
  };
  let course = {
    courseCode: "",
    courseName: "",
    profName: "",
    profUUID: ""
  };
  let searchOption = searchOptions.profName, searchTerm = "", msg = "";
  let dialog;
  var data = [];
  const opts = [
    { key: "courseCode", title: "Code" },
    { key: "courseName", title: "Name" },
    { key: "profName", title: "Professor" },
    { key: "scoreTeaching", title: "Teaching" },
    {
      key: "scoreCoursework",
      title: "Coursework"
    },
    { key: "scoreLearning", title: "Learning" },
    { key: "scoreAverage", title: "Average" }
  ];
  set_store_value(searchForm, $searchForm.searchOption.value = searchOptions.profName, $searchForm);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<title data-svelte-h="svelte-11di0q6">ITPG - Home</title> <h6 class="center-align" data-svelte-h="svelte-sdfixb">Search and Grade your Courses 🔍✍️</h6> <form><div class="field suffix round fill border small"><select name="searchOption"><option value="" data-svelte-h="svelte-r8s4nu">--Select Search Type--</option><option${add_attribute("value", searchOptions.courseCode, 0)}>Course Code</option><option${add_attribute("value", searchOptions.courseName, 0)}>Course Name</option><option${add_attribute("value", searchOptions.profName, 0)}>Professor Name</option></select> <i data-svelte-h="svelte-1bv0s5u">arrow_drop_down</i></div> <div class="grid"><div class="field label border round fill small s8 m10 l10"><input name="searchTerm" type="search" autocomplete="off"${add_attribute("value", searchTerm, 0)}> <label>${escape(searchOption)}</label></div> <div class="s4 m2 l2"><button type="submit" class="transparent round fill" ${!$searchForm.valid ? "disabled" : ""}>${`<i data-svelte-h="svelte-g8sfnw">search</i>`}</button></div></div></form> ${data.length != 0 && searchOption != "" ? `${validate_component(Table, "Table").$$render($$result, { style: "stripes", opts, data }, {}, {})} ${validate_component(Grade, "Grade").$$render(
      $$result,
      { dialog, course },
      {
        dialog: ($$value) => {
          dialog = $$value;
          $$settled = false;
        },
        course: ($$value) => {
          course = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `<div class="center-align middle-align padding"><img${add_attribute("src", "/itpg-logo.png", 0)} alt="itpg logo"></div>`} ${validate_component(Snackbar, "Snackbar").$$render(
      $$result,
      { type: "error", timeout: 3e3, msg },
      {
        msg: ($$value) => {
          msg = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_searchForm();
  return $$rendered;
});
export {
  Page as default
};
