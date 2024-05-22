import * as universal from '../entries/pages/professors/_page.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/professors/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/professors/+page.js";
export const imports = ["_app/immutable/nodes/9.B-aKrHpQ.js","_app/immutable/chunks/Snackbar.DbxO-GXt.js","_app/immutable/chunks/scheduler.Dgxcbnqg.js","_app/immutable/chunks/index.BnQT6tZ-.js","_app/immutable/chunks/index.BAd-COy6.js","_app/immutable/chunks/Table.BEDIcvDl.js","_app/immutable/chunks/validators.Rol07ro1.js"];
export const stylesheets = ["_app/immutable/assets/Table.aHMfhN_1.css"];
export const fonts = [];
