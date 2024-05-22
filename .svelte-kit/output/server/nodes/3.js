

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.DlJlmOvI.js","_app/immutable/chunks/scheduler.Dgxcbnqg.js","_app/immutable/chunks/index.BAd-COy6.js"];
export const stylesheets = [];
export const fonts = [];
