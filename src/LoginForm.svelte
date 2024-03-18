<script>
  import { LoginStatus } from "./store.js";
  import { fade } from "svelte/transition";
  import {
    useForm,
    Hint,
    HintGroup,
    validators,
    required,
    emailWithTld,
  } from "svelte-use-form";
  import message from "./message.js";
  import api from "./api.js";
  import Dialog from "./Dialog.svelte";

  export let dialog;

  const form = useForm({ email: {}, password: {} });

  let resetDialog;
  let currentEmail;
  let circleSpinnerLogin;
  let loginMessage = "",
    resetMessage = "";

  let login = async (email, password) => {
    api
      .login(email, password)
      .then(() => {
        $LoginStatus = !$LoginStatus;
        dialog.close();
      })
      .catch((err) => {
        loginMessage = err;
      })
      .finally(() => (circleSpinnerLogin = false));
  };

  let reset = async () => {
    api
      .reset(currentEmail)
      .then(() => {
        resetMessage =
          message.info(["reset link sent to:"]) +
          message.normal([currentEmail + " 📩"]);
      })
      .catch((err) => {
        resetMessage = err;
      });
  };
</script>

<dialog
  bind:this={dialog}
  transition:fade={{ delay: 50, duration: 200 }}
  on:close={() => {
    $form.reset();
    loginMessage = "";
  }}
>
  <div class="dialog-header">
    <p>Login</p>
    <button
      on:click={() => {
        dialog.close();
        loginMessage = "";
      }}>❌</button
    >
  </div>
  <form use:form>
    <label class="embedded ff_default">
      <span class="label-text">
        <span>email</span>
      </span>
      <input
        type="email"
        name="email"
        autocomplete="email"
        use:validators={[emailWithTld, required]}
      />
    </label>

    <HintGroup for="email">
      <Hint on="required">Required field</Hint>
      <Hint on="emailWithTld" hideWhenRequired>Invalid email</Hint>
    </HintGroup>

    <label class="embedded ff_default">
      <span class="label-text">
        <span>password</span>
      </span>
      <input
        type="password"
        name="password"
        autocomplete="current-password"
        use:validators={[required]}
      />
    </label>

    <Hint for="password" on="required">Required field</Hint>

    <button
      type="submit"
      class={circleSpinnerLogin ? "circle-spinner" : ""}
      disabled={!$form.valid}
      on:click|preventDefault={() => {
        circleSpinnerLogin = true;
        loginMessage = "";
        login($form.email?.value, $form.password?.value);
      }}>Submit</button
    >

    <button
      type="submit"
      disabled={!$form.email.valid || $form.valid}
      on:click|preventDefault={() => {
        currentEmail = $form.email?.value;
        reset();
        dialog.close();
        resetDialog.showModal();
      }}>Forgot password ?</button
    >

    {#if loginMessage != ""}
      {@html loginMessage}
    {/if}
  </form>
</dialog>

<Dialog bind:dialog={resetDialog}>
  <section>
    {@html resetMessage}

    <button
      type="submit"
      on:click|preventDefault={() => {
        reset();
      }}>Resend reset link</button
    >
  </section>
</Dialog>

<style>
  section {
    display: flex;
    flex-direction: column;
  }
</style>
