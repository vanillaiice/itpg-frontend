import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { P as PasswordMeter } from "../../../chunks/PasswordMeter.js";
import { u as useForm, S as Snackbar } from "../../../chunks/Snackbar.js";
import { L as LoginStatus } from "../../../chunks/store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $deleteAccountForm, $$unsubscribe_deleteAccountForm;
  let $changePasswordForm, $$unsubscribe_changePasswordForm;
  let $LoginStatus, $$unsubscribe_LoginStatus;
  $$unsubscribe_LoginStatus = subscribe(LoginStatus, (value) => $LoginStatus = value);
  const changePasswordForm = useForm({ password: {}, newPassword: {} }, "changePasswordForm");
  $$unsubscribe_changePasswordForm = subscribe(changePasswordForm, (value) => $changePasswordForm = value);
  const deleteAccountForm = useForm({ email: {}, password: {} }, "deleteAccountForm");
  $$unsubscribe_deleteAccountForm = subscribe(deleteAccountForm, (value) => $deleteAccountForm = value);
  let password = "";
  let msg = "", type = "";
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<title data-svelte-h="svelte-12v1l9d">ITPG - Dashboard</title> ${$LoginStatus ? `<div><div class="tabs"><a${add_attribute("class", "active", 0)}>Change Password</a> <a${add_attribute("class", "", 0)}>Delete Account</a></div> <div class="${"page padding " + escape("active", true)}"><form><div class="field label suffix round border"><input name="password" type="password" autocomplete="current-password"> <label data-svelte-h="svelte-1onqqjm">current password</label> <i data-svelte-h="svelte-1bcfmfs">visibility</i></div> <div class="field label suffix round border"><input name="newPassword" type="password" autocomplete="new-password"${add_attribute("value", password, 0)}> <label data-svelte-h="svelte-19chdgt">new password</label> <i data-svelte-h="svelte-1ovqkdf">password</i></div> <div class="field label suffix round border"><input type="password" autocomplete="new-password"> <label data-svelte-h="svelte-1hjgefr">confirm password</label> <i data-svelte-h="svelte-1ovqkdf">password</i></div> ${validate_component(PasswordMeter, "PasswordMeter").$$render(
      $$result,
      { password },
      {
        password: ($$value) => {
          password = $$value;
          $$settled = false;
        }
      },
      {}
    )} <button class="responsive" ${!$changePasswordForm.valid ? "disabled" : ""}>Change</button></form></div> <div class="${"page padding " + escape("", true)}"><form><div class="field label suffix round border"><input name="email" type="text" autocomplete="username"> <label data-svelte-h="svelte-1e3qw5k">email</label> <i data-svelte-h="svelte-k2q616">email</i></div> <div class="field label suffix round border"><input name="password" type="password" autocomplete="current-password"> <label data-svelte-h="svelte-kcc32r">password</label> <i data-svelte-h="svelte-1bcfmfs">visibility</i></div> <div class="field label suffix round border"><input name="typeDelete" type="text" autocomplete="off"> <label data-svelte-h="svelte-hya63b">please type: &#39;delete&#39;</label> <i data-svelte-h="svelte-w2y6af">edit_note</i></div> <button class="responsive" ${!$deleteAccountForm.valid ? "disabled" : ""}>Delete</button></form></div></div>` : `<h1 class="error center-align" data-svelte-h="svelte-23xfdh">Not logged in...😔</h1>`} ${validate_component(Snackbar, "Snackbar").$$render(
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
    )}`;
  } while (!$$settled);
  $$unsubscribe_deleteAccountForm();
  $$unsubscribe_changePasswordForm();
  $$unsubscribe_LoginStatus();
  return $$rendered;
});
export {
  Page as default
};
