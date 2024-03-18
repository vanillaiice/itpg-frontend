<script>
  import { useForm, Hint, validators, required } from "svelte-use-form";
  import { passwordMatch, typeDelete } from "../utils.js";
  import api from "../api.js";
  import { LoginStatus } from "../store.js";
  import message from "../message.js";
  import PasswordStrength from "../PasswordStrength.svelte";

  const changePasswordForm = useForm(
      { currentPassword: {}, password: {} },
      "change",
    ),
    deleteAccountForm = useForm({ email: {}, password: {} }, "delete");

  const selections = { changePassword: 0, deleteAccount: 1 };

  let currentSelection = selections.changePassword;
  let currentPassword = "";
  let currentPasswordScore;
  let msg = "";
  let circleSpinnerChangePass, circleSpinnerDelete;
</script>

<svelte:head>
  <title>ITPG - Dashboard</title>
  <meta name="description" content="ITPG" />
</svelte:head>

{#if $LoginStatus}
  <div>
    <section id="dashboard-options">
      <button
        on:click={() => {
          currentSelection = selections.changePassword;
        }}>Change Password</button
      >
      <button
        on:click={() => {
          currentSelection = selections.deleteAccount;
        }}>Delete Account</button
      >
    </section>
    <section>
      {#if currentSelection == selections.changePassword}
        <h1 style="text-align: center;">Change your password</h1>
        <form use:changePasswordForm>
          <label class="embedded ff_default">
            <span class="label-text">
              <span>current password</span>
            </span>
            <input
              type="password"
              name="currentPassword"
              autocomplete="current-password"
              use:validators={[required]}
            />
          </label>

          <Hint form="change" for="currentPassword" on="required"
            >Required field</Hint
          >

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

          <Hint form="change" for="password" on="required">Required field</Hint>

          <label class="embedded ff_default">
            <span class="label-text">
              <span>confirm password</span>
            </span>
            <input
              type="password"
              name="newPasswordConfirmation"
              use:validators={[required, passwordMatch]}
            />
          </label>

          <Hint form="change" for="newPasswordConfirmation" on="required"
            >Required field</Hint
          >
          <Hint
            form="change"
            for="newPasswordConfirmation"
            on="passwordMatch"
            hideWhenRequired>Passwords do not match</Hint
          >

          <PasswordStrength
            bind:password={currentPassword}
            bind:score={currentPasswordScore}
          />

          <button
            type="submit"
            class={circleSpinnerChangePass ? "circle-spinner" : ""}
            disabled={!$changePasswordForm.valid || currentPasswordScore < 3}
            on:click|preventDefault={() => {
              circleSpinnerChangePass = true;
              api
                .changePassword(
                  $changePasswordForm.currentPassword.value,
                  $changePasswordForm.password.value,
                )
                .then(() => {
                  msg = message.info(["password changed ✅"]);
                })
                .catch((err) => {
                  msg = err;
                })
                .finally(() => {
                  circleSpinnerChangePass = false;
                });
            }}>Change</button
          >

          {#if msg.length > 0}
            {@html msg}
          {/if}
        </form>
      {:else}
        <h1 style="text-align: center;">Delete your account 😿</h1>
        <form use:deleteAccountForm>
          <label class="embedded ff_default">
            <span class="label-text">
              <span>email</span>
            </span>
            <input
              type="email"
              name="email"
              autocomplete="email"
              use:validators={[required]}
            />
          </label>

          <Hint form="delete" for="currentPassword" on="required"
            >Required field</Hint
          >

          <label class="embedded ff_default">
            <span class="label-text">
              <span>password</span>
            </span>
            <input
              type="password"
              name="password"
              autocomplete="current-password"
              use:validators={[required]}
              bind:value={currentPassword}
            />
          </label>

          <Hint form="delete" for="password" on="required">Required field</Hint>

          <label class="embedded ff_default">
            <span class="label-text">
              <span>confirm delete</span>
            </span>
            <input
              type="text"
              name="confirm"
              placeholder="please type: 'delete'"
              autocomplete="off"
              use:validators={[required, typeDelete]}
            />
          </label>

          <Hint form="delete" for="confirm" on="required">Required field</Hint>
          <Hint form="delete" for="confirm" on="typeDelete" hideWhenRequired
            >Please type 'delete' to confirm your account deletion</Hint
          >

          <button
            type="submit"
            class={circleSpinnerDelete ? "circle-spinner" : ""}
            disabled={!$deleteAccountForm.valid}
            on:click|preventDefault={() => {
              circleSpinnerDelete = true;
              api
                .deleteAccount(
                  $deleteAccountForm.email.value,
                  $deleteAccountForm.password.value,
                )
                .then(() => {
                  msg = message.info([
                    "account deleted...",
                    "it was good knowing you 🥲",
                  ]);
                })
                .catch((err) => {
                  msg = err;
                })
                .finally(() => {
                  circleSpinnerDelete = false;
                });
            }}>Delete</button
          >

          {#if msg.length > 0}
            {@html msg}
          {/if}
        </form>
      {/if}
    </section>
  </div>
{:else}
  <h1 class="error-message">Not logged in...😔</h1>
{/if}

<style>
  div {
    display: grid;
    grid-template-rows: 20% auto;
  }

  #dashboard-options {
    display: flex;
    gap: 10px;
  }

  #dashboard-options button {
    width: 100%;
  }

  button {
    width: 30%;
  }
</style>
