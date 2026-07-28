self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // No cache especial por ahora, solo deja pasar los pedidos.
  // Esto es lo mínimo que Chrome/Android piden para permitir instalar la página.
});
