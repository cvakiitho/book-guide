# Harry Potter

Open the [illustrated family guide](index.html) and choose a book. Each of the seven volume pages works offline as a single HTML file, in English or Czech.

Parent mode opens every entry for the selected book, with a recap, a reading mood and a question or read-aloud note. Kids mode opens artwork, a fill-in-the-blank memory game and character cards as chapters are marked read. The next unread entry offers a short reminder of the previous chapter. Progress is saved separately for each volume in the current browser. Parent mode can adjust the bookmark in either direction.

Chapter numbers follow the novels. The short headings are original guide captions. The last book also includes the epilogue after chapter 36.

## Build

Run `node harry-potter/build.mjs` from the repository root, or run `node build.mjs` to rebuild all series. The reader uses the generated pages directly from disk or from GitHub Pages.

- `books/*.json` contains chapter titles, recaps, discussion prompts and picture descriptions. Each pair is English followed by Czech. The bracketed phrase in each recap is the answer to the Kids memory game.
- `cast.mjs` contains the character cards and their first visible chapter in each volume. A zero omits the card from that volume.
- `assets/` holds the generated storybook artwork. The build embeds the WebP files in each page and fails if a required picture or chapter is missing.
