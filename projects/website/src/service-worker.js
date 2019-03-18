import { shell, timestamp } from "@sapper/service-worker";

const PRECACHE = `precache-${timestamp}`;
const RUNTIME = `runtime-${timestamp}`;

const precacheUrls = ["/"].concat(shell);

self.addEventListener("install", event => {
  event.waitUntil(
    caches
      .open(PRECACHE)
      .then(cache => cache.addAll(precacheUrls))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  const currentCaches = [PRECACHE, RUNTIME];

  event.waitUntil(
    caches
      .keys()
      .then(cacheNames =>
        cacheNames.filter(cacheName => !currentCaches.includes(cacheName))
      )
      .then(cachesToDelete =>
        Promise.all(
          cachesToDelete.map(cacheToDelete => caches.delete(cacheToDelete))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return caches
        .open(RUNTIME)
        .then(cache =>
          fetch(event.request).then(response =>
            cache.put(event.request, response.clone()).then(() => response)
          )
        );
    })
  );
});
