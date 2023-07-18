export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","css/vue.css","favicon-16x16.png","favicon-32x32.png","favicon.ico","images/google-filled-optimized.png","images/google-filled.png","images/google-material1.png","images/google-material1.webp","images/google-material2.png","images/google-material2.webp","images/google-material3.png","images/google-material3.webp","images/google-material4.png","images/google-material4.webp","images/google-material5.png","images/google-material5.webp","images/google-outlined-optimized-650-1050.png","images/google-outlined-optimized.png","images/google-outlined.png","images/google-round-optimized.png","images/google-round.png","images/google-sharp-optimized.png","images/google-sharp.png","images/google-two-tones-optimized.png","images/google-two-tones.png","maskable_icon_x192.png","styles/docs.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css",".ico":"image/vnd.microsoft.icon",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.86598252.js","app":"_app/immutable/entry/app.4acd7d14.js","imports":["_app/immutable/entry/start.86598252.js","_app/immutable/chunks/scheduler.b0e64abc.js","_app/immutable/chunks/singletons.13642528.js","_app/immutable/chunks/index.97201a03.js","_app/immutable/entry/app.4acd7d14.js","_app/immutable/chunks/scheduler.b0e64abc.js","_app/immutable/chunks/index.6d672244.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/filled",
				pattern: /^\/filled\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/outlined",
				pattern: /^\/outlined\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/round",
				pattern: /^\/round\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/sharp",
				pattern: /^\/sharp\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/two-tone",
				pattern: /^\/two-tone\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
