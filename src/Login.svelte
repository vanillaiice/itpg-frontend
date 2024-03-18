<script>
  import { LoginStatus } from "./store.js";
  import { fade } from "svelte/transition";
  import Theme from "./Theme.svelte";
  import LoginForm from "./LoginForm.svelte";
  import RegisterForm from "./RegisterForm.svelte";
  import Dialog from "./Dialog.svelte";
  import api from "./api.js";

  const defaultLogoutText = "Logged in 🧑‍💻";
  let logoutText = defaultLogoutText,
    dialogMessage = "";

  let isLoggedIn = async () => {
    api
      .isLoggedIn()
      .then((response) => {
        if (response) {
          $LoginStatus = true;
        } else {
          $LoginStatus = false;
        }
      })
      .catch(() => {
        $LoginStatus = false;
      });
  };

  let logout = async () => {
    api
      .logout()
      .then(() => {
        isLoggedIn();
      })
      .catch((err) => {
        dialogMessage = err;
        messageDialog.showModal();
      });
  };

  let loginDialog, registerDialog, messageDialog;
</script>

<Dialog bind:dialog={messageDialog}>
  {@html dialogMessage}
</Dialog>

<div id="login">
  <Theme />
  {#if !$LoginStatus}
    <button on:click={() => loginDialog.showModal()}>Login</button>
    <button on:click={() => registerDialog.showModal()}>Register</button>
  {:else}
    <button
      transition:fade={{}}
      on:click={logout}
      on:mouseenter={() => (logoutText = "Logout")}
      on:mouseleave={() => (logoutText = defaultLogoutText)}
      >{logoutText}</button
    >
  {/if}
</div>

<LoginForm bind:dialog={loginDialog} />

<RegisterForm bind:dialog={registerDialog} />

<style>
  #login {
    display: flex;
    flex-direction: row-reverse;
    gap: 10px;
  }
</style>
