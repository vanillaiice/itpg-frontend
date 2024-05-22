import { c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component, d as set_store_value } from "../../chunks/ssr.js";
import "beercss";
import { a as api } from "../../chunks/api.js";
import { L as LoginStatus } from "../../chunks/store.js";
import { u as useForm, S as Snackbar } from "../../chunks/Snackbar.js";
import { P as PasswordMeter } from "../../chunks/PasswordMeter.js";
const ResetPassword = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $resetPasswordForm, $$unsubscribe_resetPasswordForm;
  let { dialog } = $$props;
  let msg = "";
  const resetPasswordForm = useForm({ email: {} });
  $$unsubscribe_resetPasswordForm = subscribe(resetPasswordForm, (value) => $resetPasswordForm = value);
  if ($$props.dialog === void 0 && $$bindings.dialog && dialog !== void 0)
    $$bindings.dialog(dialog);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<dialog class="modal center middle"${add_attribute("this", dialog, 0)}><h5 data-svelte-h="svelte-9i7m6w">Reset Password</h5> <div class="small-space"></div> <form><div class="field label suffix round border"><input type="email" name="email" autocomplete="username"> <label data-svelte-h="svelte-1e3qw5k">email</label> <i data-svelte-h="svelte-k2q616">email</i></div> ${``} <nav class="right-align no-space"><button class="transparent link" data-svelte-h="svelte-16yk0wp">Cancel</button> <button class="transparent link" type="submit" ${!$resetPasswordForm.valid ? "disabled" : ""}>Confirm</button></nav></form></dialog> ${validate_component(Snackbar, "Snackbar").$$render(
      $$result,
      { type: "primary", msg },
      {
        msg: ($$value) => {
          msg = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_resetPasswordForm();
  return $$rendered;
});
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_LoginStatus;
  let $loginForm, $$unsubscribe_loginForm;
  $$unsubscribe_LoginStatus = subscribe(LoginStatus, (value) => value);
  let { dialog } = $$props;
  const loginForm = useForm({ email: {}, password: {} });
  $$unsubscribe_loginForm = subscribe(loginForm, (value) => $loginForm = value);
  let resetPasswordDialog;
  if ($$props.dialog === void 0 && $$bindings.dialog && dialog !== void 0)
    $$bindings.dialog(dialog);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<dialog class="modal center middle"${add_attribute("this", dialog, 0)}><h5 data-svelte-h="svelte-1vyibn5">Login</h5> <div class="small-space"></div> <form><div class="field label suffix round border"><input type="email" name="email" autocomplete="username"> <label data-svelte-h="svelte-1e3qw5k">email</label> <i data-svelte-h="svelte-k2q616">email</i></div> <div class="field label suffix round border"><input type="password" name="password" autocomplete="current-password"> <label data-svelte-h="svelte-kcc32r">password</label> <i data-svelte-h="svelte-1bcfmfs">visibility</i></div> <button class="small secondary transparent underline" data-svelte-h="svelte-1gsttbg">Forgot password ?</button> ${``} <nav class="right-align no-space"><button class="transparent link" data-svelte-h="svelte-gt1ofs">Cancel</button> <button class="transparent link" ${!$loginForm.valid ? "disabled" : ""} type="submit">${`Confirm`}</button></nav></form></dialog> ${validate_component(ResetPassword, "ResetPassword").$$render(
      $$result,
      { dialog: resetPasswordDialog },
      {
        dialog: ($$value) => {
          resetPasswordDialog = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_LoginStatus();
  $$unsubscribe_loginForm();
  return $$rendered;
});
const Signup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $signupForm, $$unsubscribe_signupForm;
  let $$unsubscribe_LoginStatus;
  let $confirmForm, $$unsubscribe_confirmForm;
  $$unsubscribe_LoginStatus = subscribe(LoginStatus, (value) => value);
  let { dialog } = $$props;
  const signupForm = useForm({ email: {}, password: {} }, "signup");
  $$unsubscribe_signupForm = subscribe(signupForm, (value) => $signupForm = value);
  const confirmForm = useForm({ code: {} }, "confirm");
  $$unsubscribe_confirmForm = subscribe(confirmForm, (value) => $confirmForm = value);
  let confirmDialog;
  let password = "", score = 0;
  let snackbarType = "", snackbarMsg = "";
  if ($$props.dialog === void 0 && $$bindings.dialog && dialog !== void 0)
    $$bindings.dialog(dialog);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<dialog class="modal center middle"${add_attribute("this", dialog, 0)}><h5 data-svelte-h="svelte-6cxnz4">Signup</h5> <div class="small-space"></div> <form><div class="field label suffix round border"><input type="email" name="email" autocomplete="email"> <label data-svelte-h="svelte-1e3qw5k">email</label> <i data-svelte-h="svelte-k2q616">email</i></div> <div class="field label suffix round border"><input type="password" name="password" autocomplete="new-password"${add_attribute("value", password, 0)}> <label data-svelte-h="svelte-kcc32r">password</label> <i data-svelte-h="svelte-1bcfmfs">visibility</i></div> <div class="field label suffix round border"><input type="password" name="confirmPassword" autocomplete="new-password"> <label data-svelte-h="svelte-aj97ft">confirm password</label> <i data-svelte-h="svelte-1bcfmfs">visibility</i></div> ${validate_component(PasswordMeter, "PasswordMeter").$$render(
      $$result,
      { password, score },
      {
        password: ($$value) => {
          password = $$value;
          $$settled = false;
        },
        score: ($$value) => {
          score = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${``} <nav class="right-align no-space"><button class="transparent link" data-svelte-h="svelte-1a6oxb8">Cancel</button> <button class="transparent link" ${!$signupForm.valid || !(score >= 3) ? "disabled" : ""}>${`Confirm`}</button></nav></form></dialog> <dialog class="modal center middle"${add_attribute("this", confirmDialog, 0)}><h5 data-svelte-h="svelte-sliufq">Confirm</h5> <div class="small-space"></div> <form><div class="field label suffix round border"><input type="text" name="code" autocomplete="off"> <label data-svelte-h="svelte-87ysgm">confirmation code</label> <i data-svelte-h="svelte-1fzkmqf">code</i></div> <button class="responsive" data-svelte-h="svelte-1cw9q24">Resend</button> ${``} <nav class="right-align no-space"><button class="transparent link" data-svelte-h="svelte-fx6v3l">Cancel</button> <button type="submit" class="transparent link" ${!$confirmForm.valid ? "disabled" : ""}>${`Confirm`}</button></nav></form></dialog> ${validate_component(Snackbar, "Snackbar").$$render(
      $$result,
      { type: snackbarType, msg: snackbarMsg },
      {
        type: ($$value) => {
          snackbarType = $$value;
          $$settled = false;
        },
        msg: ($$value) => {
          snackbarMsg = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_signupForm();
  $$unsubscribe_LoginStatus();
  $$unsubscribe_confirmForm();
  return $$rendered;
});
const css = {
  code: "#home.svelte-xdwcoc:hover{color:var(--primary);cursor:pointer;transition:linear 0.2s color}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\n\\timport 'beercss';\\n\\timport api from '$lib/api';\\n\\timport { LoginStatus } from '$lib/store';\\n\\timport Login from '$lib/components/Login.svelte';\\n\\timport Signup from '$lib/components/Signup.svelte';\\n\\timport Snackbar from '$lib/components/Snackbar.svelte';\\n\\n\\tlet loginDialog, signupDialog;\\n\\tlet showLogout;\\n\\tlet type = '',\\n\\t\\tmsg = '';\\n\\n\\tlet themeDark = localStorage.getItem('theme') == 'dark' ? true : false;\\n\\n\\tconst setTheme = (theme) => {\\n\\t\\tlocalStorage.setItem('theme', theme);\\n\\t\\tdocument.body.className = theme;\\n\\t};\\n\\n\\tconst toggleTheme = () => {\\n\\t\\tlet current_theme = document.body.className;\\n\\t\\tconst theme = current_theme === 'light' ? 'dark' : 'light';\\n\\t\\tthemeDark = theme == 'dark' ? true : false;\\n\\t\\tsetTheme(theme);\\n\\t};\\n\\n\\tconst isLoggedIn = async () => {\\n\\t\\tapi\\n\\t\\t\\t.isLoggedIn()\\n\\t\\t\\t.then((r) => {\\n\\t\\t\\t\\tif (r) {\\n\\t\\t\\t\\t\\t$LoginStatus = true;\\n\\t\\t\\t\\t\\ttype = 'primary';\\n\\t\\t\\t\\t\\tmsg = 'logged in';\\n\\t\\t\\t\\t} else {\\n\\t\\t\\t\\t\\t$LoginStatus = false;\\n\\t\\t\\t\\t}\\n\\t\\t\\t})\\n\\t\\t\\t.catch(() => {\\n\\t\\t\\t\\t$LoginStatus = false;\\n\\t\\t\\t});\\n\\t};\\n\\n\\tconst logout = async () => {\\n\\t\\tapi\\n\\t\\t\\t.logout()\\n\\t\\t\\t.then(async () => {\\n\\t\\t\\t\\tawait isLoggedIn();\\n\\t\\t\\t\\ttype = 'primary';\\n\\t\\t\\t\\tmsg = 'logged out';\\n\\t\\t\\t})\\n\\t\\t\\t.catch((e) => {\\n\\t\\t\\t\\ttype = 'error';\\n\\t\\t\\t\\tmsg = e;\\n\\t\\t\\t});\\n\\t};\\n\\n\\tisLoggedIn();\\n<\/script>\\n\\n<div class=\\"max\\">\\n\\t<header class=\\"fill\\">\\n\\t\\t<nav>\\n\\t\\t\\t<button class=\\"circle transparent\\">\\n\\t\\t\\t\\t<i>menu</i>\\n\\t\\t\\t\\t<menu class=\\"no-wrap\\">\\n\\t\\t\\t\\t\\t<a href=\\"/\\">Home</a>\\n\\t\\t\\t\\t\\t<a href=\\"/courses\\">Courses</a>\\n\\t\\t\\t\\t\\t<a href=\\"/professors\\">Professors</a>\\n\\t\\t\\t\\t\\t<a href=\\"/scores\\">Scores</a>\\n\\t\\t\\t\\t\\t{#if $LoginStatus}\\n\\t\\t\\t\\t\\t\\t<a href=\\"/dashboard\\">Dashboard</a>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</menu>\\n\\t\\t\\t</button>\\n\\n\\t\\t\\t<div class=\\"max\\"></div>\\n\\n\\t\\t\\t{#if !$LoginStatus}\\n\\t\\t\\t\\t<nav class=\\"no-space\\">\\n\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\tclass=\\"border left-round small max\\"\\n\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\tsignupDialog.showModal();\\n\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t<span>Signup</span>\\n\\t\\t\\t\\t\\t\\t<i>person_add</i>\\n\\t\\t\\t\\t\\t</button>\\n\\n\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\tclass=\\"border right-round small max\\"\\n\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\tloginDialog.showModal();\\n\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t<span>Login</span>\\n\\t\\t\\t\\t\\t\\t<i>login</i>\\n\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t</nav>\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"border small\\"\\n\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\tlogout();\\n\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\ton:mouseleave={() => {\\n\\t\\t\\t\\t\\t\\tshowLogout = false;\\n\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\ton:mouseenter={() => {\\n\\t\\t\\t\\t\\t\\tshowLogout = true;\\n\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t{#if showLogout}\\n\\t\\t\\t\\t\\t\\t<span>Logout</span>\\n\\t\\t\\t\\t\\t\\t<i>logout</i>\\n\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\tSigned in\\n\\t\\t\\t\\t\\t\\t<i>sync_saved_locally</i>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t{/if}\\n\\n\\t\\t\\t<button class=\\"transparent small circle\\" on:click={toggleTheme}>\\n\\t\\t\\t\\t{#if themeDark}\\n\\t\\t\\t\\t\\t<i>light_mode</i>\\n\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t<i>dark_mode</i>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</button>\\n\\t\\t</nav>\\n\\n\\t\\t<div class=\\"small-space\\"></div>\\n\\n\\t\\t<h5 class=\\"small-padding\\"><a href=\\"/\\" id=\\"home\\">Is this professor good ?</a></h5>\\n\\t</header>\\n\\n\\t<Login bind:dialog={loginDialog} />\\n\\n\\t<Signup bind:dialog={signupDialog} />\\n\\n\\t<main class=\\"responsive max padding\\">\\n\\t\\t<slot />\\n\\t</main>\\n\\n\\t<Snackbar bind:type bind:msg />\\n\\n\\t<footer class=\\"fill fixed padding\\">\\n\\t\\t<section class=\\"center-align\\">\\n\\t\\t\\t<a class=\\"no-margin center-align\\" href=\\"/about\\">about</a>\\n\\t\\t\\t~\\n\\t\\t\\t<a class=\\"no-margin center-align\\" href=\\"/contact\\">contact</a>\\n\\t\\t\\t~\\n\\t\\t\\t<a class=\\"no-margin center-align\\" href=\\"/privacy\\">privacy</a>\\n\\t\\t\\t~\\n\\t\\t\\t<a class=\\"no-margin center-align\\" href=\\"/disclaimer\\">disclaimer</a>\\n\\t\\t</section>\\n\\n\\t\\t<section class=\\"center-align\\">\\n\\t\\t\\t<a class=\\"no-margin center-align link\\" href=\\"https://github.com/vanillaiice\\" target=\\"_blank\\"\\n\\t\\t\\t\\t>&copy; 2024 🍦 vanillaiice</a\\n\\t\\t\\t>\\n\\t\\t\\t~ made with\\n\\t\\t\\t<a class=\\"no-margin center-align link\\" href=\\"https://beercss.com\\" target=\\"_blank\\">\\n\\t\\t\\t\\tbeercss\\n\\t\\t\\t</a>\\n\\t\\t\\t&amp;\\n\\t\\t\\t<a class=\\"button circle transparent no-margin\\" href=\\"https://kit.svelte.dev/\\" target=\\"_blank\\">\\n\\t\\t\\t\\t<img class=\\"tiny\\" src=\\"/svelte-logo.svg\\" alt=\\"sveltejs Logo\\" />\\n\\t\\t\\t</a>\\n\\t\\t</section>\\n\\n\\t\\t<section class=\\"center-align\\">\\n\\t\\t\\t<a\\n\\t\\t\\t\\tclass=\\"button circle transparent\\"\\n\\t\\t\\t\\thref=\\"https://github.com/vanillaiice/itpg\\"\\n\\t\\t\\t\\ttarget=\\"_blank\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\t<i>\\n\\t\\t\\t\\t\\t<img src=\\"/github.svg\\" alt=\\"github\\" />\\n\\t\\t\\t\\t</i>\\n\\t\\t\\t</a>\\n\\t\\t\\t<a class=\\"button circle transparent\\" href=\\"https://twitter.com/vanillaiiceee\\" target=\\"_blank\\">\\n\\t\\t\\t\\t<i>\\n\\t\\t\\t\\t\\t<img src=\\"/x.svg\\" alt=\\"twitter\\" />\\n\\t\\t\\t\\t</i>\\n\\t\\t\\t</a>\\n\\t\\t</section>\\n\\t</footer>\\n</div>\\n\\n<style>\\n\\t#home:hover {\\n\\t\\tcolor: var(--primary);\\n\\t\\tcursor: pointer;\\n\\t\\ttransition: linear 0.2s color;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAiMC,mBAAK,MAAO,CACX,KAAK,CAAE,IAAI,SAAS,CAAC,CACrB,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,MAAM,CAAC,IAAI,CAAC,KACzB"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $LoginStatus, $$unsubscribe_LoginStatus;
  $$unsubscribe_LoginStatus = subscribe(LoginStatus, (value) => $LoginStatus = value);
  let loginDialog, signupDialog;
  let type = "", msg = "";
  let themeDark = localStorage.getItem("theme") == "dark" ? true : false;
  const isLoggedIn = async () => {
    api.isLoggedIn().then((r) => {
      if (r) {
        set_store_value(LoginStatus, $LoginStatus = true, $LoginStatus);
        type = "primary";
        msg = "logged in";
      } else {
        set_store_value(LoginStatus, $LoginStatus = false, $LoginStatus);
      }
    }).catch(() => {
      set_store_value(LoginStatus, $LoginStatus = false, $LoginStatus);
    });
  };
  isLoggedIn();
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="max"><header class="fill"><nav><button class="circle transparent"><i data-svelte-h="svelte-pcqr2l">menu</i> <menu class="no-wrap"><a href="/" data-svelte-h="svelte-5a0zws">Home</a> <a href="/courses" data-svelte-h="svelte-1rrhvjn">Courses</a> <a href="/professors" data-svelte-h="svelte-caebbr">Professors</a> <a href="/scores" data-svelte-h="svelte-1kuq42z">Scores</a> ${$LoginStatus ? `<a href="/dashboard" data-svelte-h="svelte-f77er">Dashboard</a>` : ``}</menu></button> <div class="max"></div> ${!$LoginStatus ? `<nav class="no-space"><button class="border left-round small max" data-svelte-h="svelte-fudo3u"><span>Signup</span> <i>person_add</i></button> <button class="border right-round small max" data-svelte-h="svelte-b9rw55"><span>Login</span> <i>login</i></button></nav>` : `<button class="border small">${`Signed in
						<i data-svelte-h="svelte-brggrc">sync_saved_locally</i>`}</button>`} <button class="transparent small circle">${themeDark ? `<i data-svelte-h="svelte-1h1jdua">light_mode</i>` : `<i data-svelte-h="svelte-922dac">dark_mode</i>`}</button></nav> <div class="small-space"></div> <h5 class="small-padding" data-svelte-h="svelte-ezx1wq"><a href="/" id="home" class="svelte-xdwcoc">Is this professor good ?</a></h5></header> ${validate_component(Login, "Login").$$render(
      $$result,
      { dialog: loginDialog },
      {
        dialog: ($$value) => {
          loginDialog = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Signup, "Signup").$$render(
      $$result,
      { dialog: signupDialog },
      {
        dialog: ($$value) => {
          signupDialog = $$value;
          $$settled = false;
        }
      },
      {}
    )} <main class="responsive max padding">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Snackbar, "Snackbar").$$render(
      $$result,
      { type, msg },
      {
        type: ($$value) => {
          type = $$value;
          $$settled = false;
        },
        msg: ($$value) => {
          msg = $$value;
          $$settled = false;
        }
      },
      {}
    )} <footer class="fill fixed padding" data-svelte-h="svelte-slb6xx"><section class="center-align"><a class="no-margin center-align" href="/about">about</a>
			~
			<a class="no-margin center-align" href="/contact">contact</a>
			~
			<a class="no-margin center-align" href="/privacy">privacy</a>
			~
			<a class="no-margin center-align" href="/disclaimer">disclaimer</a></section> <section class="center-align"><a class="no-margin center-align link" href="https://github.com/vanillaiice" target="_blank">© 2024 🍦 vanillaiice</a>
			~ made with
			<a class="no-margin center-align link" href="https://beercss.com" target="_blank">beercss</a>
			&amp;
			<a class="button circle transparent no-margin" href="https://kit.svelte.dev/" target="_blank"><img class="tiny" src="/svelte-logo.svg" alt="sveltejs Logo"></a></section> <section class="center-align"><a class="button circle transparent" href="https://github.com/vanillaiice/itpg" target="_blank"><i><img src="/github.svg" alt="github"></i></a> <a class="button circle transparent" href="https://twitter.com/vanillaiiceee" target="_blank"><i><img src="/x.svg" alt="twitter"></i></a></section></footer> </div>`;
  } while (!$$settled);
  $$unsubscribe_LoginStatus();
  return $$rendered;
});
export {
  Layout as default
};
