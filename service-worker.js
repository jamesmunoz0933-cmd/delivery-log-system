const CACHE_NAME = 'delivery-log-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  'style.css',
  'grab.html',
  'panda.html',
  'admin.html',
  'monitor.html',
  'admin-dashboard.html',
  'firebase.js',
  'icons/icon-192.png',
  'icons/icon-512.png'
];

// Install service worker and cache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Activate service worker and delete old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
});

// Fetch cached files if offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
