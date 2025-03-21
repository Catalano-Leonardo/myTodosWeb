export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BBJDkcmV.js","app":"_app/immutable/entry/app.BMi9nMQn.js","imports":["_app/immutable/entry/start.BBJDkcmV.js","_app/immutable/chunks/entry.Db6QlI1X.js","_app/immutable/chunks/runtime.DTpu0EA1.js","_app/immutable/entry/app.BMi9nMQn.js","_app/immutable/chunks/runtime.DTpu0EA1.js","_app/immutable/chunks/store.D2sDRlcC.js","_app/immutable/chunks/disclose-version.bFRTPyy0.js","_app/immutable/chunks/index-client.C6SZQ2dH.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
