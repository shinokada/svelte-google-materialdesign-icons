

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sharp/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.51367402.js","_app/immutable/chunks/scheduler.b0e64abc.js","_app/immutable/chunks/index.6d672244.js","_app/immutable/chunks/tw-merge.72da6274.js","_app/immutable/chunks/index.e5de360c.js","_app/immutable/chunks/index.97201a03.js"];
export const stylesheets = [];
export const fonts = [];
