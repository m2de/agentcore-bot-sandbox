import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toCsv } from '../src/lib/csv.js';

test('quotes fields with commas and quotes', () => {
  assert.equal(toCsv([{ a: 'x,y', b: 'say "hi"' }], ['a', 'b']), 'a,b\n"x,y","say ""hi"""\n');
});
