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

test('the fourth volume route visits its second movement stop', () => {
  const book = books.find(item => item.meta.vol === 4);
  const stop = book.PLACES.find(place => place.gi === 2);
  const routes = data('../books/routes.js', 'ROUTES');
  assert.ok(routes.find(route => route.vol === 4).pts.some(
    ([x, y, gi]) => gi === 2 && x === stop.x && y === stop.y,
  ));
});
