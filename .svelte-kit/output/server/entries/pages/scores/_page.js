import { a as api } from "../../../chunks/api.js";
async function load() {
  let data = await api.getScores();
  return data == null ? { courses: [] } : { courses: data };
}
export {
  load
};
