<script>
  import { passwordMatch } from "./utils.js";
  import { fade } from "svelte/transition";
  import {
    useForm,
    Hint,
    validators,
    minLength,
    emailWithTld,
    required,
  } from "svelte-use-form";
  import message from "./message.js";
  import api from "./api.js";
  import { LoginStatus } from "./store.js";
  import PasswordStrength from "./PasswordStrength.svelte";

  export let dialog;

  const registerForm = useForm({ email: {}, password: {} }, "register"),
    confirmForm = useForm({ confirmationCode: {} }, "confirm");

  let currentPassword = "";
  let currentPasswordScore;
  let creds = { email: {}, password: {} };
  let registered;
  let registerMessage = "",
    confirmationMessage = "";
  let circleSpinner, circleSpinnerResend;

  let register = async (email, password) => {
    api
      .register(email, password)
      .then(() => {
        creds = { email: email, password: password };
        registered = true;
        confirmationMessage =
          message.info(["confirmation code sent to:"]) +
          message.normal([email + "📩"]);
      })
      .catch((err) => {
        registerMessage = err;
      })
      .finally(() => {
        circleSpinner = false;
      });
  };

  let confirm = async (code) => {
    api
      .confirm(code)
      .then(() => {
        confirmationMessage = message.info(["Registered ✅"]);
        $confirmForm.reset();

        api
          .login(creds.email, creds.password)
          .then(() => {
            $LoginStatus = !$LoginStatus;
            confirmationMessage = message.info(["Logged in ✅"]);
          })
          .catch((err) => {
            confirmationMessage += err;
          });
      })
      .catch((err) => {
        confirmationMessage = err;
      })
      .finally(() => {
        circleSpinner = false;
      });
  };

  let resendCode = async () => {
    api
      .resendCode(creds.email, creds.password)
      .then(() => {
        confirmationMessage = message.info(["confirmation code resent ✅"]);
      })
      .catch((err) => {
        confirmationMessage = err;
      })
      .finally(() => {
        //circleSpinner = false;
        circleSpinnerResend = false;
      });
  };
</script>

<dialog
  bind:this={dialog}
  transition:fade={{ delay: 50, duration: 200 }}
  on:close={() => {
    creds = { email: {}, password: {} };
    registered = false;
    confirmationMessage = "";
    registerMessage = "";
  }}
>
  <div class="dialog-header">
    <p>Register</p>
    <button
      on:click={() => {
        $registerForm.reset();
        $confirmForm.reset();
        dialog.close();
      }}>❌</button
    >
  </div>
  {#if !registered}
    <form use:registerForm>
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

      <Hint on="required" for="email" form="register">Required field</Hint>
      <Hint on="emailWithTld" for="email" form="register" hideWhenRequired
        >Invalid email</Hint
      >
      <label class="embedded ff_default">
        <span class="label-text">
          <span>password</span>
        </span>
        <input
          type="password"
          name="password"
          autocomplete="new-password"
          use:validators={[required]}
          bind:value={currentPassword}
        />
      </label>

      <Hint on="required" for="password" form="register">Required field</Hint>

      <label class="embedded ff_default">
        <span class="label-text">
          <span>confirm password</span>
        </span>
        <input
          type="password"
          name="passwordConfirmation"
          autocomplete="new-password"
          use:validators={[required, passwordMatch]}
        />
      </label>

      <Hint on="required" for="passwordConfirmation" form="register"
        >Required field</Hint
      >
      <Hint
        on="passwordMatch"
        for="passwordConfirmation"
        form="register"
        hideWhenRequired>Passwords do not match</Hint
      >

      <PasswordStrength
        bind:password={currentPassword}
        bind:score={currentPasswordScore}
      />

      <button
        type="submit"
        class={circleSpinner ? "circle-spinner" : ""}
        disabled={!$registerForm.valid || currentPasswordScore < 3}
        on:click|preventDefault={() => {
          circleSpinner = true;
          registerMessage = "";
          register($registerForm.email?.value, $registerForm.password?.value);
        }}>Submit</button
      >

      {#if registerMessage != ""}
        {@html registerMessage}
      {/if}
    </form>
  {:else}
    <form use:confirmForm>
      <label class="embedded ff_default">
        <span class="label-text">
          <span>confirmation code</span>
        </span>
        <input
          type="text"
          name="confirmationCode"
          autocomplete="one-time-code"
          use:validators={[minLength(8), required]}
        />
      </label>

      <Hint on="required" for="confirmationCode" form="confirm"
        >Required field</Hint
      >
      <Hint
        on="minLength"
        for="confirmationCode"
        form="confirm"
        let:value
        hideWhenRequired
      >
        <p>The confirmation code requires exactly {value} characters.</p>
      </Hint>

      <button
        type="submit"
        class={circleSpinner ? "circle-spinner" : ""}
        disabled={!$confirmForm.valid}
        on:click|preventDefault={() => {
          circleSpinner = true;
          confirmationMessage = "";
          confirm($confirmForm.confirmationCode?.value);
        }}>Submit</button
      >

      <button
        type="submit"
        class={circleSpinnerResend ? "circle-spinner" : ""}
        on:click|preventDefault={() => {
          circleSpinnerResend = true;
          confirmationMessage = "";
          resendCode();
        }}>Resend Code</button
      >

      {#if confirmationMessage != ""}
        {@html confirmationMessage}
      {/if}
    </form>
  {/if}
</dialog>
