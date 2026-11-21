import { readFileSync, writeFileSync } from 'node:fs';
import { volumes } from './volumes.mjs';
import { cast } from './cast.mjs';

const read = (path, encoding) => readFileSync(new URL(path, import.meta.url), encoding);
const dataUri = path => 'data:image/webp;base64,' + read('assets/' + path + '.webp').toString('base64');
const template = read('reader.template.html', 'utf8')
  .replace('__READER__', () => read('reader.js', 'utf8'))
  .replace('__BANNER__', () => dataUri('lake'));
const catalogue = volumes.map(({ slug, title }, i) => ({ slug, title, file: i === 0 ? 'index.html' : slug + '.html' }));

for (const [i, book] of volumes.entries()) {
  const chapters = JSON.parse(read('books/' + book.slug + '.json', 'utf8'));
  if (chapters.length !== book.count) throw new Error('Incorrect chapter count in ' + book.slug);
  const images = {};
  for (const [j, chapter] of chapters.entries()) {
    for (const key of ['title', 'recap', 'discuss', 'alt']) {
      if (chapter[key]?.length !== 2 || !chapter[key].every(s => typeof s === 'string' && s.trim())) {
        throw new Error(book.slug + ' chapter ' + (j + 1) + ' requires English and Czech ' + key);
      }
    }
    if (!chapter.recap.every(s => /^[^\[\]]*\[[^\[\]]+\][^\[\]]*$/.test(s))) {
      throw new Error('Missing recall answer in ' + book.slug + ' chapter ' + (j + 1));
    }
    chapter.art = 'scenes/' + book.slug + '/' + (j + 1);
    images[chapter.art] = dataUri(chapter.art);
  }
  const people = cast.filter(c => c.first[i]).map(({ id, first, ...fields }) => {
    const art = 'portraits/' + id;
    if (first[i] < 1 || first[i] > chapters.length) throw new Error('Invalid introduction for ' + id);
    images[art] = dataUri(art);
    return { ...fields, first: first[i], art };
  });
  const data = JSON.stringify({ book, catalogue, chapters, cast: people, images }).replaceAll('<', '\\u003c');
  const html = template.replace('__TITLE__', () => book.title[0]).replace('__GUIDE__', () => data);
  writeFileSync(new URL(catalogue[i].file, import.meta.url), html);
  console.log('✓ Harry Potter · ' + book.title[0] + ' · ' + chapters.length + ' illustrated entries');
}
