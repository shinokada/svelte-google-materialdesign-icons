

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.97041162.js","_app/immutable/chunks/scheduler.b0e64abc.js","_app/immutable/chunks/index.6d672244.js","_app/immutable/chunks/stores.a8515b16.js","_app/immutable/chunks/singletons.13642528.js","_app/immutable/chunks/index.97201a03.js"];
export const stylesheets = [];
export const fonts = [];
