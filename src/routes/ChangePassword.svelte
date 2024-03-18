<script>
  import { querystring } from "svelte-spa-router";
  import { passwordMatch } from "../utils.js";
  import { onMount } from "svelte";
  import {
    useForm,
    Hint,
    HintGroup,
    validators,
    required,
    emailWithTld,
  } from "svelte-use-form";
  import message from "../message.js";
  import api from "../api.js";
  import PasswordStrength from "../PasswordStrength.svelte";
  import { LoginStatus } from "../store.js";

  let currentPassword = "";
  let currentPasswordScore;
  let circleSpinner;
  let hasResetCode;
  let resetCode = "",
    msg = "";
  onMount(() => {
    const url = new URLSearchParams($querystring);
    resetCode = url.get("code") || "";
    hasResetCode = resetCode.length > 0;
    msg = hasResetCode ? "" : message.error(["Reset code not provided"]);
  });

  const form = useForm({ email: {}, password: {} });

  let changePass = async (email, password) => {
    api
      .changePasswordReset(email, password, resetCode)
      .then(() => {
        msg = message.info(["Password reset ✅"]);
        $form.reset();

        api
          .login(email, password)
          .then(() => {
            msg = message.info(["Logged in ✅"]);
            $LoginStatus = true;
          })
          .catch((err) => {
            msg += message.error([err]);
          });
      })
      .catch((err) => {
        msg = err;
      })
      .finally(() => {
        circleSpinner = false;
      });
  };
</script>

<svelte:head>
  <title>ITPG - Reset Password</title>
  <meta name="description" content="ITPG" />
</svelte:head>

<h1 style="text-align: center;">Reset Account Password</h1>
{#if hasResetCode}
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
        <span>new password</span>
      </span>
      <input
        type="password"
        name="password"
        autocomplete="new-password"
        use:validators={[required]}
        bind:value={currentPassword}
      />
    </label>

    <Hint for="password" on="required">Required field</Hint>

    <label class="embedded ff_default">
      <span class="label-text">
        <span>confirm password</span>
      </span>
      <input
        type="password"
        name="passwordConfirmation"
        use:validators={[required, passwordMatch]}
      />
    </label>

    <HintGroup for="passwordConfirmation">
      <Hint on="required">Required field</Hint>
      <Hint on="passwordMatch" hideWhenRequired>Passwords do not match</Hint>
    </HintGroup>

    <PasswordStrength
      bind:password={currentPassword}
      bind:score={currentPasswordScore}
    />

    <button
      type="submit"
      class={circleSpinner ? "circle-spinner" : ""}
      disabled={!$form.valid || currentPasswordScore < 3}
      on:click|preventDefault={() => {
        circleSpinner = true;
        msg = "";
        changePass($form.email?.value, $form.password?.value);
      }}>Reset</button
    >

    {#if msg != ""}
      {@html msg}
    {/if}
  </form>
{:else}
  {@html msg}
{/if}

<style>
  button {
    width: 30%;
  }
</style>
