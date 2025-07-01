const CACHE_NAME = 'licuarmelo-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/mas18.html',
  '/splash.html',
  '/css/style.css',
  '/manifest.json',
  '/images/cafe-logo.png',
  '/images/icon-menu.png',
  '/images/close-menu.webp',
  '/images/inicio-banner.png',
  '/images/img-4.jpg',
  '/images/img-5.jpg',
  '/images/img-10.jpg',
  '/images/img-11.jpg',
  '/images/img5.jpg',
  '/images/combos-banner.png',
  '/images/banana.png',
  '/images/cereza.jpg',
  '/images/manzana.png',
  '/images/mora-r.png',
  '/images/pera.jpg',
  '/images/uva.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap'
];

// Instala el Service Worker y guarda en caché los archivos necesarios
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Activa el Service Worker y elimina versiones antiguas de la caché
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
  self.clients.claim();
});

// Intercepta las solicitudes y responde desde la caché o la red
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(() =>
        caches.match('/offline.html') // opcional si quieres una página offline personalizada
      )
  );
});

