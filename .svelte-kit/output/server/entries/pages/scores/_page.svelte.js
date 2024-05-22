import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { G as Grade } from "../../../chunks/Grade.js";
import { T as Table } from "../../../chunks/Table.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = { courses: {} } } = $$props;
  let dialog;
  let course = {
    courseCode: "",
    courseName: "",
    profName: "",
    profUUID: ""
  };
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
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<title data-svelte-h="svelte-1ok2jje">ITPG - Scores</title> <h6 class="center-align" data-svelte-h="svelte-r1hxe3">Last 100 Added Scores 📖</h6> ${validate_component(Table, "Table").$$render(
      $$result,
      {
        style: "stripes",
        opts,
        data: data.courses
      },
      {},
      {}
    )} ${validate_component(Grade, "Grade").$$render(
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
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
