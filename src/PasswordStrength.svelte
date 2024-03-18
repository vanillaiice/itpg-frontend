<script>
  import z from "zxcvbn";

  export let password = "";
  export let score = 0;

  $: score = z(password).score;
</script>

<small>Password strength</small>
<meter value={score} low="1.9" high="2.9" optimum="4" max="4" />
