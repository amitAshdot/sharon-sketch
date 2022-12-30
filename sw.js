const casheName = "integer-byte -site-v1";
const assets = [
    "/",
    "index.html",
    "css/index.css",
    "css/index.min.css",
    "js/app.js",
    "js/jquery3.6.min.js",
    "js/owl.carousel.min.js",
    "images/favicon-32x32.png",
    "images/favicon-16x16.png",
    "images/logo/BOOMERANG-LOGO-FIN-W-.webp",
    "images/logo/BOOMERANG-LOGO-FIN-M-.webp",
    "images/logo/BOOMERANG-LOGO-FIN-S-.webp",
    "images/floating/BOOMERANG-PRICE-BACK-_1_-_1_.webp",
    "images/temp-woman-m.webp",
    "images/temp-woman.webp",
    "images/floating/My-project.webp",
    "images/logo/BOOMERANG-LOGO-FIN.webp",
    "images/logo/BOOMERANG-LOGO-FIN-S.webp",
    "images/logo/BOOMERANG-LOGO-FIN-M.webp",
    "images/logo/BOOMERANG-LOGO-FIN-W.webp",
    "images/temp-bg.webp",
    "images/temp-bg-m.webp",
    "images/temp-bg-m.webp",
    "fonts/ploni-regular-aaa.otf",
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(casheName).then(cache => {
            cache.addAll(assets)
        })
    )
});

// activate event
self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== assets)
                .map(key => caches.delete(key))
            );
        })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
});
