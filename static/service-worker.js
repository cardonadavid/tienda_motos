self.addEventListener('install', function (e) {
    console.log('Service Worker Installed');
    e.waitUntil(
        caches.open('motostore-cache').then(function (cache) {
            return cache.addAll([
                '/',
                '/product',
                '/favorites',
                '/contacto',
                '/static/css/styles.css',
                '/static/images/icon.png'
            ]);
        })
    );
});

self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});
