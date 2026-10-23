# Escola Abel — Site PWA (Projeto Escolar)

Projeto escolar de site institucional responsivo da **Escola Estadual Professor
Abel Freire Coelho**, feito em HTML, CSS e JavaScript. É um **PWA** (Progressive Web App): pode ser instalado
na tela inicial do celular e funciona offline.

**Desenvolvedor:** Mickael Medeiros Rodrigues — **3ª Série, Turma Informática**.

**Identidade visual:** azul-escuro, ciano e amarelo, inspirados na imagem `abel.png`.

## 📁 Arquivos do projeto

| Arquivo            | Função                                              |
| ------------------ | --------------------------------------------------- |
| `index.html`       | Estrutura do site (seções: Início, Sobre, Disciplinas, Contato) |
| `style.css`        | Visual (cores, layout, menu responsivo)             |
| `script.js`        | Menu hambúrguer, link ativo, instalação do app      |
| `manifest.json`    | Dados do PWA (nome, ícones, cores)                  |
| `service-worker.js`| Guarda os arquivos para funcionar offline           |
| `icons/`           | Ícones do aplicativo (192px e 512px)                |
| `abel.png`         | Logomarca da escola utilizada no cabeçalho e na apresentação |

## ▶️ Como executar (localmente)

1. Abra a pasta no **VS Code instalado no computador**.
2. Instale a extensão **Live Server**.
3. Clique com o botão direito em `index.html` → **Open with Live Server**.
4. O site abre no navegador em `http://127.0.0.1:5500`.

> O PWA (Service Worker e instalação) só funciona via **HTTP**, não abrindo o
> arquivo com `file://`. Por isso use o Live Server.
> O editor `vscode.dev` permite editar os arquivos, mas não executa o Live Server
> do computador. Para testar a instalação, publique via GitHub Pages usando HTTPS.

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
2. Toque em **📱 Instalar app** na página. Se o navegador permitir, o convite de
   instalação aparece; caso contrário, uma janela explica o procedimento.
3. **Android:** menu (3 pontos) → **Instalar aplicativo** / **Adicionar à tela inicial**.
   **iPhone:** botão **Compartilhar** → **Adicionar à Tela de Início**.
4. O ícone da Escola Abel aparece na tela inicial e o site abre como app,
   inclusive **sem internet** (offline).

> O botão fica visível no navegador mesmo se o evento `beforeinstallprompt`
> não estiver disponível; ele é ocultado quando o site está aberto como app instalado.

## ✅ Checklist

- [x] Design limpo, moderno e responsivo
- [x] Menu intuitivo com hambúrguer no celular
- [x] Manifesto e Service Worker configurados
- [x] Ícones 192px e 512px
- [x] Cores inspiradas na logomarca enviada pela escola
- [x] Identificação do desenvolvedor no rodapé
- [x] Sem banco de dados, login ou recursos desnecessários

> **Observação:** os antigos contatos de exemplo foram substituídos por
> orientações gerais. Antes de publicar como canal oficial, a escola deve
> fornecer endereço, telefone e e-mail verificados.
