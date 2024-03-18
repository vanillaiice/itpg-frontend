<script>
  import { LoginStatus } from "./store.js";
  import {
    useForm,
    Hint,
    HintGroup,
    validators,
    required,
  } from "svelte-use-form";
  import { fade } from "svelte/transition";
  import message from "./message.js";
  import { validGrade } from "./utils.js";
  import api from "./api.js";

  export let callbackFunc = () => {};
  export let data;
  export let dialog;

  const form = useForm();

  let gradeMessage = "";
  let circleSpinner;

  let grade = async (f) => {
    if (!$LoginStatus) {
      circleSpinner = false;
      gradeMessage = message.error(["not registered or logged in"]);
      return;
    }

    api
      .grade(
        data.courseCode,
        data.profUUID,
        f.gradeTeaching._value,
        f.gradeCoursework._value,
        f.gradeLearning._value,
      )
      .then(() => {
        gradeMessage = message.info(["Graded Course ✅"]);
      })
      .catch((err) => {
        gradeMessage = message.error([err]);
      })
      .finally(() => {
        $form.reset();
        circleSpinner = false;
      });
  };
</script>

<dialog
  bind:this={dialog}
  transition:fade={{ delay: 50, duration: 200 }}
  on:close={() => {
    gradeMessage = "";
    callbackFunc();
  }}
>
  <div class="dialog-header">
    <p>
      Grading Course <strong class="title-info">{data.courseCode}</strong> by
      <strong class="title-info">{data.profName}</strong>
    </p>
    <button on:click={() => dialog.close()}>❌</button>
  </div>
  <form use:form>
    <label class="embedded ff_default">
      <span class="label-text">
        <span>grade teaching</span>
      </span>
      <input
        type="number"
        min="0"
        max="5"
        name="gradeTeaching"
        autocomplete="off"
        use:validators={[required, validGrade]}
      />
    </label>

    <HintGroup for="gradeTeaching">
      <Hint on="required">Required field</Hint>
      <Hint on="validGrade">grade must be a number between 0 and 5</Hint>
    </HintGroup>

    <label class="embedded ff_default">
      <span class="label-text">
        <span>grade coursework</span>
      </span>
      <input
        type="number"
        min="0"
        max="5"
        name="gradeCoursework"
        autocomplete="off"
        use:validators={[required, validGrade]}
      />
    </label>

    <HintGroup for="gradeCoursework">
      <Hint on="required">Required field</Hint>
      <Hint on="validGrade">grade must be a number between 0 and 5</Hint>
    </HintGroup>

    <label class="embedded ff_default">
      <span class="label-text">
        <span>grade learning</span>
      </span>
      <input
        type="number"
        min="0"
        max="5"
        name="gradeLearning"
        autocomplete="off"
        use:validators={[required, validGrade]}
      />
    </label>

    <HintGroup for="gradeLearning">
      <Hint on="required">Required field</Hint>
      <Hint on="validGrade">grade must be a number between 0 and 5</Hint>
    </HintGroup>

    <button
      class={circleSpinner ? "circle-spinner" : ""}
      disabled={!$form.valid}
      on:click|preventDefault={() => {
        circleSpinner = true;
        gradeMessage = "";
        grade($form);
      }}>Grade</button
    >

    {#if gradeMessage != ""}
      {@html gradeMessage}
    {/if}
  </form>
</dialog>
