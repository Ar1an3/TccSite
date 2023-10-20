const staticSiteTcc = "dev-tcc-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/dispositivos.png",
  "/images/navegadores.png",
  "/images/so.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticSiteTcc).then(cache => {
      cache.addAll(assets)
    })
  )
})