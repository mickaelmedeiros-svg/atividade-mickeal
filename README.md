# Escola Abel — Site PWA (Projeto Escolar)

Site institucional simples, moderno e responsivo da **Escola Abel**, feito em
HTML, CSS e JavaScript. É um **PWA** (Progressive Web App): pode ser instalado
na tela inicial do celular e funciona offline.

## 📁 Arquivos do projeto

| Arquivo            | Função                                              |
| ------------------ | --------------------------------------------------- |
| `index.html`       | Estrutura do site (seções: Início, Sobre, Disciplinas, Contato) |
| `style.css`        | Visual (cores, layout, menu responsivo)             |
| `script.js`        | Menu hambúrguer, link ativo, instalação do app      |
| `manifest.json`    | Dados do PWA (nome, ícones, cores)                  |
| `service-worker.js`| Guarda os arquivos para funcionar offline           |
| `icons/`           | Ícones do aplicativo (192px e 512px)                |

## ▶️ Como executar (localmente)

1. Abra a pasta no **VS Code** (ou [vscode.dev/github](https://vscode.dev/github) para o VS Code Online).
2. Instale a extensão **Live Server**.
3. Clique com o botão direito em `index.html` → **Open with Live Server**.
4. O site abre no navegador em `http://127.0.0.1:5500`.

> O PWA (Service Worker e instalação) só funciona via **HTTP**, não abrindo o
> arquivo com `file://`. Por isso use o Live Server.

## 📦 Como publicar no GitHub (GitHub Pages)

1. Crie um repositório no GitHub e envie os arquivos:
   ```bash
   git init
   git add .
   git commit -m "Site PWA da Escola Abel"
   git branch -M main
   git remote add origin https://github.com/SEU-usuario/SEU-repositorio.git
   git push -u origin main
   ```
2. No repositório: **Settings → Pages → Source: Deploy from a branch**,
   branch `main`, pasta `/ (root)` → **Save**.
3. Aguarde 1–2 minutos. O site ficará em:
   `https://SEU-usuario.github.io/SEU-repositorio/`

## 📱 Como instalar no celular

1. Abra o site publicado no **Chrome** (Android) ou **Safari** (iPhone).
2. **Android:** menu (3 pontos) → **Instalar aplicativo** / **Adicionar à tela inicial**.
   **iPhone:** botão **Compartilhar** → **Adicionar à Tela de Início**.
3. O ícone da Escola Abel aparece na tela inicial e o site abre como app,
   inclusive **sem internet** (offline).

## ✅ Checklist

- [x] Design limpo, moderno e responsivo
- [x] Menu intuitivo com hambúrguer no celular
- [x] Manifesto e Service Worker configurados
- [x] Ícones 192px e 512px
- [x] Sem banco de dados, login ou recursos desnecessários
