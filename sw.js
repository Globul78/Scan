const CACHE_NAME = 'mekohm-scan-v11';

// Fichiers essentiels à sauvegarder dans la mémoire de l'iPhone
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json'
];

// Installation : mise en cache des fichiers de base
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

// Activation : nettoyage des anciennes versions du cache
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Interception réseau : sert depuis le cache si hors-ligne, et met en cache les scripts (OpenCV, jsPDF) au passage
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request)
        .then((networkResponse) => {
          // Sauvegarde automatique des scripts CDN (OpenCV, jsPDF, etc.) lors du 1er chargement
          if (event.request.method === 'GET' && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => caches.match('./index.html'));
    })
  );
});
