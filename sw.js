const CACHE = 'd-ysims-v1';
const ASSETS = ['/', '/index.html', '/animation-studio.html', '/anime-studio.html', '/story-studio.html'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS.filter(a => a !== '/animation-studio.html' && a !== '/anime-studio.html' && a !== '/story-studio.html')))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('/index.html')))));
