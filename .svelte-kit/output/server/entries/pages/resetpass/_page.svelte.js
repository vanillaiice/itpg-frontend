import { c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
import { P as PasswordMeter } from "../../../chunks/PasswordMeter.js";
import { u as useForm, S as Snackbar } from "../../../chunks/Snackbar.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_resetForm;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const url = new URLSearchParams($page.url.search);
  const resetForm = useForm({
    code: {},
    email: {},
    password: {},
    newPassword: {}
  });
  $$unsubscribe_resetForm = subscribe(resetForm, (value) => value);
  let code = url.get("code") || "no code provided...";
  let password = "";
  let type = "", msg = "";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<title data-svelte-h="svelte-10n0fix">ITPG - Reset Password</title> <form><h6 class="padding" data-svelte-h="svelte-3ah5st">Reset Your Password</h6> <div class="field label suffix round border"><input name="code" type="text" autocomplete="off"${add_attribute("value", code, 0)}> <label data-svelte-h="svelte-87ysgm">confirmation code</label> <i data-svelte-h="svelte-1fzkmqf">code</i></div> <div class="field label suffix round border" data-svelte-h="svelte-ipwl8n"><input name="email" type="text" autocomplete="username"> <label>email</label> <i>email</i></div> <div class="field label suffix round border"><input name="password" type="password" autocomplete="new-password"${add_attribute("value", password, 0)}> <label data-svelte-h="svelte-19chdgt">new password</label> <i data-svelte-h="svelte-1bcfmfs">visibility</i></div> <div class="field label suffix round border" data-svelte-h="svelte-pqc3zv"><input name="newPassword" type="password" autocomplete="new-password"> <label>confirm password</label> <i>visibility</i></div> ${validate_component(PasswordMeter, "PasswordMeter").$$render(
      $$result,
      { password },
      {
        password: ($$value) => {
          password = $$value;
          $$settled = false;
        }
      },
      {}
    )} <button class="responsive margin" type="submit" data-svelte-h="svelte-1bhz3pt">Reset</button></form> ${validate_component(Snackbar, "Snackbar").$$render(
      $$result,
      { timeout: 3e3, type, msg },
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
    )}`;
  } while (!$$settled);
  $$unsubscribe_resetForm();
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
