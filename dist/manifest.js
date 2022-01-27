export const manifest = {
	appDir: "_app",
	assets: new Set(["asdf-mini.svg","asdf.svg","favicon.png","fb-circle-icon.svg","insta-icon.svg","mocktaco.png","mocktaco.webp","moktac.svg","robots.txt","svelte-welcome.png","svelte-welcome.webp","tinos-logo.svg"]),
	_: {
		mime: {".svg":"image/svg+xml",".png":"image/png",".webp":"image/webp",".txt":"text/plain"},
		entry: {"file":"start-cc2fafa5.js","js":["start-cc2fafa5.js","chunks/vendor-70cf62c1.js","chunks/preload-helper-ec9aa979.js"],"css":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/3.js'),
			() => import('./server/nodes/4.js')
		],
		routes: [
			{
				type: 'endpoint',
				pattern: /^\/catering\.json$/,
				params: null,
				load: () => import('./server/entries/endpoints/catering/index.json.ts.js')
			},
			{
				type: 'page',
				pattern: /^\/catering\/?$/,
				params: null,
				path: "/catering",
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/catering\/([^/]+?)\.json$/,
				params: (m) => ({ uid: m[1]}),
				load: () => import('./server/entries/endpoints/catering/_uid_.json.ts.js')
			},
			{
				type: 'page',
				pattern: /^\/menu\/?$/,
				params: null,
				path: "/menu",
				a: [0,3],
				b: [1]
			}
		]
	}
};
