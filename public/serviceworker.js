//cache= storage of browser
const CACHE_NAME = "version-1";
const urlsToCache = [
  "/",
  "index.html",
  "manifest.json",
  "assets/logo.png",
  "assets/maskable.png",
  "favicon.ico",
  "assets/apple-touch-icon.png",
  "assets/logo-192.png",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css",
];

const self = this;

// Install SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");

      return cache.addAll(urlsToCache);
    })
  );
});

// Listen for requests , deals with cached file while offline
// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then(() => {
//       console.log("fetch cache", event.request);

//       return fetch(event.request).catch(() => caches.match("index.html"));
//     })
//   );
// });

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        if (response) {
          console.log("found", event.request.url, "in cache");
          return response;
        }

        console.log("not in canche", event.request.url);

        return fetch(event.request).then((response) => {
          if (response.status === 404) {
            return caches.match("/index.html");
          }

          return response;
        });
      })
      .catch((error) => {
        console.error("failed to fetch", event.request.url);
        return caches.match("/index.html");
      })
  );
});

//or
// self.addEventListener("fetch", (event) => {
//   console.log("event", event);
//   event.respondWith(
//     caches.match(event.request).then((cache) => {
//       console.log("cache", cache);
//       return cache || fetch(event.request);
//     })
//   );
// });

// Activate the SW , clean up old cache
self.addEventListener("activate", (event) => {
  console.log("active", event);
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // if (!cacheWhitelist.includes(cacheName)) {
          //   return caches.delete(cacheName);
          //}
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
