const CACHE_NAME = 'delivery-log-cache-v1';

const urlsToCache = [
  './',
  'index.html',
  'monitor.html',
  'style.css',
  'grab.html',
  'panda.html',
  'admin.html',
  'admin-login.html',
  'admin-dashboard.html',
  'grab-login.html',
  'panda-login.html',
  'firebase.js',
  'manifest.json',
  'icons/web-app-manifest-192x192.png',
  'icons/web-app-manifest-512x512.png'
];

// Install SW and cache all files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate SW
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
});

// Fetch cached files
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

