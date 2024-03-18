<script>
  import Dialog from "./Dialog.svelte";
  import api from "./api";
  import message from "./message";
  import { LoginStatus, NavigatorOnline } from "./store";

  let dialog;
  let dialogMessage;

  $NavigatorOnline = navigator.onLine;
  window.addEventListener("offline", () => {
    $NavigatorOnline = false;
    dialogMessage =
      "<p class='error-message'>not connected to the internet...😔</p>";
    dialog.showModal();
  });
  window.addEventListener("online", () => {
    $NavigatorOnline = true;
    dialogMessage =
      "<p class='error-info'>reconnected to the internet...😀</p>";
    dialog.showModal();
  });

  let apiPing = true;
  let ping = async () => {
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
        apiPing = false;
        dialogMessage = message.error(["could not connect to the API...😔"]);
        dialog.showModal();
      });
  };
  ping();

  if ($LoginStatus) {
    api.refreshCookie().catch((err) => {
      dialogMessage = message.error([err]);
      dialog.showModal();
    });
  }
</script>

<Dialog bind:dialog>
  {@html dialogMessage}
</Dialog>
