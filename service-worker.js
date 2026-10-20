/* =========================================================
   service-worker.js — Cache do site (modo offline)
   Estratégia simples: guarda os arquivos na primeira visita
   e, depois disso, serve primeiro a cópia guardada.
   IMPORTANTE: ao alterar o site, mude a versão abaixo
   para forçar a atualização do cache.
   ========================================================= */

const CACHE_VERSAO = "escola-abel-v1";

// Arquivos que precisam ficar disponíveis offline
const ARQUIVOS = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
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
          .filter((nome) => nome !== CACHE_VERSAO) // só apaga as outras versões
          .map((nome) => caches.delete(nome))
      )
    )
  );
  self.clients.claim();
});

// ---------- Fetch: responde com o cache primeiro, depois da rede ----------
self.addEventListener("fetch", (evento) => {
  evento.respondWith(
    caches.match(evento.request).then((respostaCache) => {
      // Se já tem no cache, usa o cache; senão, busca na internet
      return respostaCache || fetch(evento.request);
    })
  );
});
