import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { readFileContents } from './readFileContents.mjs';

const contentPath = join(tmpdir(), 'readFileContents-content-test.txt');
const emptyPath = join(tmpdir(), 'readFileContents-empty-test.txt');
const missingPath = join(tmpdir(), 'readFileContents-missing-test.txt');

const CONTENT = 'hello world';

before(async () => {
  await writeFile(contentPath, CONTENT, 'utf-8');
  await writeFile(emptyPath, '', 'utf-8');
});

after(async () => {
  await rm(contentPath, { force: true });
  await rm(emptyPath, { force: true });
});

// AC1: A file with content returns its exact contents.
test('AC1: returns the contents of a non-empty file', async () => {
  assert.equal(await readFileContents(contentPath), CONTENT);
});

// AC2: An empty file returns an empty string.
test('AC2: returns an empty string for an empty file', async () => {
  assert.equal(await readFileContents(emptyPath), '');
});

// AC3: A missing file throws an Error whose message includes the path.
test('AC3: throws a descriptive error for a missing file', async () => {
  await assert.rejects(
    () => readFileContents(missingPath),
    (err) => {
      assert.ok(err instanceof Error);
      assert.ok(err.message.includes(missingPath));
      return true;
    },
  );
});
