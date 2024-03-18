<script>
  const dataColorScheme = "data-color-scheme",
    dark = "dark",
    light = "light";
  let theme;

  let localStorageSetTheme = (th) => {
    localStorage.setItem(dataColorScheme, th);
  };

  let localStorageGetTheme = () => {
    return localStorage.getItem(dataColorScheme);
  };

  let getTheme = () => {
    let th = localStorageGetTheme();
    let hasTheme = th != null ? true : false;

    if (hasTheme) {
      return th;
    } else {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        return dark;
      } else {
        localStorageSetTheme(light);
        return light;
      }
    }
  };

  let switchTheme = (th) => {
    document.firstElementChild.setAttribute(dataColorScheme, th);
    localStorageSetTheme(th);
    theme = th;
  };

  theme = getTheme();
  switchTheme(theme);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      switchTheme(event.matches ? dark : light);
    });
</script>

<div>
  <button
    on:click={() => {
      let th = theme == dark ? light : dark;
      switchTheme(th);
    }}
  >
    {#if theme == dark}
      ☀️
    {:else}
      🌑
    {/if}
  </button>
</div>

<style>
  div {
    display: flex;
    align-items: center;
  }
</style>
