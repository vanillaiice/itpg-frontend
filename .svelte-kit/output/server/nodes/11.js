import * as universal from '../entries/pages/scores/_page.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/scores/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/scores/+page.js";
export const imports = ["_app/immutable/nodes/11.Cp5p6-02.js","_app/immutable/chunks/Snackbar.DbxO-GXt.js","_app/immutable/chunks/scheduler.Dgxcbnqg.js","_app/immutable/chunks/index.BnQT6tZ-.js","_app/immutable/chunks/index.BAd-COy6.js","_app/immutable/chunks/Table.BEDIcvDl.js","_app/immutable/chunks/validators.Rol07ro1.js"];
export const stylesheets = ["_app/immutable/assets/Table.aHMfhN_1.css"];
export const fonts = [];
