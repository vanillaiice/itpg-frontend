<script>
  import "@muonw/powertable/styles/power-table.scss";
  import "@muonw/powertable/styles/power-table-mascara.scss";
  import Router from "svelte-spa-router";
  import Home from "./routes/Home.svelte";
  import Courses from "./routes/Courses.svelte";
  import Professors from "./routes/Professors.svelte";
  import Scores from "./routes/Scores.svelte";
  import NotFound from "./routes/NotFound.svelte";
  import Header from "./Header.svelte";
  import Login from "./Login.svelte";
  import PrivacyPolicy from "./routes/PrivacyPolicy.svelte";
  import Contact from "./routes/Contact.svelte";
  import About from "./routes/About.svelte";
  import Disclaimer from "./routes/Disclaimer.svelte";
  import NetworkStatus from "./NetworkStatus.svelte";
  import ChangePassword from "./routes/ChangePassword.svelte";
  import Dashboard from "./routes/Dashboard.svelte";

  const routes = {
    "/": Home,
    "/courses": Courses,
    "/professors": Professors,
    "/scores": Scores,
    "/privacy": PrivacyPolicy,
    "/contact": Contact,
    "/about": About,
    "/disclaimer": Disclaimer,
    "/dashboard": Dashboard,
    "/changepass": ChangePassword,
    "*": NotFound,
  };
</script>

<div id="main">
  <div class="top">
    <i><b>I</b>s <b>T</b>his <b>P</b>rofessor <b>G</b>ood 🤔 ?</i>
    <Login />
  </div>

  <Header />

  <Router {routes} />

  <main>
    <slot />
  </main>

  <NetworkStatus />

  <footer>
    <section>
      <a href="/#/about">about</a> |
      <a href="/#/contact">contact</a> |
      <a href="/#/privacy">privacy</a> |
      <a href="/#/disclaimer">disclaimer</a>
    </section>
    <section>
      <a href="https://github.com/vanillaiice" target="_blank"
        >&copy; 2024 vanillaiice 🍦</a
      >
      |
      <a href="https://twitter.com/_itpg" target="_blank">🐦</a>
    </section>
  </footer>
</div>

<style>
  #main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .top {
    display: grid;
    grid-template-columns: 50% auto;
    align-items: center;
  }

  .top i {
    margin: 0;
  }

  .top i:hover b {
    transition: color 0.2s linear;
    color: orangered;
    cursor: default;
    text-decoration: underline;
  }

  main {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
  }

  footer {
    text-align: center;
    padding: 10px;
  }

  a {
    color: var(--colors-body);
  }

  footer > section > a:hover {
    transition: color 0.2s linear;
    color: orangered;
  }

  footer > section {
    margin: 5px;
  }
</style>
