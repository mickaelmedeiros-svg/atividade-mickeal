/* =========================================================
   script.js — Site da Escola Abel (PWA)
   1. Menu hambúrguer (celular)
   2. Link ativo conforme a rolagem
   3. Registro do Service Worker (modo offline)
   4. Botão para instalar o aplicativo
   ========================================================= */

// ---------- 1. Menu hambúrguer (celular) ----------
const menuBotao = document.getElementById("menuBotao");
const menuLista = document.getElementById("menuLista");

menuBotao.addEventListener("click", () => {
  // Alterna a classe "aberto" que mostra/esconde o menu
  menuLista.classList.toggle("aberto");
  menuBotao.classList.toggle("aberto");

  // Atualiza o atributo para acessibilidade (leitores de tela)
  const aberto = menuLista.classList.contains("aberto");
  menuBotao.setAttribute("aria-expanded", aberto);
  menuBotao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});

// O menu móvel também pode ser fechado pela tecla Escape.
document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape" && menuLista.classList.contains("aberto")) {
    menuLista.classList.remove("aberto");
    menuBotao.classList.remove("aberto");
    menuBotao.setAttribute("aria-expanded", "false");
    menuBotao.setAttribute("aria-label", "Abrir menu");
    menuBotao.focus();
  }
});

// Fecha o menu depois que um link é clicado
document.querySelectorAll(".menu-link").forEach((link) => {
  link.addEventListener("click", () => {
    menuLista.classList.remove("aberto");
    menuBotao.classList.remove("aberto");
    menuBotao.setAttribute("aria-expanded", "false");
    menuBotao.setAttribute("aria-label", "Abrir menu");
  });
});

// ---------- 2. Marca o link da seção visível na tela ----------
const secoes = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".menu-link");

function atualizarLinkAtivo() {
  // Percorre as seções e verifica qual está mais próxima do topo
  let atual = "";
  secoes.forEach((secao) => {
    if (window.scrollY >= secao.offsetTop - 120) {
      atual = secao.id;
    }
  });

  links.forEach((link) => {
    link.classList.toggle("ativo", link.getAttribute("href") === "#" + atual);
  });
}

window.addEventListener("scroll", atualizarLinkAtivo);
atualizarLinkAtivo();

// ---------- 3. Registro do Service Worker (funciona offline) ----------
// O Service Worker só funciona quando o site é servido por HTTP
// (ex.: Live Server no VS Code ou GitHub Pages). Não roda em file://.
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then(() => console.log("Service Worker registrado com sucesso!"))
      .catch((erro) => console.log("Erro ao registrar o Service Worker:", erro));
  });
}

// ---------- 4. Botão "Instalar app" (PWA) ----------
let promptInstalacao = null;
const botaoInstalar = document.getElementById("botaoInstalar");

// O evento "beforeinstallprompt" só dispara em navegadores que suportam PWA
window.addEventListener("beforeinstallprompt", (evento) => {
  // Impede que o navegador mostre o aviso automático agora
  evento.preventDefault();
  promptInstalacao = evento;
  // Mostra o nosso botão personalizado
  botaoInstalar.hidden = false;
});

botaoInstalar.addEventListener("click", async () => {
  if (!promptInstalacao) return;
  promptInstalacao.prompt(); // mostra o diálogo de instalação
  await promptInstalacao.userChoice; // espera a escolha do usuário
  promptInstalacao = null;
  botaoInstalar.hidden = true; // esconde o botão depois da escolha
});

// Esconde o botão se o app já estiver instalado
window.addEventListener("appinstalled", () => {
  botaoInstalar.hidden = true;
});

// ---------- 5. Ano do rodapé (evita atualizar manualmente) ----------
document.getElementById("ano").textContent = new Date().getFullYear();
