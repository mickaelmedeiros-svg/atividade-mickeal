/* Cache offline. Ao editar arquivos, altere CACHE_VERSAO para atualizar o app. */

const CACHE_VERSAO = "escola-abel-v2";

// Arquivos que precisam ficar disponíveis offline
const ARQUIVOS = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./abel.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
];

// ---------- Instala: baixa e guarda os arquivos no cache ----------
self.addEventListener("install", (evento) => {
  evento.waitUntil(
    caches.open(CACHE_VERSAO).then((cache) => cache.addAll(ARQUIVOS))
  );
  self.skipWaiting(); // ativa imediatamente sem esperar
});

// ---------- Ativa: limpa caches antigos de versões anteriores ----------
self.addEventListener("activate", (evento) => {
  evento.waitUntil(
    caches.keys().then((nomes) =>
      Promise.all(
        nomes
          .filter((nome) => nome.startsWith("escola-abel-") && nome !== CACHE_VERSAO)
          .map((nome) => caches.delete(nome))
      )
    )
  );
  self.clients.claim();
});

// ---------- Navegação: rede primeiro; recursos estáticos: cache primeiro ----------
self.addEventListener("fetch", (evento) => {
  // O cache é usado apenas para recursos deste site; solicitações externas seguem a rede.
  if (new URL(evento.request.url).origin !== self.location.origin || evento.request.method !== "GET") return;

  // Páginas: busca a versão atualizada e usa a cópia offline em caso de falha.
  if (evento.request.mode === "navigate") {
    evento.respondWith(
      (async () => {
        try {
          const resposta = await fetch(evento.request);
          if (resposta.ok) {
            const cache = await caches.open(CACHE_VERSAO);
            await cache.put(evento.request, resposta.clone());
          }
          return resposta;
        } catch {
          return (await caches.match(evento.request)) || (await caches.match("./index.html"));
        }
      })()
    );
    return;
  }

  // Imagens, CSS, JS e manifesto: cópia local primeiro.
  evento.respondWith(caches.match(evento.request).then((resposta) => resposta || fetch(evento.request)));
});
