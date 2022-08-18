//cache= storage of browser
const CACHE_NAME = "version-1";
const urlsToCache = [
    "/",
    "index.html"
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
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
        console.log("fetch cache");

      return fetch(event.request).catch(() => caches.match("index.html"));
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
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
