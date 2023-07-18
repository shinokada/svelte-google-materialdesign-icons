

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.md.js')).default;
export const imports = ["_app/immutable/nodes/2.c367f088.js","_app/immutable/chunks/scheduler.b0e64abc.js","_app/immutable/chunks/index.6d672244.js"];
export const stylesheets = [];
export const fonts = [];
