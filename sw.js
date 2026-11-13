// Service worker minimal supaya browser mengenali halaman ini sebagai aplikasi yang bisa diinstal.
// Tidak menyimpan data apa pun, semua permintaan diteruskan ke jaringan seperti biasa.
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function (e) { e.respondWith(fetch(e.request)); });
