// Compatibility file. The app does not register this service worker.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',()=>self.clients.claim());
