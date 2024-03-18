<script>
  import { LoginStatus } from "./store.js";
</script>

<header>
  <nav>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/#/courses">Courses</a>
      </li>
      <li>
        <a href="/#/professors">Professors</a>
      </li>
      <li>
        <a href="/#/scores">Scores</a>
      </li>
      {#if $LoginStatus}
        <li>
          <a href="/#/dashboard">Dashboard</a>
        </li>
      {/if}
    </ul>
  </nav>
</header>

<style>
	header {
		margin: 5px 0 10px 0;
	}

  nav {
    display: flex;
    justify-content: center;
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: max-content;
		justify-content: center;
    display: flex;
		flex-wrap: wrap;
    list-style: none;
  }

  li {
    position: relative;
    height: 100%;
    font-size: 1rem;
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 0.5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
    color: var(--colors-body);
  }

  a:hover {
    color: orangered;
    text-decoration: underline;
  }
</style>
