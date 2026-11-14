import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const data = (file, expression) => runInNewContext(
  `${readFileSync(new URL(file, import.meta.url), 'utf8')}\n${expression}`,
  { L: (en, cs) => ({ en, cs }) },
);
const books = readdirSync(new URL('../books/', import.meta.url))
  .filter(file => file.endsWith('.js') && !['cast.js', 'routes.js'].includes(file))
  .map(file => data(`../books/${file}`, 'BOOK'));

test('reader content thresholds are reachable within each volume', () => {
  for (const book of books) {
    const max = book.CH.length;
    const thresholds = [book.meta.timelineMin, ...(book.loreExtra || []).map(item => item.min),
      ...(book.relations?.blocks || []).map(block => block.min),
      ...(book.relations?.ensemble ? [book.relations.ensemble.min] : [])];
    for (const min of thresholds) {
      assert.ok(Number.isInteger(min) && min >= 1 && min <= max,
        `${book.meta.slug}: invalid reader-content threshold ${min}`);
    }
  }
});

test('each offline volume includes the atlas routes and keeps their stops in bounds', () => {
  const expected = books.slice().sort((a, b) => a.meta.vol - b.meta.vol).map(book => {
    const stops = book.map ? book.map.worldStops.map(id => book.PLACES.find(place => place.id === id)) : book.PLACES;
    return { vol: book.meta.vol, pts: Array.from(stops, ({ x, y, gi }) => [x, y, gi]) };
  });

  for (const book of books) {
    const { slug, mapFrame } = book.meta;
    const html = readFileSync(new URL(`../${slug}.html`, import.meta.url), 'utf8');
    const routes = JSON.parse(html.match(/^  var ROUTES = (.+);$/m)[1]);
    assert.deepEqual(routes.map(({ vol, pts }) => ({ vol, pts })), expected);
    for (const { x, y, id } of book.PLACES) {
      if (x === null && y === null) continue;
      assert.ok(x / 100 >= mapFrame.x0 && x / 100 <= mapFrame.x1 &&
        y / 100 >= mapFrame.y0 && y / 100 <= mapFrame.y1, `${slug}: ${id} is outside the regional frame`);
    }
  }
});

test('regional maps embed both languages and every stop fits the map', () => {
  for (const book of books.filter(book => book.map)) {
    const { slug } = book.meta;
    const html = readFileSync(new URL(`../${slug}.html`, import.meta.url), 'utf8');
    const img = html.match(/<img [^>]*id="mapImg"[^>]*>/)[0];
    for (const [attribute, lang] of [['src', 'en'], ['data-src-cs', 'cs']]) {
      const encoded = img.match(new RegExp(` ${attribute}="data:image/svg\\+xml;base64,([^"]+)"`))[1];
      const svg = Buffer.from(encoded, 'base64').toString('utf8');
      assert.ok(svg.includes(`<title>${book.map.title[lang]}</title>`), `${slug}: missing ${lang} map`);
      assert.doesNotMatch(svg, /data-cs=/);
    }
    assert.match(img, /data-world-en="data:image\/svg\+xml;base64,/);
    assert.match(img, /data-world-cs="data:image\/svg\+xml;base64,/);
    for (const { id, region } of book.PLACES) {
      if (region === null) continue;
      assert.ok(region.length === 2 && region.every(value => value >= 0 && value <= 100),
        `${slug}: ${id} is outside the regional map`);
    }
  }
});

test('Coltaine’s march follows the reading order from Hissar to Aren', () => {
  const book = books.find(book => book.meta.slug === 'dum-mrtvych');
  const { route } = book.map;
  for (const [i, [x, y, gi]] of route.entries()) {
    assert.ok(x >= 0 && x <= 100 && y >= 0 && y <= 100);
    assert.ok(gi >= 4 && gi <= 5 && (i === 0 || gi >= route[i - 1][2]));
  }
  const hissar = book.PLACES.find(place => place.id === 'hissar');
  const aren = book.PLACES.find(place => place.id === 'aren');
  assert.deepEqual(Array.from(route[0]), [...hissar.region, hissar.gi]);
  assert.deepEqual(Array.from(route.at(-1)), [...aren.region, aren.gi]);
});
