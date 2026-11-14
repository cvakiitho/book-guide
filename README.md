# The Ring's Journey 💍

Two interactive reading guides in English and Czech.

- [The Fellowship of the Ring](https://cvakiitho.github.io/readLOTR/) is a read-aloud guide for families reading Tolkien.
- [Malazan Book of the Fallen](https://cvakiitho.github.io/readLOTR/malazan/) is a reader’s guide to all ten volumes of Steven Erikson’s series. See the [Malazan README](malazan/README.md) for the volume list and content structure.

For offline reading, open `index.html` for Tolkien or `malazan/index.html` for Malazan. Each volume has its own self-contained HTML file.

## What the app does

- 🗺️ **Journey map** — the Fellowship's marked route plus a strip of stops; in Kids mode there are no spoilers (it unlocks as you read).
- 🧙 **Characters** — painted portraits with a "story so far" diary and (in other languages) how to say the names.
- 🖼️ **A chapter illustration** — a painted scene of the key moment, with a caption.
- 📖 **Chapters** — a *Parent* mode (summary, what to look out for, questions, a "scariness meter", vocabulary) and a *Kids* mode ("what happened" recaps + quizzes, all spoiler-free).
- 🌍 **World & Relations** — what the One Ring is, who Sauron is, the peoples of Middle-earth, a timeline, and how everyone is connected.
- 🌍 **Language switcher** (🌐) and 🌗 **light/dark theme** in the header.

## Languages

The app is **English-first**; Czech is an optional alternate, switchable in the header (🌐). Nothing is hard-coded per language:

- **UI strings** live in the `UI = { en, cs }` dictionary, read via `T('key')`.
- **Content** fields are per-field language maps, e.g. `sum: { en: '…', cs: '…' }`, read via `t(field)` (which falls back to English).

To add a language, add its key (e.g. `de`) to the `UI` dictionary and to the content maps. Structural data (chapter order, scariness ratings, map coordinates, quiz answers) is shared across all languages, so it can't drift.

Czech character and place names follow the translation by **Stanislava Pošustová**; English uses Tolkien's original names.

## Project structure

- `index.html` and `stredozem.html` — the built Tolkien guide with images inlined. Both URLs serve the same guide.
- `stredozem.template.html` — the **source template** (HTML/CSS/JS). Edit here.
- `assets/` — images inlined at build time:
  - `map.jpg` — the map of Middle-earth (optimised, the build input),
  - `portraits/<id>.jpg` — character portraits (`id` = e.g. `frodo`, `gandalf`, `stara-vrba`),
  - `scenes/<n>.jpg` — chapter illustrations `1`–`22`.
- `malazan/` — the Malazan engine, book data, map, tests and generated volume pages.
- `build.mjs` — builds both guides with Node.js 18 or later.
- `mapa-stredozem-original.jpg` — the original high-res map (10000×5455). **Not in the repo** — kept locally only. The build doesn't need it; it uses the optimised `assets/map.jpg`.

## Build

After editing the template or the images, run:

```bash
node build.mjs
```

The Tolkien build reads `stredozem.template.html`, inlines its images and writes `index.html` and `stredozem.html`. The Malazan build writes `malazan/index.html` and ten individual volume pages. Commit the generated HTML so GitHub Pages can serve both guides from the root of `main`.

Tolkien image tokens and their sources are listed below.

| token | source |
| --- | --- |
| `__MAP_DATA_URI__` | `assets/map.jpg` |
| `__IMG_<id>__` | `assets/portraits/<id>.jpg` |
| `__SCENE_<n>__` | `assets/scenes/<n>.jpg` |

The token list is read straight from the template, and the build fails if any token is left unreplaced or an image is missing — so you can't ship a broken file.
