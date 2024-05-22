import { a as api } from "../../../chunks/api.js";
async function load() {
  let data = await api.getCourses();
  return data == null ? { courses: [] } : { courses: data };
}
export {
  load
};
