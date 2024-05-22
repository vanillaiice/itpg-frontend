import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, v as validate_component } from "./ssr.js";
import { u as useForm, S as Snackbar } from "./Snackbar.js";
const Grade = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $gradeForm, $$unsubscribe_gradeForm;
  let { dialog } = $$props;
  let { course = {
    courseCode: "",
    courseName: "",
    profName: "",
    profUUID: ""
  } } = $$props;
  const gradeForm = useForm({ g1: {}, g2: {}, g3: {} });
  $$unsubscribe_gradeForm = subscribe(gradeForm, (value) => $gradeForm = value);
  let type = "", msg = "";
  if ($$props.dialog === void 0 && $$bindings.dialog && dialog !== void 0)
    $$bindings.dialog(dialog);
  if ($$props.course === void 0 && $$bindings.course && course !== void 0)
    $$bindings.course(course);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<dialog class="modal center middle"${add_attribute("this", dialog, 0)}><form><h6>Grade course: ${escape(course.courseName)} (${escape(course.courseCode)}), by ${escape(course.profName)}</h6> <div class="field label suffix round border"><input type="number" name="g1" autocomplete="off"> <label data-svelte-h="svelte-1ehbite">grade teaching</label> <i data-svelte-h="svelte-18aro3t">grade</i></div> <div class="field label suffix round border"><input type="number" name="g2" autocomplete="off"> <label data-svelte-h="svelte-1vrymj7">grade coursework</label> <i data-svelte-h="svelte-18aro3t">grade</i></div> <div class="field label suffix round border"><input type="number" name="g3" autocomplete="off"> <label data-svelte-h="svelte-1s4miux">grade learning</label> <i data-svelte-h="svelte-18aro3t">grade</i></div> ${``} <nav class="right-align no-space"><button class="transparent link" data-svelte-h="svelte-12tcj3d">Cancel</button> <button class="transparent link" type="submit" ${!$gradeForm.valid ? "disabled" : ""}>${`Confirm`}</button></nav></form></dialog> ${validate_component(Snackbar, "Snackbar").$$render(
      $$result,
      { type, msg },
      {
        type: ($$value) => {
          type = $$value;
          $$settled = false;
        },
        msg: ($$value) => {
          msg = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_gradeForm();
  return $$rendered;
});
export {
  Grade as G
};
