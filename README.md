# Enciclopedia MediaWiki

Enciclopedia estática en español con apariencia de MediaWiki/Wikipedia (skin Vector): información histórica y personas ilustres (históricas y actuales).

**Proyecto independiente** — no está relacionado ni alojado en genealogiasefardi.site ni HostGator. Vive solo en GitHub.

## Navegar
- GitHub Pages: https://sefaradmx-sys.github.io/MediaWiki/
- Activar: *Settings → Pages → Build and deployment → Deploy from a branch → `main` / `/docs` → Save*.
- Local: abre `docs/index.html` o ejecuta `python3 -m http.server -d docs` (la búsqueda requiere servidor por `fetch`).

## Estructura
- `docs/index.html` Portada · `docs/historia.html` · `docs/buscar.html`
- `docs/<persona>.html` artículos · `docs/categoria/*.html` categorías
- `docs/assets/wiki.css`, `docs/assets/wiki.js` · `docs/data/articles.json` índice de búsqueda

## Añadir un artículo
1. Copia un artículo existente (p. ej. `docs/antonio-garcia-carrillo.html`) con nombre URL-amigable.
2. Edita título, infobox, texto y `#catlinks`.
3. Añádelo a `docs/data/articles.json` (`title`, `url`, `summary`, `categories`).
4. Enlázalo en las páginas de `docs/categoria/` que correspondan y en la portada.
Usa siempre rutas relativas (`../` desde `categoria/`) para que funcione bajo `/MediaWiki/`.
