import { c as create_ssr_component, b as add_attribute } from "./ssr.js";
import z from "zxcvbn";
const PasswordMeter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { password = "" } = $$props;
  let { score = 0 } = $$props;
  let color = "";
  if ($$props.password === void 0 && $$bindings.password && password !== void 0)
    $$bindings.password(password);
  if ($$props.score === void 0 && $$bindings.score && score !== void 0)
    $$bindings.score(score);
  {
    {
      score = z(password).score;
      switch (true) {
        case score <= 1:
          color = "red-text";
          break;
        case score <= 2:
          color = "orange-text";
          break;
        case score <= 3:
          color = "light-green-text";
          break;
        default:
          color = "green-text";
      }
    }
  }
  return `<small data-svelte-h="svelte-1m6c1dw">Password strength</small> <progress${add_attribute("class", color, 0)}${add_attribute("value", score, 0)} max="4"></progress>`;
});
export {
  PasswordMeter as P
};
