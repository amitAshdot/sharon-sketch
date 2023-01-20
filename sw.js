const casheName = "integer-byte -site-v1";
const assets = [
    "/",
    "./index.html",
    "./index.php",
    "./css/index.css",
    "./css/index.min.css",
    "./js/app-1.0.js",
    "./js/jquery3.6.min.js",
    "./js/owl.carousel.min.js",
    "./images/favicon-32x32.png",
    "./images/favicon-16x16.png",
    "./images/logo/BOOMERANG-LOGO-FIN-W-.webp",
    "./images/logo/BOOMERANG-LOGO-FIN-M-.webp",
    "./images/logo/BOOMERANG-LOGO-FIN-S-.webp",
    "./images/logo/BOOMERANG-LOGO-FIN.webp",
    "./images/dtimg-new/1.webp",
    "./images/dtimg-new/2.webp",
    "./images/dtimg-new/3.webp",
    "./images/dtimg-new/4.webp",
    "./images/dtimg-new/5.webp",
    "./images/dtimg-new/6.webp",
    "./images/dtimg-new/7.webp",
    "./images/dtimg-new/8.webp",
    "./images/dtimg-new/9.webp",
    "./images/dtimg-new/10.webp",
    "./images/dtimg-new/11.webp",
    "./images/dtimg-new/12.webp",
    "./images/dtimg-new/13.webp",
    "./images/dtimg-new/14.webp",
    "./images/dtimg-new/15.webp",
    "./images/dtimg-new/16.webp",
    "./images/dtimg-new/17.webp",
    "./images/dtimg-new/18.webp",
    "./images/dtimg-new/19.webp",
    "./images/dtimg-new/20.webp",
    "./images/mobileimg-new/1 (1).webp",
    "./images/mobileimg-new/2 (1).webp",
    "./images/mobileimg-new/3.webp",
    "./images/mobileimg-new/4.webp",
    "./images/mobileimg-new/5.webp",
    "./images/mobileimg-new/6.webp",
    "./images/mobileimg-new/7.webp",
    "./images/mobileimg-new/8.webp",
    "./images/mobileimg-new/9.webp",
    "./images/mobileimg-new/10.webp",
    "./images/mobileimg-new/11.webp",
    "./images/mobileimg-new/12.webp",
    "./images/mobileimg-new/13.webp",
    "./images/mobileimg-new/14.webp",
    "./images/mobileimg-new/15.webp",
    "./images/mobileimg-new/16.webp",
    "./images/mobileimg-new/17.webp",
    "./images/mobileimg-new/18.webp",
    "./images/mobileimg-new/19.webp",
    "./images/mobileimg-new/20.webp",
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
