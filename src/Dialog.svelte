<script>
  import { fade } from "svelte/transition";
  export let dialog;
</script>

<dialog
  bind:this={dialog}
  transition:fade={{ delay: 50, duration: 200 }}
  on:close
>
  <div class="dialog-header">
    <p>Message</p>
    <button on:click={() => dialog.close()}>❌</button>
  </div>
  <slot />
</dialog>
