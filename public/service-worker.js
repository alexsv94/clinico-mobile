const staticCacheName = 's-app-v1'
const dynamicCacheName = 'd-app-v1'

const assetUrls = [
	'index.html',
	'offline.html',
	'./static/js/bundle.js',
	'appIcon_48x48.png',
	'appIcon_96x96.png',
	'appIcon_144x144.png',
	'appIcon_192x192.png',
	'appIcon_512x512.png',
	'manifest.json',
	'./static/js/vendors-node_modules_axios_index_js-node_modules_mobx-react-lite_es_index_js.chunk.js',
	'./static/js/vendors-node_modules_axios_index_js-node_modules_mobx-react-lite_es_index_js.chunk.js.map',
	'./static/js/src_pages_DeseasesPage_tsx.chunk.js',
	'./static/js/src_pages_DeseasesPage_tsx.chunk.js.map',
	'./static/js/src_pages_MedicationsPage_tsx.chunk.js',
	'./static/js/src_pages_MedicationsPage_tsx.chunk.js.map',
	'./static/js/src_pages_FavoritesPage_tsx.chunk.js',
	'./static/js/src_pages_FavoritesPage_tsx.chunk.js.map',
	'./static/js/src_pages_ProfilePage_tsx.chunk.js',
	'./static/js/src_pages_ProfilePage_tsx.chunk.js.map',
	'./static/js/src_pages_MainPage_tsx.chunk.js',
	'./static/js/src_pages_MainPage_tsx.chunk.js.map',

]

self.addEventListener('install', async event => {
	const cache = await caches.open(staticCacheName);
	await cache.addAll(assetUrls);
})

self.addEventListener('activate', async event => {
	const cacheNames = await caches.keys();
	await Promise.all(
		cacheNames
			.filter(name => name !== staticCacheName)
			.filter(name => name !== dynamicCacheName)
			.map(name => caches.delete(name))
	)
})

self.addEventListener('fetch', event => {
	const { request } = event

	const url = new URL(request.url)

	if (url.origin === location.origin) {
		event.respondWith(cacheFirst(request))
	} else {
		event.respondWith(networkFirst(request))
	}	
})

async function cacheFirst(request) {
	const cached = await caches.match(request);
	return cached || await fetch(request);
}

async function networkFirst(request) {	
	const cache = await caches.open(dynamicCacheName);

	try {
		const response = await fetch(request);
		cache.put(request, response.clone());
		return response;
	} catch (e) {
		console.log(e);
		const cached = await cache.match(request);
		return cached || await caches.match('./offline.html');
	}
	
}