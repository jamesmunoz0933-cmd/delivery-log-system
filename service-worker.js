const CACHE_NAME = 'delivery-log-cache-v1';
const urlsToCache = [
  'index.html',
  'style.css',
  'grab.html',
  'panda.html',
  'admin-login.html',
  'admin.html',
  'admin-dashboard.html',
  'monitor.html',
  'firebase.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
