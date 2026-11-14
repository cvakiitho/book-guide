# Book Guide

Interactive reading companions in English and Czech. Each guide has a map, chapter notes, characters, and reading progress stored in the browser.

| Guide | Volumes | Source |
| --- | --- | --- |
| [The Lord of the Rings](lotr/index.html) | All three Tolkien volumes | [Tolkien guide](lotr/README.md) |
| [Malazan Book of the Fallen](malazan/index.html) | All ten Steven Erikson volumes | [Malazan guide](malazan/README.md) |

Open the [published site](https://cvakiitho.github.io/book-guide/) or open `index.html` from a local checkout. The generated volume pages work offline.

## Build and test

Use Node.js 18 or later. From the repository root, run:

```sh
node build.mjs
node --test malazan/tests/progress.test.mjs
```

Each guide keeps its engine, book data, images and generated pages in its own folder. GitHub Pages serves the committed HTML from the root of `main`.

The Tolkien guide originated in [brychtaj/readLOTR](https://github.com/brychtaj/readLOTR). Its commit history is included in this repository.
